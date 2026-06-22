import Link from 'next/link';
import { BlurFade } from '../components/magicui/blur-fade';
import { NumberTicker } from '../components/magicui/number-ticker';
import { Badge } from '../components/ui/badge';

export const metadata = {
  title: 'Başarılar & Referanslar | Dilan Karakoç',
  description:
    'Dilan Karakoç danışmanlık başarıları, müşteri referansları ve başarı hikayeleri.',
};

const testimonials = [
  {
    name: 'Ahmet Y.',
    role: 'Profesyonel Sporcu',
    text: 'Dilan Hanım ile çalışmaya başladığımdan beri performansımda ciddi bir artış gözlemledim. Mental antrenman programı sayesinde yarışma öncesi kaygımı yönetmeyi öğrendim.',
    rating: 5,
  },
  {
    name: 'Elif K.',
    role: 'Üniversite Öğrencisi',
    text: 'Eğitim danışmanlığı sürecinde hedeflerimi netleştirdim ve çalışma alışkanlıklarımı tamamen değiştirdim. Sınav sonuçlarımdaki iyileşme inanılmazdı.',
    rating: 5,
  },
  {
    name: 'Mehmet S.',
    role: 'İş İnsanı',
    text: 'Bireysel danışmanlık seansları hayatıma yön verdi. Stres yönetimi ve iş-yaşam dengesini sağlamada büyük ilerleme kaydettim. Herkese tavsiye ederim.',
    rating: 5,
  },
  {
    name: 'Zeynep A.',
    role: 'Lise Öğrencisi',
    text: 'Özel ders paketleri ve eğitim koçluğu sayesinde notlarım yükseldi. Dilan Hanım bana sadece ders değil, hayata bakış açısı da kazandırdı.',
    rating: 5,
  },
];

const achievements = [
  { value: 150, suffix: '+', label: 'Mutlu Danışan' },
  { value: 5, suffix: '+', label: 'Yıllık Deneyim' },
  { value: 50, suffix: '+', label: 'Sporcu Danışan' },
  { value: 98, suffix: '%', label: 'Memnuniyet Oranı' },
];

export default function BasarilarPage() {
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
            <h2 className="font-heading text-2xl font-bold text-white text-center mb-10">
              Rakamlarla Biz
            </h2>
          </BlurFade>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((item, i) => (
              <BlurFade key={item.label} delay={0.1 * i}>
                <div className="text-center bg-white/5 rounded-xl p-6 backdrop-blur-sm">
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
            <div className="text-center mb-14">
              <Badge variant="accent" size="md" className="mb-4">
                Referanslar
              </Badge>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-secondary mb-4">
                Danışan Yorumları
              </h2>
              <p className="text-foreground-muted text-lg max-w-xl mx-auto">
                Danışanlarımızın deneyimlerinden bazıları.
              </p>
            </div>
          </BlurFade>

          <div className="grid sm:grid-cols-2 gap-6">
            {testimonials.map((testimonial, i) => (
              <BlurFade key={testimonial.name} delay={0.1 * i}>
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
                      &ldquo;{testimonial.text}&rdquo;
                    </p>
                  </blockquote>

                  {/* Kişi Bilgisi */}
                  <div className="mt-6 pt-4 border-t border-border flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-sm font-bold text-primary">
                        {testimonial.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground text-sm">{testimonial.name}</p>
                      <p className="text-xs text-foreground-muted">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* Galeri Placeholder */}
      <section className="py-20 bg-surface-alt">
        <div className="max-w-[1200px] mx-auto px-6">
          <BlurFade>
            <div className="text-center mb-14">
              <Badge variant="secondary" size="md" className="mb-4">
                Galeri
              </Badge>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-secondary mb-4">
                Etkinlikler & Çalışmalar
              </h2>
              <p className="text-foreground-muted text-lg max-w-xl mx-auto">
                Etkinlikler, seminerler ve çalışmalardan kareler.
              </p>
            </div>
          </BlurFade>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {['Seminer', 'Workshop', 'Danışmanlık', 'Eğitim', 'Konferans', 'Takım Çalışması'].map((label, i) => (
              <BlurFade key={label} delay={0.08 * i}>
                <div className="aspect-[3/2] bg-gradient-to-br from-surface-dark to-surface-alt rounded-xl flex items-center justify-center group cursor-pointer hover:shadow-md transition-all duration-300 overflow-hidden">
                  <div className="text-center">
                    <div className="w-10 h-10 mx-auto mb-2 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300">
                      <svg className="w-5 h-5 text-primary group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <p className="text-xs text-foreground-muted font-medium">{label}</p>
                  </div>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

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
