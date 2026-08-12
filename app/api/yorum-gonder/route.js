import { readFileSync } from 'fs';
import { join } from 'path';
import { getKVYorumlar, saveYorumToKV, deleteYorumFromKV } from '../../../lib/redis';

function yetkiliMi(request) {
  const secret = process.env.YORUM_ADMIN_SECRET;
  if (!secret) return false;
  return request.headers.get('x-admin-secret') === secret;
}

// Seed verisi (JSON dosyasındaki mevcut yorumlar) — sadece e-posta kontrolü için
function getSeedEmails() {
  try {
    const filePath = join(process.cwd(), 'data', 'yorumlar.json');
    const raw = readFileSync(filePath, 'utf-8');
    const data = JSON.parse(raw);
    return data.map((y) => y.email.toLowerCase());
  } catch {
    return [];
  }
}

function generateId() {
  return `yorum-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
}

export async function POST(request) {
  try {
    const body = await request.json();
    const { ad, soyad, email, yorum } = body;

    // Zorunlu alan kontrolü
    if (!ad || !soyad || !email || !yorum) {
      return Response.json(
        { error: 'Tüm alanlar zorunludur.' },
        { status: 400 }
      );
    }

    // Yorum minimum uzunluk kontrolü
    if (yorum.trim().length < 50) {
      return Response.json(
        { error: 'Yorum en az 50 karakter olmalıdır.' },
        { status: 400 }
      );
    }

    // E-posta format kontrolü
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return Response.json(
        { error: 'Geçerli bir e-posta adresi girin.' },
        { status: 400 }
      );
    }

    const normalizedEmail = email.trim().toLowerCase();

    // Seed verisinde aynı email var mı?
    const seedEmails = getSeedEmails();
    if (seedEmails.includes(normalizedEmail)) {
      return Response.json(
        { error: 'Bu e-posta adresiyle daha önce yorum gönderilmiş.' },
        { status: 409 }
      );
    }

    // KV'deki yorumlarda aynı email var mı?
    const kvYorumlar = await getKVYorumlar();
    const kvEmailKullanilmis = kvYorumlar.some(
      (y) => y.email === normalizedEmail
    );
    if (kvEmailKullanilmis) {
      return Response.json(
        { error: 'Bu e-posta adresiyle daha önce yorum gönderilmiş.' },
        { status: 409 }
      );
    }

    // Yeni yorumu oluştur ve kaydet
    const yeniYorum = {
      id: generateId(),
      ad: ad.trim(),
      soyad: soyad.trim(),
      email: normalizedEmail,
      yorum: yorum.trim(),
      rating: 5,
      role: 'Danışan',
      tarih: new Date().toISOString(),
      onaylandi: true,
    };

    await saveYorumToKV(yeniYorum);

    return Response.json({ success: true });
  } catch (err) {
    console.error('API route error:', err);

    // Redis yapılandırılmamışsa özel mesaj
    if (err.message === 'Redis yapılandırılmamış.') {
      return Response.json(
        { error: 'Yorum sistemi henüz yapılandırılmamış. Lütfen daha sonra tekrar deneyin.' },
        { status: 503 }
      );
    }

    return Response.json(
      { error: 'Sunucu hatası oluştu.' },
      { status: 500 }
    );
  }
}

// Yönetim: KV'deki yorumları listeler (id'leri görmek için).
export async function GET(request) {
  if (!yetkiliMi(request)) {
    return Response.json({ error: 'Yetkisiz.' }, { status: 401 });
  }

  const kvYorumlar = await getKVYorumlar();
  return Response.json({ yorumlar: kvYorumlar });
}

// Yönetim: id'si verilen yorumu KV'den siler.
export async function DELETE(request) {
  if (!yetkiliMi(request)) {
    return Response.json({ error: 'Yetkisiz.' }, { status: 401 });
  }

  const id = new URL(request.url).searchParams.get('id');
  if (!id) {
    return Response.json({ error: 'id parametresi gerekli.' }, { status: 400 });
  }

  try {
    const silindi = await deleteYorumFromKV(id);
    if (!silindi) {
      return Response.json({ error: 'Bu id ile bir yorum bulunamadı.' }, { status: 404 });
    }
    return Response.json({ success: true });
  } catch (err) {
    console.error('API route DELETE error:', err);
    return Response.json({ error: 'Sunucu hatası oluştu.' }, { status: 500 });
  }
}
