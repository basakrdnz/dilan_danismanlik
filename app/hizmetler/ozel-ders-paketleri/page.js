import Link from 'next/link';
import { BlurFade } from '../../components/magicui/blur-fade';
import { Badge } from '../../components/ui/badge';
import { Card, CardTitle, CardDescription } from '../../components/ui/card';

export const metadata = {
  title: 'Özel Ders Paketleri | Dilan Karakoç',
  description:
    'Kişiye özel ders programları ve akademik destek paketleri. Bireysel ihtiyaçlara uygun eğitim çözümleri.',
};

const packages = [
  {
    title: 'Haftalık Destek Paketi',
    sessions: 'Haftada 1 Seans',
    description: 'Belirli bir ders veya zorlanılan ünite/konu üzerinde yoğunlaşmak isteyen öğrenciler için idealdir.',
    benefits: ['Birebir konu anlatımı', 'Haftalık ödevlendirme ve takip', 'Soru çözüm saatleri', 'Konu kavrama testleri'],
  },
  {
    title: 'Yoğun Sınav Hazırlık Paketi',
    sessions: 'Haftada 2 Seans',
    description: 'Sınav dönemlerinde veya eksik konuları hızla kapatmak isteyen öğrenciler için hazırlanan yoğun program.',
    benefits: ['Hızlı konu tekrarları', 'Yoğun soru çözümü ve analizler', 'Deneme sınavı takipleri', 'Eksik gedik analizleri'],
  },
  {
    title: 'Premium Başarı Paketi',
    sessions: 'Haftada 2 Ders + WhatsApp Desteği',
    description: 'Birden fazla branşta tam destek, düzenli takip ve WhatsApp üzerinden sınırsız soru çözümü.',
    benefits: ['Haftada 2 birebir ders', 'WhatsApp üzerinden soru çözümü', 'Çoklu branş desteği', 'Düzenli ilerleme takibi'],
  },
];

const subjects = ['Fizik', 'Kimya', 'Biyoloji', 'Matematik', 'Geometri', 'Türkçe', 'Edebiyat'];


export default function OzelDersPaketleriPage() {
  return (
    <>
      {/* Hero / Header */}
      <section className="bg-surface-alt pt-28 pb-12 lg:pt-36 lg:pb-16 border-b border-border-light">
        <div className="max-w-[1200px] mx-auto px-6">
          <BlurFade>
            <Badge variant="primary" size="md" className="mb-4">
              Özel Ders Paketleri
            </Badge>
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-secondary tracking-tight mb-4">
              Birebir <span className="text-primary">Özel Ders</span> Paketleri
            </h1>
            <p className="text-lg text-foreground-muted max-w-3xl leading-relaxed">
              Öğrencilerin bireysel hızına ve eksiklerine göre tasarlanan, alanında uzman eğitmenlerin eşlik ettiği kişiselleştirilmiş akademik destek çözümleri sunuyoruz.
            </p>
          </BlurFade>
        </div>
      </section>

      {/* Genel Bakış */}
      <section className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Sol - Metin */}
            <div className="lg:col-span-7 space-y-6">
              <BlurFade delay={0.1}>
                <h2 className="font-heading text-2xl sm:text-3xl font-bold text-secondary">
                  Klasik Sınıf Ortamından Uzak, Bireysel Odaklı Başarı
                </h2>
              </BlurFade>
              <BlurFade delay={0.2}>
                <div className="space-y-4 text-foreground-muted leading-relaxed">
                  <p>
                    Her öğrencinin anlama hızı, zayıf olduğu konular ve öğrenme stili farklıdır. Kalabalık sınıflarda gözden kaçabilen bu detaylar, birebir özel derslerde tamamen öğrenciye göre ayarlanır. Bu sayede öğrenci, anlamadığı yerleri çekinmeden sorabilir ve dersin temposunu kendi belirler.
                  </p>
                  <p>
                    Birebir ders paketlerimizde, sadece konu anlatımı yapmıyor; öğrencilere o dersi nasıl öğrenmesi gerektiğini de öğretiyoruz. Online ve yüz yüze eğitim seçeneklerimiz ile öğrencilere esnek, verimli ve konforlu bir öğrenme deneyimi sunuyoruz.
                  </p>
                </div>
              </BlurFade>
              {/* Branşlar */}
              <BlurFade delay={0.3}>
                <div>
                  <h3 className="font-semibold text-secondary text-sm mb-3">Verilen Dersler (YKS & LGS)</h3>
                  <div className="flex flex-wrap gap-2">
                    {subjects.map((subject) => (
                      <span key={subject} className="bg-primary/10 text-primary text-sm font-medium px-3 py-1 rounded-lg">
                        {subject}
                      </span>
                    ))}
                  </div>
                </div>
              </BlurFade>
            </div>

            {/* Sağ - Bilgi Kutusu */}
            <div className="lg:col-span-5">
              <BlurFade delay={0.3}>
                <div className="bg-surface-alt rounded-2xl border border-border p-8 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                    </div>
                    <div>
                      <p className="font-semibold text-secondary text-sm">Partner Eğitmen Kadrosu</p>
                      <p className="text-xs text-foreground-muted">Alanında deneyimli öğretmenler</p>
                    </div>
                  </div>
                  <p className="text-foreground-muted text-sm leading-relaxed">
                    Özel ders süreçlerimiz, kendi alanlarında deneyimli <strong className="text-foreground">partner eğitmenler</strong> tarafından yürütülmektedir. Tüm süreç Dilan Karakoç koordinesinde yürütülerek, öğrencinin psikolojik motivasyonu ve ders takibi yakından izlenir.
                  </p>
                  <div className="pt-3 border-t border-border">
                    <p className="text-xs text-foreground-muted italic">
                      📌 İlk tanışma ve seviye tespit dersi ücretsizdir.
                    </p>
                  </div>
                </div>
              </BlurFade>
            </div>
          </div>
        </div>
      </section>


      {/* Paketler */}
      <section className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <BlurFade className="text-center mb-14">
            <Badge variant="secondary" size="sm" className="mb-3">Özel Ders Paketleri</Badge>
            <h2 className="font-heading text-3xl font-bold text-secondary">
              Eğitim ve Takip Paketlerimiz
            </h2>
            <p className="text-foreground-muted max-w-xl mx-auto mt-2 text-sm">
              Öğrencinin ihtiyacına uygun esnek seans seçeneklerimiz mevcuttur.
            </p>
          </BlurFade>

          <div className="grid lg:grid-cols-3 gap-8">
            {packages.map((pkg, i) => (
              <BlurFade key={pkg.title} delay={i * 0.1}>
                <Card className="h-full flex flex-col border border-border bg-white p-8 hover:shadow-lg transition-all duration-300">
                  <Badge variant="primary" size="sm" className="self-start mb-4">
                    {pkg.sessions}
                  </Badge>
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
                      {pkg.benefits.map((benefit, j) => (
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
              Öğrenmeyi Keyifli ve Verimli Hale Getirin
            </h2>
            <p className="text-foreground-inverse/80 text-lg max-w-xl mx-auto mb-8">
              Birebir ilginin gücüyle derslerdeki başarınızı katlayın. Ücretsiz deneme dersi için bizimle iletişime geçin.
            </p>
            <Link
              href="/iletisim"
              className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-xl font-semibold text-base hover:bg-surface hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 active:scale-[0.98] group"
            >
              Ücretsiz Deneme Dersi Al
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
