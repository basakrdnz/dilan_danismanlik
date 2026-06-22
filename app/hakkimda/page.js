import Link from 'next/link';
import { BlurFade } from '../components/magicui/blur-fade';
import { Badge } from '../components/ui/badge';

export const metadata = {
  title: 'Hakkımda | Dilan Karakoç',
  description:
    'Dilan Karakoç hakkında. Uzmanlık alanları, biyografi, vizyon ve misyon bilgileri.',
};

const expertiseAreas = [
  { label: 'Spor Psikolojisi', variant: 'primary' },
  { label: 'Bilişsel Davranışçı Terapi (BDT)', variant: 'primary' },
  { label: 'Bireysel Danışmanlık', variant: 'secondary' },
  { label: 'Ergen Danışmanlığı', variant: 'secondary' },
  { label: 'Çözüm Odaklı Terapi', variant: 'accent' },
  { label: 'Oyun Terapisi', variant: 'accent' },
  { label: 'Travma ve Krize Müdahale', variant: 'outline' },
  { label: 'Cinsel Terapi', variant: 'outline' },
  { label: 'Sınav Süreci Danışmanlığı', variant: 'primary' },
  { label: 'Psikolojik İlk Yardım', variant: 'secondary' },
];

const timeline = [
  {
    year: '2022',
    title: 'TED Üniversitesi - PDR Bölümü Mezuniyeti',
    description: 'TED Üniversitesi Psikolojik Danışmanlık ve Rehberlik Bölümü\'nden mezun oldu.',
  },
  {
    year: '2022',
    title: 'Türk PDR Derneği - MMPI Eğitimi',
    description: 'Türk Psikolojik Danışma ve Rehberlik Derneği bünyesinde MMPI eğitimini tamamladı.',
  },
  {
    year: '2023',
    title: 'Terapi Eğitimleri',
    description: 'Paradoks Psikoloji bünyesinde Çözüm Odaklı Terapi, Oyun Terapisi ile Travma ve Krize Müdahale eğitimlerini tamamladı.',
  },
  {
    year: '2024',
    title: 'Uzmanlık Gelişimi',
    description: 'YPA - Bilişsel Davranışçı Terapi, ASBÜ - Sınav Süreci Danışmanlığı, Türk PDR Derneği - Sporda Psikolojik Performans ve Psikolojik İlk Yardım eğitimlerini tamamladı.',
  },
  {
    year: '2025',
    title: 'Bilginet Akademi & 150+ Danışan',
    description: 'Bilginet Akademi Eğitim Danışmanlığı sertifikasını aldı. 150\'den fazla danışanla başarılı bir şekilde çalışmalarını sürdürmektedir.',
  },
];

export default function HakkimdaPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-surface-alt pt-28 pb-16 lg:pt-36 lg:pb-24">
        <div className="max-w-[1200px] mx-auto px-6">
          <BlurFade>
            <Badge variant="primary" size="md" className="mb-4">
              Hakkımda
            </Badge>
            <h1 className="font-heading text-4xl sm:text-5xl font-bold text-secondary mb-4">
              Dilan Karakoç
            </h1>
            <p className="text-lg text-foreground-muted max-w-2xl leading-relaxed">
              Profesyonel danışmanlık deneyimim ve uzmanlık alanlarım hakkında bilgi edinin.
            </p>
          </BlurFade>
        </div>
      </section>

      {/* Biyografi */}
      <section className="py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-14">
            {/* Profil Alanı */}
            <BlurFade className="lg:col-span-2">
              <div className="sticky top-32">
                <div className="w-full aspect-square max-w-[320px] bg-gradient-to-br from-primary/10 via-accent-light/20 to-surface-alt rounded-2xl flex items-center justify-center mx-auto">
                  <div className="text-center">
                    <div className="w-28 h-28 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center border-4 border-white shadow-lg">
                      <span className="text-3xl font-heading font-bold text-primary">DK</span>
                    </div>
                    <p className="text-xs text-foreground-muted">Profil fotoğrafı eklenecek</p>
                  </div>
                </div>

                {/* Quick Info */}
                <div className="mt-6 space-y-3 max-w-[320px] mx-auto">
                  <div className="flex items-center gap-3 text-sm text-foreground-muted">
                    <svg className="w-4 h-4 text-primary shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    Ankara, Türkiye
                  </div>
                  <div className="flex items-center gap-3 text-sm text-foreground-muted">
                    <svg className="w-4 h-4 text-primary shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    5+ Yıllık Deneyim
                  </div>
                  <div className="flex items-center gap-3 text-sm text-foreground-muted">
                    <svg className="w-4 h-4 text-primary shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                    150+ Danışan
                  </div>
                </div>
              </div>
            </BlurFade>

            {/* Biyografi Metni */}
            <BlurFade delay={0.2} className="lg:col-span-3">
              <div>
                <h2 className="font-heading text-2xl font-bold text-secondary mb-6">Biyografi</h2>
                <div className="space-y-4 text-foreground-muted leading-relaxed">
                  <p>
                    Merhaba, ben <strong className="text-foreground">Dilan Karakoç</strong>.
                    2022 yılında TED Üniversitesi Psikolojik Danışmanlık ve Rehberlik (PDR)
                    Bölümü&apos;nden mezun oldum. Ankara&apos;da 5 yılı aşkın süredir psikolojik
                    danışmanlık alanında profesyonel olarak çalışmaktayım.
                  </p>
                  <p>
                    Bilişsel Davranışçı Terapi, Kısa Süreli Çözüm Odaklı Terapi, Oyun Terapisi,
                    Travma ve Krize Müdahale ile Cinsel Terapi alanlarında çeşitli eğitimler almış
                    olup, spor psikolojisi alanındaki uzmanlığımı bireysel danışmanlık ve eğitim
                    koçluğu ile birleştirerek bütüncül bir yaklaşım sunuyorum.
                  </p>
                  <p>
                    150&apos;den fazla danışanla başarılı çalışmalar yürütmüş olmam,
                    danışanlarımla güven, empati ve profesyonellik ilkeleri doğrultusunda
                    çalışmayı ilke edinmemden kaynaklanmaktadır.
                  </p>
                </div>

                {/* Uzmanlık Alanları */}
                <h3 className="font-heading text-xl font-semibold text-secondary mt-10 mb-4">
                  Uzmanlık Alanları
                </h3>
                <div className="flex flex-wrap gap-2">
                  {expertiseAreas.map((area) => (
                    <Badge key={area.label} variant={area.variant} size="md">
                      {area.label}
                    </Badge>
                  ))}
                </div>

                {/* Kariyer Yolculuğu */}
                <h3 className="font-heading text-xl font-semibold text-secondary mt-10 mb-6">
                  Kariyer Yolculuğu
                </h3>
                <div className="space-y-6">
                  {timeline.map((item, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="flex flex-col items-center">
                        <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm font-bold shrink-0">
                          {item.year}
                        </div>
                        {i < timeline.length - 1 && (
                          <div className="w-px h-full bg-border mt-2" />
                        )}
                      </div>
                      <div className="pb-6">
                        <h4 className="font-semibold text-foreground">{item.title}</h4>
                        <p className="text-sm text-foreground-muted mt-1">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </BlurFade>
          </div>
        </div>
      </section>

      {/* Vizyon & Misyon */}
      <section className="py-20 bg-surface-alt">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            <BlurFade>
              <div className="bg-white rounded-xl p-8 border border-border h-full">
                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-5">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h2 className="font-heading text-2xl font-bold text-secondary mb-4">Vizyon</h2>
                <p className="text-foreground-muted leading-relaxed">
                  Her bireyin potansiyelini tam anlamıyla keşfetmesine ve yaşam kalitesini
                  artırmasına katkıda bulunan, alanında öncü bir danışmanlık merkezi olmak.
                </p>
              </div>
            </BlurFade>

            <BlurFade delay={0.15}>
              <div className="bg-white rounded-xl p-8 border border-border h-full">
                <div className="w-12 h-12 rounded-xl bg-secondary/10 text-secondary flex items-center justify-center mb-5">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h2 className="font-heading text-2xl font-bold text-secondary mb-4">Misyon</h2>
                <p className="text-foreground-muted leading-relaxed">
                  Bilimsel temelli, kişiye özel danışmanlık hizmetleri sunarak bireylerin
                  kişisel ve profesyonel gelişimlerine destek olmak. Güven, empati ve
                  profesyonellik ilkeleri doğrultusunda çalışmak.
                </p>
              </div>
            </BlurFade>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary relative overflow-hidden text-center">
        {/* Dekoratif */}
        <div className="absolute top-0 right-0 w-[300px] h-[300px] rounded-full bg-white/5 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[200px] h-[200px] rounded-full bg-white/5 blur-3xl" />

        <div className="relative max-w-[1200px] mx-auto px-6">
          <BlurFade>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground-inverse mb-4">
              Birlikte Çalışalım
            </h2>
            <p className="text-foreground-inverse/70 text-lg max-w-lg mx-auto mb-8">
              Danışmanlık sürecinizi başlatmak için hemen iletişime geçin.
            </p>
            <Link
              href="/iletisim"
              className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-xl font-semibold text-base hover:bg-surface hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 active:scale-[0.98] group"
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
