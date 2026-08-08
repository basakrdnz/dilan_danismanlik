import Link from 'next/link';
import { readFileSync } from 'fs';
import { join } from 'path';
import { BlurFade } from '../components/magicui/blur-fade';
import { NumberTicker } from '../components/magicui/number-ticker';
import { Badge } from '../components/ui/badge';
import YorumModal from '../components/YorumFormu';
import GallerySection from './GallerySection';
import { getKVYorumlar } from '../../lib/redis';

export const dynamic = 'force-dynamic';

export const metadata = {
  title: 'Başarılar & Referanslar',
  description:
    'Ankara\'da 150+ danışanın başarı hikayeleri ve referansları. Dilan Karakoç ile bireysel, spor ve eğitim danışmanlığı deneyimleri.',
  alternates: { canonical: '/basarilar' },
  openGraph: {
    title: 'Başarılar & Referanslar | Dilan Karakoç',
    description:
      'Ankara\'da 150+ danışanın başarı hikayeleri ve referansları.',
    url: '/basarilar',
  },
};

// Seed verisi: proje dosyasındaki mevcut yorumlar (her zaman mevcut)
function getSeedYorumlar() {
  try {
    const filePath = join(process.cwd(), 'data', 'yorumlar.json');
    const raw = readFileSync(filePath, 'utf-8');
    const all = JSON.parse(raw);
    return all.filter((y) => y.onaylandi === true);
  } catch {
    return [];
  }
}

const achievements = [
  { value: 150, suffix: '+', label: 'Mutlu Danışan' },
  { value: 5, suffix: '+', label: 'Yıllık Deneyim' },
  { value: 50, suffix: '+', label: 'Sporcu Danışan' },
  { value: 98, suffix: '%', label: 'Memnuniyet Oranı' },
];

export default async function BasarilarPage() {
  // Seed (JSON dosyası) + KV (Redis) yorumlarını birleştir
  const seedYorumlar = getSeedYorumlar();
  const kvYorumlar = await getKVYorumlar();
  const onayliKV = kvYorumlar.filter((y) => y.onaylandi === true);
  const yorumlar = [...seedYorumlar, ...onayliKV];

  return (
    <>
      {/* Hero */}
      <section className="bg-surface-alt pt-28 pb-16 lg:pt-36 lg:pb-24">
        <div className="max-w-[1200px] mx-auto px-6">
          <BlurFade>
            <Badge variant="primary" size="md" className="mb-4">
              Başarılar
            </Badge>
            <h1 className="font-heading text-4xl sm:text-5xl font-bold text-secondary mb-4">
              Başarılar & Referanslar
            </h1>
            <p className="text-lg text-foreground-muted max-w-2xl leading-relaxed">
              Danışanlarımızın başarı hikayeleri ve deneyimleri.
            </p>
          </BlurFade>
        </div>
      </section>

      {/* Başarı Rakamları */}
      <section className="py-16 bg-secondary">
        <div className="max-w-[1200px] mx-auto px-6">
          <BlurFade>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white text-center mb-12">
              Rakamlarla Biz
            </h2>
          </BlurFade>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((item, i) => (
              <BlurFade key={item.label} delay={0.1 * i}>
                <div className="text-center">
                  <p className="text-4xl sm:text-5xl font-bold text-white mb-2">
                    <NumberTicker
                      value={item.value}
                      suffix={item.suffix}
                      delay={200 * i}
                    />
                  </p>
                  <p className="text-sm text-white/60 font-medium">
                    {item.label}
                  </p>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* Danışan Yorumları */}
      <section className="py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <BlurFade>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-14">
              <div>
                <Badge variant="accent" size="md" className="mb-4">
                  Referanslar
                </Badge>
                <h2 className="font-heading text-3xl sm:text-4xl font-bold text-secondary mb-2">
                  Danışan Yorumları
                </h2>
                <p className="text-foreground-muted text-lg max-w-xl">
                  Danışanlarımızın deneyimlerinden bazıları.
                </p>
              </div>
              <div className="shrink-0">
                <YorumModal />
              </div>
            </div>
          </BlurFade>

          <div className="grid sm:grid-cols-2 gap-6">
            {yorumlar.map((testimonial, i) => (
              <BlurFade key={testimonial.id} delay={0.1 * Math.min(i, 5)}>
                <div className="bg-white rounded-xl border border-border p-8 h-full flex flex-col hover:shadow-lg transition-all duration-300">
                  {/* Yıldızlar */}
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: testimonial.rating }).map((_, j) => (
                      <svg key={j} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>

                  {/* Yorum */}
                  <blockquote className="flex-1">
                    <p className="text-foreground-muted leading-relaxed italic">
                      &ldquo;{testimonial.yorum}&rdquo;
                    </p>
                  </blockquote>

                  {/* Kişi Bilgisi */}
                  <div className="mt-6 pt-4 border-t border-border flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-sm font-bold text-primary">
                        {testimonial.ad.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground text-sm">{testimonial.ad} {testimonial.soyad}</p>
                      <p className="text-xs text-foreground-muted">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* Galeri Bölümü */}
      <GallerySection />



      {/* CTA */}
      <section className="py-20 bg-primary">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <BlurFade>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-4">
              Siz de Başarı Hikayenizi Yazın
            </h2>
            <p className="text-white/80 text-lg max-w-lg mx-auto mb-8">
              Danışmanlık sürecinizi başlatmak için hemen iletişime geçin.
            </p>
            <Link
              href="/iletisim"
              className="inline-flex items-center gap-2 bg-white text-primary! px-8 py-4 rounded-xl font-semibold hover:bg-surface hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 active:scale-[0.98] group"
            >
              İletişime Geç
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </BlurFade>
        </div>
      </section>
    </>
  );
}
