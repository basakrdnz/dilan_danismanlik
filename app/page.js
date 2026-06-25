import Link from 'next/link';
import { BlurFade } from './components/magicui/blur-fade';
import { NumberTicker } from './components/magicui/number-ticker';
import { Card, CardTitle, CardDescription, CardFooter } from './components/ui/card';
import { Badge } from './components/ui/badge';

const services = [
  {
    title: 'Spor Danışmanlığı',
    description:
      'Sporcuların mental performanslarını artırmak, motivasyonlarını güçlendirmek ve hedeflerine ulaşmalarına yardımcı olmak için kapsamlı danışmanlık programları.',
    href: '/hizmetler/spor-danismanligi',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: 'Bireysel Danışmanlık',
    description:
      'Yetişkin ve ergenlerin kişisel gelişim süreçlerine destek. Kaygı, stres, özgüven ve ilişki konularında profesyonel rehberlik.',
    href: '/hizmetler/bireysel-danismanlik',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
  },
  {
    title: 'Eğitim Danışmanlığı',
    description:
      'Eğitim süreçlerinde doğru yönlendirme, sınav hazırlığı stratejileri ve akademik koçluk hizmetleri ile başarınızı artırın.',
    href: '/hizmetler/egitim-danismanligi',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
  {
    title: 'Özel Ders Paketleri',
    description:
      'Kişiye özel ders programları ve akademik destek paketleri ile bireysel ihtiyaçlarınıza uygun eğitim çözümleri.',
    href: '/hizmetler/ozel-ders-paketleri',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
];

const stats = [
  { value: 150, suffix: '+', label: 'Mutlu Danışan' },
  { value: 5, suffix: '+', label: 'Yıllık Deneyim' },
  { value: 50, suffix: '+', label: 'Sporcu Danışan' },
  { value: 98, suffix: '%', label: 'Memnuniyet Oranı' },
];

export default function Anasayfa() {
  return (
    <>
      {/* ==================== HERO ==================== */}
      <section className="relative min-h-[75vh] lg:min-h-[85vh] flex items-center bg-surface overflow-hidden">
        {/* Arka plan görseli - sağ tarafa sığacak şekilde konumlandırılmış */}
        <div
          className="absolute inset-0 bg-cover bg-[position:80%_center] select-none pointer-events-none"
          style={{ backgroundImage: `url('/images/hero_bg_warm_empty.png')` }}
        />

        {/* Gölgelendirme / Geçiş Katmanı */}
        {/* Masaüstünde: Solda yoğun başlayan ve ekranın %64'üne kadar tamamen kaybolan geçiş */}
        <div
          className="absolute inset-0 hidden lg:block"
          style={{
            background: 'linear-gradient(to right, var(--color-surface) 0%, var(--color-surface) 30%, rgba(250, 247, 245, 0.9) 45%, rgba(250, 247, 245, 0) 64%)'
          }}
        />
        {/* Mobilde resmin üzerine hafif beyazlaştırıcı/okunabilirliği artırıcı yarı saydam katman */}
        <div className="absolute inset-0 bg-surface/75 backdrop-blur-[0.5px] lg:hidden" />

        <div className="relative w-full max-w-[1200px] mx-auto px-6 pt-32 pb-20 lg:pt-40 lg:pb-28 z-10">
          <div className="max-w-2xl flex flex-col gap-6 lg:gap-8">
            <div className="flex flex-col gap-3">


              <BlurFade delay={0.2}>
                <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl font-light text-secondary leading-[1.15] tracking-tight">
                  Potansiyelinizi <br />
                  <span className="text-primary font-bold">Keşfedin</span>
                </h1>
              </BlurFade>
            </div>

            <BlurFade delay={0.3}>
              <p className="text-lg sm:text-xl text-foreground-muted leading-relaxed font-normal max-w-xl">
                Bireysel danışmanlık, spor psikolojisi ve eğitim koçluğu alanlarında
                uzman desteğiyle hayatınıza yeni bir yön verin. İlk görüşme{' '}
                <strong className="text-primary font-bold">ücretsizdir</strong>.
              </p>
            </BlurFade>

            <BlurFade delay={0.4}>
              <div className="flex flex-wrap gap-4 mt-2">
                <Link
                  href="/iletisim"
                  className="btn-base btn-lg btn-light group"
                >
                  Ücretsiz Görüşme
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <Link
                  href="/hizmetler"
                  className="btn-base btn-lg btn-dark"
                >
                  Hizmetleri Keşfet
                </Link>
              </div>
            </BlurFade>
          </div>
        </div>
      </section>



      {/* ==================== İSTATİSTİKLER ==================== */}
      <section className="relative z-20 -mt-10 max-w-[1200px] mx-auto px-6">
        <div className="bg-white/90 backdrop-blur-lg border border-border/60 shadow-xl rounded-3xl py-8 md:py-10 px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-8 md:gap-y-0">
            {stats.map((stat, i) => (
              <BlurFade key={stat.label} delay={0.1 * i}>
                <div className="text-center md:border-r last:md:border-r-0 border-border/60 px-4">
                  <p className="text-4xl sm:text-5xl font-extrabold text-primary mb-1.5 tracking-tight">
                    <NumberTicker
                      value={stat.value}
                      suffix={stat.suffix}
                      delay={200 * i}
                    />
                  </p>
                  <p className="text-xs sm:text-sm text-foreground-muted font-semibold uppercase tracking-wider">
                    {stat.label}
                  </p>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== HİZMETLER ==================== */}
      <section className="py-20 lg:py-28">
        <div className="max-w-[1200px] mx-auto px-6">
          <BlurFade>
            <div className="text-center mb-14">
              <Badge variant="accent" size="md" className="mb-4">
                Hizmetlerimiz
              </Badge>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-secondary mb-4">
                Size Özel Danışmanlık Çözümleri
              </h2>
              <p className="text-foreground-muted text-lg max-w-2xl mx-auto">
                Her bireyin ihtiyaçları farklıdır. Sizin için en uygun danışmanlık
                programını birlikte belirleyelim.
              </p>
            </div>
          </BlurFade>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, i) => (
              <BlurFade key={service.href} delay={0.1 * i}>
                <Card className="h-full flex flex-col group">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-foreground-inverse transition-all duration-300">
                    {service.icon}
                  </div>
                  <CardTitle className="mb-3">{service.title}</CardTitle>
                  <CardDescription className="flex-1 text-sm">
                    {service.description}
                  </CardDescription>
                  <CardFooter className="mt-5">
                    <Link
                      href={service.href}
                      className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:text-primary-dark transition-colors group/link"
                    >
                      Detaylı Bilgi
                      <svg className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </CardFooter>
                </Card>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== HAKKIMDA ÖZET ==================== */}
      <section className="py-20 lg:py-28 bg-surface-alt">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <BlurFade>
              <div className="relative">
                <div className="w-full aspect-[3/4] max-w-[300px] rounded-2xl overflow-hidden border border-border/50 shadow-2xl mx-auto">
                  <img
                    src="/images/dilanpp.jpeg"
                    alt="Dilan Karakoç"
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
            </BlurFade>

            <BlurFade delay={0.2}>
              <div>
                <Badge variant="primary" size="md" className="mb-4">
                  Hakkımda
                </Badge>
                <h2 className="font-heading text-3xl sm:text-4xl font-bold text-secondary mb-6">
                  Profesyonel Danışmanlık Deneyimi
                </h2>
                <div className="space-y-4 text-foreground-muted leading-relaxed">
                  <p>
                    Merhaba, ben <strong className="text-foreground">Dilan Karakoç</strong>.
                    TED Üniversitesi Psikolojik Danışmanlık ve Rehberlik (PDR) Bölümü mezunuyum.
                    Ankara&apos;da 5 yılı aşkın süredir psikolojik danışmanlık alanında
                    profesyonel olarak çalışmaktayım.
                  </p>
                  <p>
                    Bilişsel Davranışçı Terapi, Çözüm Odaklı Terapi ve Spor Psikolojisi
                    alanlarındaki uzmanlığımı bireysel danışmanlık ile birleştirerek
                    bütüncül bir yaklaşım sunuyorum.
                  </p>
                </div>

                {/* Uzmanlık Alanları */}
                <div className="flex flex-wrap gap-2 mt-6">
                  {['Spor Psikolojisi', 'Bilişsel Davranışçı Terapi', 'Çözüm Odaklı Terapi', 'Travma Müdahale'].map((tag) => (
                    <Badge key={tag} variant="outline" size="sm">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="mt-8">
                  <Link
                    href="/hakkimda"
                    className="inline-flex items-center gap-2 text-primary font-medium hover:text-primary-dark transition-colors group"
                  >
                    Devamını Oku
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </BlurFade>
          </div>
        </div>
      </section>

      {/* ==================== CTA ==================== */}
      <section className="relative overflow-hidden bg-primary py-20">
        {/* Dekoratif */}
        <div className="absolute top-0 right-0 w-[300px] h-[300px] rounded-full bg-white/5 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[200px] h-[200px] rounded-full bg-white/5 blur-3xl" />

        <div className="relative max-w-[1200px] mx-auto px-6 text-center">
          <BlurFade>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground-inverse mb-4">
              İlk Adımı Atın
            </h2>
            <p className="text-foreground-inverse/80 text-lg max-w-xl mx-auto mb-8">
              İlk görüşme ücretsizdir. Hemen iletişime geçin ve size en uygun
              danışmanlık programını birlikte belirleyelim.
            </p>
            <Link
              href="/iletisim"
              className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-xl font-semibold text-base hover:bg-surface hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 active:scale-[0.98] group"
            >
              Ücretsiz Danışmanlık
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
