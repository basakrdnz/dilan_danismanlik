import { readFileSync } from 'fs';
import { join } from 'path';
import { getKVYorumlar, saveYorumToKV } from '../../../lib/redis';

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
