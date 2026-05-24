import Link from 'next/link';
import { BlurFade } from '../../components/magicui/blur-fade';
import { Badge } from '../../components/ui/badge';
import { Card, CardTitle, CardDescription } from '../../components/ui/card';

export const metadata = {
  title: 'Eğitim Danışmanlığı & Koçluğu | Dilan Karakoç',
  description:
    'Eğitim danışmanlığı ve koçluk hizmetleri. Akademik hedeflerinize ulaşmanız için profesyonel rehberlik.',
};

const processSteps = [
  {
    step: '01',
    title: 'Akademik İhtiyaç Analizi',
    description: 'Öğrencinin mevcut ders durumunu, çalışma alışkanlıklarını, güçlü ve zayıf yönlerini bilimsel envanterlerle analiz ederiz.',
  },
  {
    step: '02',
    title: 'Hedef Belirleme & Motivasyon',
    description: 'Öğrencinin ilgi ve yeteneklerine uygun kısa, orta ve uzun vadeli hedef okul/bölüm planlarını netleştiririz.',
  },
  {
    step: '03',
    title: 'Kişiye Özel Yol Haritası',
    description: 'Öğrencinin günlük ve haftalık programlarını hazırlar, zaman yönetimi ve sınav stratejilerini belirleriz.',
  },
  {
    step: '04',
    title: 'Sürekli Takip & Gelişim',
    description: 'Haftalık seanslar ve veli bilgilendirmeleri ile ilerlemeyi adım adım izler, sınav sonuçlarına göre planı güncelleriz.',
  },
];

const packages = [
  {
    title: 'Temel Koçluk Paketi',
    description: 'Akademik planlama ve motivasyon takibine başlamak isteyen öğrenciler için.',
    features: [
      'Ayda 2 Birebir Görüşme (Online veya Yüz yüze)',
      'Aylık Kişiye Özel Çalışma Programı',
      'Akademik Hedef Belirleme Desteği',
      'Temel Kaynak Önerileri ve Takibi',
    ],
  },
  {
    title: 'Standart Sınav Paketi',
    description: 'LGS, YKS veya okul sınavlarına hazırlanan öğrenciler için yoğun takip.',
    features: [
      'Haftalık Birebir Koçluk Görüşmeleri',
      'Haftalık Program Güncelleme ve Ödev Takibi',
      'Sınav Stratejileri ve Kaygı Yönetimi',
      'Aylık Detaylı Veli Bilgilendirme Raporu',
      'Zaman Yönetimi ve Odaklanma Egzersizleri',
    ],
  },
  {
    title: 'Premium Mentörlük Paketi',
    description: 'Zirve başarıyı hedefleyen, 7/24 rehberlik ve tam destek isteyen öğrenciler için.',
    features: [
      'Haftalık Detaylı Görüşme + Ara Takipler',
      'Öğrenciye Özel 7/24 Soru ve İletişim Hattı',
      'Kapsamlı Kariyer ve Bölüm Tercih Rehberliği',
      '2 Haftada Bir Veli Görüşmesi ve Analizler',
      'Sınav Kaygısı & Motivasyon Atölyeleri',
    ],
  },
];

export default function EgitimDanismanligiPage() {
  return (
    <>
      {/* Hero / Header */}
      <section className="relative bg-surface-alt pt-32 pb-16 lg:pt-40 lg:pb-24 overflow-hidden border-b border-border-light">
        {/* Dekoratif elemanlar */}
        <div className="absolute top-[-10%] right-[-5%] w-[400px] h-[400px] rounded-full bg-primary/10 blur-3xl pointer-events-none" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[300px] h-[300px] rounded-full bg-accent/10 blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-primary/5 rounded-full pointer-events-none" />
        
        <div className="relative max-w-[1200px] mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Sol - Metin */}
            <div className="flex flex-col gap-6 relative z-10">
              <BlurFade delay={0.1}>
                <Badge variant="accent" size="md">
                  Eğitim Danışmanlığı
                </Badge>
              </BlurFade>
              <BlurFade delay={0.2}>
                <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-secondary tracking-tight leading-tight">
                  Eğitim Danışmanlığı & <br className="hidden sm:block" />
                  <span className="text-primary relative whitespace-nowrap">
                    Koçluğu
                    <svg className="absolute -bottom-2 left-0 w-full h-3 text-primary/20" viewBox="0 0 100 10" preserveAspectRatio="none">
                      <path d="M0 5 Q 50 10 100 5" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
                    </svg>
                  </span>
                </h1>
              </BlurFade>
              <BlurFade delay={0.3}>
                <p className="text-lg text-foreground-muted leading-relaxed">
                  Öğrencilerin akademik başarılarını artırmak, sınav kaygılarını yönetmek ve doğru kariyer hedeflerine emin adımlarla ilerlemelerini sağlamak amacıyla bütünsel bir koçluk yaklaşımı sunuyoruz.
                </p>
              </BlurFade>
              <BlurFade delay={0.4}>
                <div className="flex flex-wrap gap-4 mt-2">
                  <Link
                    href="/iletisim"
                    className="btn-base btn-md btn-light group"
                  >
                    Hemen Randevu Al
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </BlurFade>
            </div>

            {/* Sağ - Görsel */}
            <BlurFade delay={0.3} className="relative mt-8 lg:mt-0">
               <div className="relative z-10 rounded-[2rem] overflow-hidden border border-border/50 shadow-2xl aspect-square lg:aspect-auto lg:h-[500px]">
                 <img
                    src="/images/egitim-danismanligi.png"
                    alt="Eğitim Danışmanlığı"
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                  />
               </div>
               
               {/* Görsel arkası dekorasyon */}
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-gradient-to-tr from-primary/20 to-accent/20 rounded-full blur-3xl -z-10" />
            </BlurFade>
          </div>
        </div>
      </section>

      {/* Genel Bakış */}
      <section className="py-20 bg-white border-b border-border-light">
        <div className="max-w-[800px] mx-auto px-6 text-center">
          <BlurFade>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-secondary mb-6">
              Potansiyelini Doğru Yönlendiren Öğrenciler Başarır
            </h2>
            <div className="space-y-4 text-foreground-muted leading-relaxed text-left md:text-center">
              <p>
                Eğitim hayatı sadece ders çalışmaktan ibaret değildir. Zamanı verimli yönetmek, doğru kaynakları seçmek, sınav psikolojisiyle başa çıkmak ve her şeyden önemlisi &ldquo;neden çalıştığını&rdquo; bilerek hedefe odaklanmak başarının anahtarıdır.
              </p>
              <p>
                Eğitim danışmanlığı sürecimizde öğrencileri sadece akademik açıdan değil, zihinsel ve motivasyonel yönlerden de destekliyoruz. Sınavlara (LGS, YKS vb.) hazırlık süreçlerinin getirdiği stresi azaltarak, öğrencilerin kendi öğrenme stillerine uygun ders çalışma planları geliştiriyoruz. Doğru yönlendirme ile her öğrenci içindeki başarı potansiyelini açığa çıkarabilir.
              </p>
            </div>
          </BlurFade>
        </div>
      </section>

      {/* Süreç */}
      <section className="py-20 bg-surface-alt">
        <div className="max-w-[1200px] mx-auto px-6">
          <BlurFade className="text-center mb-14">
            <Badge variant="primary" size="sm" className="mb-3">Süreç</Badge>
            <h2 className="font-heading text-3xl font-bold text-secondary">
              Adım Adım Başarı Yolculuğu
            </h2>
            <p className="text-foreground-muted max-w-xl mx-auto mt-2 text-sm">
              Öğrencilerimizle çalışırken uyguladığımız planlı ve bilimsel aşamalar.
            </p>
          </BlurFade>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((item, i) => (
              <BlurFade key={item.step} delay={i * 0.1}>
                <Card className="h-full flex flex-col items-start bg-white p-6 hover:border-primary/20">
                  <span className="font-heading text-3xl font-bold text-primary/20 mb-4 block">
                    {item.step}
                  </span>
                  <h4 className="font-heading text-lg font-bold text-secondary mb-2">
                    {item.title}
                  </h4>
                  <p className="text-sm text-foreground-muted leading-relaxed">
                    {item.description}
                  </p>
                </Card>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* Paketler */}
      <section className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <BlurFade className="text-center mb-14">
            <Badge variant="secondary" size="sm" className="mb-3">Koçluk Paketleri</Badge>
            <h2 className="font-heading text-3xl font-bold text-secondary">
              Danışmanlık Paketleri
            </h2>
            <p className="text-foreground-muted max-w-xl mx-auto mt-2 text-sm">
              İhtiyaçlarınıza ve hedeflerinize en uygun koçluk paketini seçebilirsiniz.
            </p>
          </BlurFade>

          <div className="grid lg:grid-cols-3 gap-8">
            {packages.map((pkg, i) => (
              <BlurFade key={pkg.title} delay={i * 0.1}>
                <Card className="h-full flex flex-col border border-border bg-white p-8 hover:shadow-lg transition-all duration-300">
                  <h3 className="font-heading text-xl font-bold text-secondary mb-2">
                    {pkg.title}
                  </h3>
                  <CardDescription className="text-sm mb-6 min-h-[40px]">
                    {pkg.description}
                  </CardDescription>
                  <div className="border-t border-border-light pt-6 flex-1">
                    <h4 className="text-xs font-semibold text-secondary uppercase tracking-wider mb-4">
                      Paket İçeriği
                    </h4>
                    <ul className="space-y-3">
                      {pkg.features.map((feature, j) => (
                        <li key={j} className="flex items-start gap-2.5 text-sm text-foreground-muted">
                          <svg className="w-4 h-4 text-primary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Card>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary relative overflow-hidden text-center">
        <div className="absolute top-0 right-0 w-[300px] h-[300px] rounded-full bg-white/5 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[200px] h-[200px] rounded-full bg-white/5 blur-3xl" />

        <div className="relative max-w-[1200px] mx-auto px-6">
          <BlurFade>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground-inverse mb-4">
              Geleceğinize Doğru Yatırımı Yapın
            </h2>
            <p className="text-foreground-inverse/80 text-lg max-w-xl mx-auto mb-8">
              Doğru stratejiyle hedeflediğiniz başarıyı yakalayın. Ücretsiz ön görüşme için hemen iletişime geçin.
            </p>
            <Link
              href="/iletisim"
              className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-xl font-semibold text-base hover:bg-surface hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 active:scale-[0.98] group"
            >
              Ücretsiz Ön Görüşme Randevusu
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
