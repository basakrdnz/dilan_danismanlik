// Tüm SEO/işletme verilerinin tek kaynağı. Domain değişirse sadece burayı güncelle.
// URL, ASCII/punycode formuna normalize edilir (Türkçe karakterli hostname ham haliyle
// sitemap.xml/robots.txt gibi düz metin çıktılarında geçersiz bir URI üretir).
const rawSiteUrl = 'https://www.dilankarakoçdanışmanlık.com';

export const siteConfig = {
  url: new URL(rawSiteUrl).origin,
  name: 'Dilan Karakoç Danışmanlık',
  shortName: 'Dilan Karakoç',
  title: 'Dilan Karakoç | Ankara Danışmanlık – Bireysel, Spor ve Eğitim Danışmanlığı',
  description:
    'Ankara\'da (Etimesgut & Çankaya) profesyonel psikolojik danışmanlık hizmeti. Bireysel danışmanlık, spor psikolojisi, eğitim danışmanlığı ve özel ders paketleri. İlk görüşme ücretsiz.',
  locale: 'tr_TR',
  phone: '+905527151101',
  phoneDisplay: '+90 552 715 11 01',
  email: 'karakoccdilan@gmail.com',
  addressLocality: 'Ankara',
  addressRegion: 'Ankara',
  addressAreas: ['Etimesgut', 'Çankaya'],
  addressCountry: 'TR',
  geo: {
    latitude: 39.9334,
    longitude: 32.8597,
  },
  sameAs: [
    'https://www.instagram.com/psk.dan.dilankarakoc',
    'https://www.linkedin.com/in/dilan-karakoç-199098215/',
  ],
  keywords: [
    'Ankara danışmanlık',
    'Ankara psikolojik danışmanlık',
    'Ankara bireysel danışmanlık',
    'Ankara spor psikolojisi',
    'Ankara eğitim danışmanlığı',
    'Ankara özel ders',
    'Etimesgut psikolojik danışman',
    'Çankaya psikolojik danışman',
    'Dilan Karakoç',
  ],
};
