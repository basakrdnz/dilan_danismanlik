import Link from 'next/link';
import { BlurFade } from '../../components/magicui/blur-fade';
import { Badge } from '../../components/ui/badge';
import { Card, CardTitle, CardDescription } from '../../components/ui/card';

export const metadata = {
  title: 'Bireysel Yetişkin & Ergen Danışmanlığı | Dilan Karakoç',
  description:
    'Yetişkin ve ergenler için bireysel psikolojik danışmanlık hizmetleri. Kaygı, stres, özgüven ve kişisel gelişim desteği.',
};

const scopeAreas = [
  'Kaygı ve Stres Yönetimi',
  'Özgüven ve Benlik Saygısı',
  'İlişki ve İletişim Problemleri',
  'Duygu Düzenleme ve Öfke Kontrolü',
  'Karar Verme ve Yaşam Geçişleri',
  'Akademik & Kariyer Kaygıları',
  'Aile İçi İletişim ve Çatışmalar',
  'Motivasyon ve Zaman Yönetimi',
];

const sessions = [
  {
    num: '01',
    title: 'İlk Görüşme & Değerlendirme',
    desc: 'İlk görüşmemiz, sizi tanımak, karşılaştığınız zorlukları anlamak ve danışmanlık hedeflerinizi belirlemek üzerine odaklanır.',
  },
  {
    num: '02',
    title: 'Yapılandırılmış Seanslar',
    desc: 'Bireysel ihtiyaçlarınıza özel planlanan tekniklerle, duygusal farkındalık ve başa çıkma stratejileri geliştiriyoruz. Seanslar ortalama 1 saat sürer.',
  },
  {
    num: '03',
    title: 'Gelişim Takibi & Değerlendirme',
    desc: 'Düzenli aralıklarla katettiğimiz mesafeyi gözden geçiriyor, hedeflerimizi güncelliyor veya süreci sonlandırma aşamasına geçiyoruz.',
  },
];

const targetGroup = [
  'Kişisel gelişimini desteklemek ve potansiyelini keşfetmek isteyenler',
  'Sosyal ortamlarda özgüven problemi veya kaygı yaşayan ergen ve yetişkinler',
  'Hayatında radikal kararlar alma (kariyer, okul, ilişki) arifesindeki bireyler',
  'Stres ve yoğun tempo altında tükenmişlik hisseden profesyoneller',
  'İlişkilerinde sürekli benzer döngüleri ve sorunları yaşayanlar',
];

export default function BireyselDanismanlikPage() {
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
                <Badge variant="secondary" size="md">
                  Bireysel Danışmanlık
                </Badge>
              </BlurFade>
              <BlurFade delay={0.2}>
                <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-secondary tracking-tight leading-tight">
                  Bireysel Yetişkin & <br className="hidden sm:block" />
                  <span className="text-primary relative whitespace-nowrap">
                    Ergen
                    <svg className="absolute -bottom-2 left-0 w-full h-3 text-primary/20" viewBox="0 0 100 10" preserveAspectRatio="none">
                      <path d="M0 5 Q 50 10 100 5" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
                    </svg>
                  </span> Danışmanlığı
                </h1>
              </BlurFade>
              <BlurFade delay={0.3}>
                <p className="text-lg text-foreground-muted leading-relaxed">
                  Zorluklarla başa çıkmak, kendinizi keşfetmek ve daha dengeli bir yaşam sürmek için güvenli, yargısız ve profesyonel bir destek alanı sunuyoruz.
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
                    src="/images/bireysel-danismanlik.png"
                    alt="Bireysel Danışmanlık"
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
      <section className="py-20 bg-white">
        <div className="max-w-[1000px] mx-auto px-6 text-center">
          <BlurFade delay={0.1}>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-secondary mb-12">
              Kendinizi Keşfetmek ve Güçlenmek İçin Bir Adım
            </h2>
          </BlurFade>
          <BlurFade delay={0.2}>
            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div className="bg-surface-alt/50 p-8 rounded-2xl border border-border-light hover:border-primary/20 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 text-primary">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-secondary mb-4">Yetişkin Danışmanlığı</h3>
                <p className="text-foreground-muted leading-relaxed">
                  Bireyin karşılaştığı zorlukların kökenine inmesini, duygusal yüklerini hafifletmesini ve yaşam doyumunu artıracak yeni başa çıkma stratejileri geliştirmesini sağlayan bilimsel temelli bir süreçtir.
                </p>
              </div>
              <div className="bg-surface-alt/50 p-8 rounded-2xl border border-border-light hover:border-accent/20 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-6 text-accent">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-secondary mb-4">Ergen Danışmanlığı</h3>
                <p className="text-foreground-muted leading-relaxed">
                  Ergenlik dönemi, kimlik arayışının ve yoğun duygusal geçişlerin yaşandığı özel bir süreçtir. Akademik/akran baskılarına ve hayatın getirdiği stres, kaygı gibi durumlara yönelik özel çözümler sunuyorum.
                </p>
              </div>
            </div>
          </BlurFade>
        </div>
      </section>

      {/* Çalışma Alanları */}
      <section className="py-20 bg-surface-alt">
        <div className="max-w-[1200px] mx-auto px-6">
          <BlurFade className="text-center mb-14">
            <Badge variant="accent" size="sm" className="mb-3">Çalışma Alanları</Badge>
            <h2 className="font-heading text-3xl font-bold text-secondary">
              Destek Verdiğimiz Konular
            </h2>
            <p className="text-foreground-muted max-w-xl mx-auto mt-2 text-sm">
              Hayatın farklı dönemlerinde karşılaştığınız çeşitli duygusal veya zihinsel ihtiyaçlar için yanınızdayız.
            </p>
          </BlurFade>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {scopeAreas.map((area, i) => (
              <BlurFade key={area} delay={i * 0.05}>
                <Card className="h-full flex items-center bg-white p-6 hover:border-primary/20">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="font-medium text-secondary text-sm">{area}</span>
                  </div>
                </Card>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* Seans ve Fiyat Bilgisi */}
      <section className="py-16 bg-white border-b border-border-light">
        <div className="max-w-[1200px] mx-auto px-6">
          <BlurFade className="text-center mb-10">
            <Badge variant="primary" size="sm" className="mb-3">Seans Bilgisi</Badge>
            <h2 className="font-heading text-2xl font-bold text-secondary">Seans Süresi & Ücreti</h2>
          </BlurFade>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-surface-alt rounded-xl border border-border p-6 text-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <p className="font-bold text-secondary text-xl">1 Saat</p>
              <p className="text-sm text-foreground-muted mt-1">Seans Süresi</p>
            </div>
            <div className="bg-surface-alt rounded-xl border border-border p-6 text-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
              </div>
              <p className="font-bold text-secondary text-xl">Haftada 1</p>
              <p className="text-sm text-foreground-muted mt-1">Seans Sıklığı</p>
            </div>
            <div className="bg-primary/5 rounded-xl border border-primary/20 p-6 text-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
              </div>
              <p className="font-bold text-primary text-xl">3.500 TL</p>
              <p className="text-sm text-foreground-muted mt-1">Yüz Yüze Seans</p>
            </div>
            <div className="bg-secondary/5 rounded-xl border border-secondary/20 p-6 text-center">
              <div className="w-12 h-12 rounded-full bg-secondary/10 text-secondary flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              </div>
              <p className="font-bold text-secondary text-xl">3.000 TL</p>
              <p className="text-sm text-foreground-muted mt-1">Online Seans</p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <BlurFade className="text-center mb-14">
            <Badge variant="primary" size="sm" className="mb-3">İşleyiş</Badge>
            <h2 className="font-heading text-3xl font-bold text-secondary">
              Seans Süreci Nasıl İlerler?
            </h2>
          </BlurFade>

          <div className="grid md:grid-cols-3 gap-8">
            {sessions.map((session, i) => (
              <BlurFade key={session.num} delay={i * 0.1}>
                <Card className="h-full flex flex-col p-8 border border-border bg-white hover:shadow-lg transition-all duration-300">
                  <span className="font-heading text-4xl font-bold text-primary/10 mb-4 block">
                    {session.num}
                  </span>
                  <h3 className="font-heading text-lg font-bold text-secondary mb-3">
                    {session.title}
                  </h3>
                  <CardDescription className="text-sm">
                    {session.desc}
                  </CardDescription>
                </Card>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* Kimler İçin */}
      <section className="py-20 bg-surface-alt">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <BlurFade className="space-y-6">
              <Badge variant="secondary" size="sm">Hedef Kitle</Badge>
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-secondary leading-tight">
                Zor Zamanlarda Yalnız Değilsiniz
              </h2>
              <p className="text-foreground-muted leading-relaxed">
                Tüm duygularımız, yaşam yolculuğumuzun birer parçasıdır. Önemli olan bu duyguların altında ezilmek değil, onları anlamak ve yönetmektir. Sürecimiz boyunca, kendinizi güvende ve anlaşılmış hissedeceğiniz profesyonel bir yol arkadaşlığı sunuyorum.
              </p>
            </BlurFade>

            <BlurFade delay={0.1}>
              <div className="bg-white p-8 rounded-2xl border border-border shadow-sm">
                <h3 className="font-heading text-xl font-bold text-secondary mb-6">
                  Kimler Bireysel Danışmanlık Alabilir?
                </h3>
                <ul className="space-y-4">
                  {targetGroup.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-secondary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-sm text-foreground-muted leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </BlurFade>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary relative overflow-hidden text-center">
        <div className="absolute top-0 right-0 w-[300px] h-[300px] rounded-full bg-white/5 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[200px] h-[200px] rounded-full bg-white/5 blur-3xl" />

        <div className="relative max-w-[1200px] mx-auto px-6">
          <BlurFade>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-4">
              Kendi Hikayenizin Kahramanı Olun
            </h2>
            <p className="text-white/80 text-lg max-w-xl mx-auto mb-8">
              Kişisel gelişiminiz ve huzurlu bir yaşam için ilk adımı atın. İlk tanışma seansı ücretsizdir.
            </p>
            <Link
              href="/iletisim"
              className="inline-flex items-center gap-2 bg-white text-primary! px-8 py-4 rounded-xl font-semibold text-base hover:bg-surface hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 active:scale-[0.98] group"
            >
              Randevu Talebi Oluştur
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
