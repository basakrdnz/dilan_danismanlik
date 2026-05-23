import Link from 'next/link';
import { BlurFade } from '../../components/magicui/blur-fade';
import { Badge } from '../../components/ui/badge';
import { Card, CardTitle, CardDescription } from '../../components/ui/card';

export const metadata = {
  title: 'Spor, Performans & Psikoloji Danışmanlığı | Dilan Karakoç',
  description:
    'Sporcuların mental performanslarını artırmak ve hedeflerine ulaşmalarına yardımcı olmak için kapsamlı spor psikolojisi danışmanlık programları.',
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
      <section className="bg-surface-alt pt-28 pb-12 lg:pt-36 lg:pb-16 border-b border-border-light">
        <div className="max-w-[1200px] mx-auto px-6">
          <BlurFade>
            <Badge variant="primary" size="md" className="mb-4">
              Spor Danışmanlığı
            </Badge>
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-secondary tracking-tight mb-4">
              Spor, Performans & <span className="text-primary">Psikoloji</span> Danışmanlığı
            </h1>
            <p className="text-lg text-foreground-muted max-w-3xl leading-relaxed">
              Zihinsel dayanıklılık, sporcuların potansiyellerini skora ve performansa dönüştürmesindeki en büyük güçtür. Bilimsel metotlarla mental sınırlarınızı aşın.
            </p>
          </BlurFade>
        </div>
      </section>

      {/* Genel Bakış & Görsel */}
      <section className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Sol - Metin */}
            <div className="lg:col-span-7 space-y-6">
              <BlurFade delay={0.1}>
                <h2 className="font-heading text-2xl sm:text-3xl font-bold text-secondary">
                  Zihni Eğitmek, Bedeni Eğitmek Kadar Önemlidir
                </h2>
              </BlurFade>
              <BlurFade delay={0.2}>
                <div className="space-y-4 text-foreground-muted leading-relaxed">
                  <p>
                    Modern sporda fiziksel ve teknik hazırlık her sporcu için belirli bir standarttadır. Farkı yaratan ise kritik anlarda, baskı altında alınan zihinsel kararlardır. Spor psikolojisi danışmanlığı, bu kritik eşiği yönetmeniz için size rehberlik eder.
                  </p>
                  <p>
                    Danışmanlık sürecimizde, motivasyonunuzu korumayı, müsabaka kaygısını kontrol altına almayı, odaklanma sürenizi uzatmayı ve sakatlık gibi zorlu süreçleri zihinsel olarak hasarsız atlatmayı hedefliyoruz. İster amatör, ister olimpiyat seviyesinde bir profesyonel olun; zihinsel antrenman başarıya giden en güçlü adımdır.
                  </p>
                </div>
              </BlurFade>
            </div>

            {/* Sağ - Görsel */}
            <div className="lg:col-span-5">
              <BlurFade delay={0.3}>
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl transform rotate-2 group-hover:rotate-1 transition-transform duration-300" />
                  <img
                    src="/images/spor-danismanligi.png"
                    alt="Spor Danışmanlığı Görseli"
                    className="relative rounded-2xl shadow-md w-full h-auto object-cover border border-border/40"
                  />
                </div>
              </BlurFade>
            </div>
          </div>
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

          <div className="grid lg:grid-cols-3 gap-8">
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
              className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-xl font-semibold text-base hover:bg-surface hover:shadow-xl transition-all duration-300 active:scale-[0.98]"
            >
              Ücretsiz Görüşme Ayarla
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </BlurFade>
        </div>
      </section>
    </>
  );
}
