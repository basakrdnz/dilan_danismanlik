import { Resend } from 'resend';
import { readFileSync, writeFileSync, existsSync } from 'fs';
import { join } from 'path';

const resend = new Resend(process.env.RESEND_API_KEY);

// Gönderilmiş mailleri saklayan dosyanın yolu
const DB_PATH = join(process.cwd(), 'data', 'yorum-mailler.json');

function getSubmittedEmails() {
  try {
    if (!existsSync(DB_PATH)) return [];
    const raw = readFileSync(DB_PATH, 'utf-8');
    return JSON.parse(raw);
  } catch {
    return [];
  }
}

function saveEmail(email) {
  const emails = getSubmittedEmails();
  emails.push(email.toLowerCase());
  const dir = join(process.cwd(), 'data');
  if (!existsSync(dir)) {
    const { mkdirSync } = require('fs');
    mkdirSync(dir, { recursive: true });
  }
  writeFileSync(DB_PATH, JSON.stringify(emails, null, 2), 'utf-8');
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

    // Aynı mail tekrar gönderim kontrolü
    const submittedEmails = getSubmittedEmails();
    if (submittedEmails.includes(email.toLowerCase())) {
      return Response.json(
        { error: 'Bu e-posta adresiyle daha önce yorum gönderilmiş.' },
        { status: 409 }
      );
    }

    const { error } = await resend.emails.send({
      from: 'Dilan Danışmanlık <onboarding@resend.dev>',
      to: ['basak.karadeniz0@gmail.com'],
      subject: `📝 Yeni Yorum Talebi — ${ad} ${soyad}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; background: #f9fafb; border-radius: 12px;">
          <h2 style="color: #1e3a5f; margin-bottom: 4px;">Yeni Yorum Talebi</h2>
          <p style="color: #6b7280; margin-top: 0; font-size: 14px;">Sitenden yeni bir yorum gönderildi. Onaylarsan ekleyebiliriz.</p>
          
          <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 20px 0;" />

          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px 0; color: #374151; font-weight: 600; width: 120px;">Ad Soyad</td>
              <td style="padding: 10px 0; color: #111827;">${ad} ${soyad}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #374151; font-weight: 600;">E-posta</td>
              <td style="padding: 10px 0; color: #111827;">${email}</td>
            </tr>
          </table>

          <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 20px 0;" />

          <p style="color: #374151; font-weight: 600; margin-bottom: 8px;">Yorum:</p>
          <div style="background: #fff; border: 1px solid #e5e7eb; border-radius: 8px; padding: 16px; color: #111827; line-height: 1.7;">
            "${yorum}"
          </div>

          <p style="color: #9ca3af; font-size: 12px; margin-top: 24px; text-align: center;">
            Bu e-posta dilan-danismanlik.com sitesindeki yorum formu aracılığıyla gönderildi.
          </p>
        </div>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return Response.json(
        { error: 'E-posta gönderilemedi. Lütfen tekrar deneyin.' },
        { status: 500 }
      );
    }

    // Başarılıysa maili kaydet
    saveEmail(email);

    return Response.json({ success: true });
  } catch (err) {
    console.error('API route error:', err);
    return Response.json(
      { error: 'Sunucu hatası oluştu.' },
      { status: 500 }
    );
  }
}
