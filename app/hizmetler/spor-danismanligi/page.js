import Link from 'next/link';
import Image from 'next/image';
import { BlurFade } from '../../components/magicui/blur-fade';
import { Badge } from '../../components/ui/badge';
import { Card, CardTitle, CardDescription } from '../../components/ui/card';

export const metadata = {
  title: 'Ankara Spor Psikolojisi Danışmanlığı',
  description:
    'Ankara\'da spor psikolojisi danışmanlığı. Sporcuların mental performansını, motivasyonunu ve müsabaka kaygısı yönetimini geliştiren kapsamlı programlar.',
  alternates: { canonical: '/hizmetler/spor-danismanligi' },
  openGraph: {
    title: 'Ankara Spor Psikolojisi Danışmanlığı | Dilan Karakoç',
    description:
      'Ankara\'da sporcuların mental performansını artıran spor psikolojisi danışmanlık programları.',
    url: '/hizmetler/spor-danismanligi',
  },
};

const programs = [
  {
    title: 'Bireysel Performans Programı',
    description: 'Sporcunun mental gücünü artırmaya yönelik, tamamen kişiselleştirilmiş birebir seanslar.',
    benefits: ['Odaklanma & konsantrasyon geliştirme', 'Müsabaka stresi ve heyecan yönetimi', 'Performans engellerini aşma', 'Kişisel rutinler geliştirme'],
  },
  {
    title: 'Yarışma Hazırlık Programı',
    description: 'Yarışma veya turnuva öncesinde sporcunun zihinsel hazırlığını en üst düzeye çıkaran yoğun program.',
    benefits: ['Zihinsel canlandırma (Simülasyon)', 'Hızlı toparlanma ve kaygı yönetimi', 'Maç içi kriz anları yönetimi', 'Son dakika stratejileri'],
  },
  {
    title: 'Takım & Antrenör Danışmanlığı',
    description: 'Takım dinamiklerini güçlendirme, iletişim kanallarını açma ve ortak hedef motivasyonunu artırma çalışmaları.',
    benefits: ['Takım içi iletişim & liderlik', 'Ortak amaç ve hedef birliği', 'Grup aidiyet hissi geliştirme', 'Kriz ve çatışma yönetimi'],
  },
  {
    title: 'Performans Kaygısı Danışmanlığı',
    description: 'Müsabaka, antrenman ve yarışma ortamlarında ortaya çıkan performans kaygısını yönetmek için özel çalışmalar.',
    benefits: ['Kaygı tetikleyicilerini tanımlama', 'Anında rahatlatma teknikleri', 'Bilişsel yeniden yapılandırma', 'Zihin-beden bütünleşmesi'],
  },
];

const checklist = [
  'Müsabaka anında konsantrasyon kaybı yaşayanlar',
  'Antrenman performansını maça yansıtamayan sporcular',
  'Sakatlık sonrası spora dönüş sürecindeki zihinsel engelleri aşmak isteyenler',
  'Stres, kaygı ve baskı altında karar vermekte zorlananlar',
  'Motivasyon kaybı ve hedef belirleme sorunu yaşayan sporcular',
  'Kendine olan inancını ve özgüvenini artırmak isteyen sporcular',
];

const steps = [
  {
    num: '01',
    title: 'Ön Değerlendirme',
    desc: 'İlk görüşmemizde sporcunun geçmişini, hedeflerini ve karşılaştığı mental zorlukları analiz ediyoruz.',
  },
  {
    num: '02',
    title: 'Mental Profil Çıkarma',
    desc: 'Sporcunun zihinsel dayanıklılık, stres toleransı ve odaklanma becerilerini bilimsel testlerle ölçüyoruz.',
  },
  {
    num: '03',
    title: 'Özel Strateji Belirleme',
    desc: 'Verilen analizler ışığında sporcuya ve spor dalına özel zihinsel antrenman planını oluşturuyoruz.',
  },
  {
    num: '04',
    title: 'Takip ve Optimizasyon',
    desc: 'Sezon boyu düzenli seanslar ve saha içi geribildirimlerle performansı izliyor ve planı güncelliyoruz.',
  },
];

export default function SporDanismanligiPage() {
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
                <Badge variant="primary" size="md">
                  Spor Danışmanlığı
                </Badge>
              </BlurFade>
              <BlurFade delay={0.2}>
                <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-secondary tracking-tight leading-tight">
                  Spor, Performans & <br className="hidden sm:block" />
                  <span className="text-primary relative whitespace-nowrap">
                    Psikoloji
                    <svg className="absolute -bottom-2 left-0 w-full h-3 text-primary/20" viewBox="0 0 100 10" preserveAspectRatio="none">
                      <path d="M0 5 Q 50 10 100 5" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
                    </svg>
                  </span> Danışmanlığı
                </h1>
              </BlurFade>
              <BlurFade delay={0.3}>
                <p className="text-lg text-foreground-muted leading-relaxed">
                  Zihinsel dayanıklılık, sporcuların potansiyellerini skora ve performansa dönüştürmesindeki en büyük güçtür. Bilimsel metotlarla mental sınırlarınızı aşın.
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
                 <Image
                    src="/images/spor-danismanligi.png"
                    alt="Ankara Spor Psikolojisi Danışmanlığı"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover transform hover:scale-105 transition-transform duration-700"
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
              Zihni Eğitmek, Bedeni Eğitmek Kadar Önemlidir
            </h2>
            <div className="space-y-4 text-foreground-muted leading-relaxed text-left md:text-center">
              <p>
                Modern sporda fiziksel ve teknik hazırlık her sporcu için belirli bir standarttır. Farkı yaratan ise kritik anlarda, baskı altında alınan zihinsel kararlardır. <strong className="text-secondary">Psikoloji</strong> bu noktada devreye girer: Spor psikolojisi danışmanlığı, bu kritik eşiği yönetmeniz için size rehberlik eder.
              </p>
              <p>
                Danışmanlık sürecimizde, motivasyonunuzu korumayı, müsabaka kaygısını kontrol altına almayı, odaklanma sürenizi uzatmayı ve sakatlık gibi zorlu süreçleri zihinsel olarak hasarsız atlatmayı hedefliyoruz. <strong className="text-secondary">Psikolojik beceriler</strong> sporcunun en güçlü silahıdır; ister amatör, ister olimpiyat seviyesinde bir profesyonel olun, zihinsel antrenman başarıya giden en güçlü adımdır.
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-3">
                {['Eskrim', 'Pentatlon', 'Futbol'].map((sport) => (
                  <span key={sport} className="inline-flex items-center gap-1.5 bg-primary/10 text-primary text-sm font-medium px-4 py-1.5 rounded-full">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    {sport}
                  </span>
                ))}
                <span className="inline-flex items-center gap-1.5 bg-foreground-muted/10 text-foreground-muted text-sm font-medium px-4 py-1.5 rounded-full">+ Diğer Spor Dalları</span>
              </div>
            </div>
          </BlurFade>
        </div>
      </section>

      {/* Kimler İçin */}
      <section className="py-20 bg-surface-alt">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <BlurFade className="order-2 lg:order-1">
              <div className="bg-white p-8 rounded-2xl border border-border shadow-sm">
                <h3 className="font-heading text-xl font-bold text-secondary mb-6">
                  Bu Program Kimler İçin Uygun?
                </h3>
                <ul className="space-y-4">
                  {checklist.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-sm text-foreground-muted leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </BlurFade>
            <BlurFade className="order-1 lg:order-2 space-y-6">
              <Badge variant="accent" size="sm">Hedef Kitle</Badge>
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-secondary leading-tight">
                Potansiyelinizin Önündeki Zihinsel Engelleri Kaldırın
              </h2>
              <p className="text-foreground-muted leading-relaxed">
                Yalnızca antrenman yapmak yetmez. En kritik anda şutunuzu atmadan veya start çizgisine geçmeden önce zihninizde o anı kazanmış olmalısınız. Birlikte, müsabaka sırasındaki kaygıyı nasıl en iyi dostunuza dönüştüreceğinizi öğreneceğiz.
              </p>
            </BlurFade>
          </div>
        </div>
      </section>

      {/* Süreç */}
      <section className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <BlurFade className="text-center mb-14">
            <Badge variant="secondary" size="sm" className="mb-3">İşleyiş</Badge>
            <h2 className="font-heading text-3xl font-bold text-secondary">
              Zihinsel Antrenman Süreci Nasıl İşler?
            </h2>
          </BlurFade>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, i) => (
              <BlurFade key={step.num} delay={i * 0.1}>
                <Card className="h-full flex flex-col items-start p-6 hover:border-primary/30">
                  <span className="font-heading text-3xl font-bold text-primary/20 mb-4 block">
                    {step.num}
                  </span>
                  <h4 className="font-heading text-lg font-bold text-secondary mb-2">
                    {step.title}
                  </h4>
                  <p className="text-sm text-foreground-muted leading-relaxed">
                    {step.desc}
                  </p>
                </Card>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* Programlar ve Paketler */}
      <section className="py-20 bg-surface-alt">
        <div className="max-w-[1200px] mx-auto px-6">
          <BlurFade className="text-center mb-14">
            <Badge variant="primary" size="sm" className="mb-3">Seçenekler</Badge>
            <h2 className="font-heading text-3xl font-bold text-secondary">
              Programlar & Paketler
            </h2>
            <p className="text-foreground-muted max-w-xl mx-auto mt-2 text-sm">
              Spor dalınıza, seviyenize ve hedeflerinize en uygun programı seçebilirsiniz.
            </p>
          </BlurFade>

          <div className="grid lg:grid-cols-4 gap-8">
            {programs.map((prog, i) => (
              <BlurFade key={prog.title} delay={i * 0.1}>
                <Card className="h-full flex flex-col bg-white border border-border p-8 hover:shadow-lg transition-all duration-300">
                  <h3 className="font-heading text-xl font-bold text-secondary mb-3">
                    {prog.title}
                  </h3>
                  <CardDescription className="text-sm mb-6 min-h-[48px]">
                    {prog.description}
                  </CardDescription>
                  <div className="border-t border-border-light pt-6 flex-1">
                    <h4 className="text-xs font-semibold text-secondary uppercase tracking-wider mb-4">
                      Kazanımlar
                    </h4>
                    <ul className="space-y-3">
                      {prog.benefits.map((benefit, j) => (
                        <li key={j} className="flex items-start gap-2.5 text-sm text-foreground-muted">
                          <svg className="w-4 h-4 text-accent shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Card>
              </BlurFade>
            ))}
          </div>

          {/* Seans Bilgisi & Fiyat */}
          <BlurFade>
            <div className="mt-12 grid sm:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl border border-border p-6 text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                <p className="font-bold text-secondary text-lg">1 Saat</p>
                <p className="text-sm text-foreground-muted mt-1">Seans Süresi</p>
              </div>
              <div className="bg-white rounded-xl border border-border p-6 text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                </div>
                <p className="font-bold text-secondary text-lg">Haftada 1</p>
                <p className="text-sm text-foreground-muted mt-1">Seans Sıklığı (Genel)</p>
              </div>
              <div className="bg-white rounded-xl border border-border p-6 text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                <p className="font-bold text-secondary text-lg">3.500 TL</p>
                <p className="text-sm text-foreground-muted mt-1">Seans Ücret</p>
              </div>
            </div>
          </BlurFade>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary relative overflow-hidden text-center">
        <div className="absolute top-0 right-0 w-[300px] h-[300px] rounded-full bg-white/5 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[200px] h-[200px] rounded-full bg-white/5 blur-3xl" />

        <div className="relative max-w-[1200px] mx-auto px-6">
          <BlurFade>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground-inverse mb-4">
              Zirve Performansa Zihninizi Hazırlayın
            </h2>
            <p className="text-foreground-inverse/80 text-lg max-w-xl mx-auto mb-8">
              Zihinsel antrenmanlar ile zafere giden yolu kısaltın. İlk görüşme tamamen ücretsizdir.
            </p>
            <Link
              href="/iletisim"
              className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-xl font-semibold text-base hover:bg-surface hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 active:scale-[0.98] group"
            >
              Ücretsiz Görüşme Ayarla
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
