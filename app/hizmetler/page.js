import Link from 'next/link';
import { BlurFade } from '../components/magicui/blur-fade';
import { Badge } from '../components/ui/badge';
import { Card, CardTitle, CardDescription, CardFooter } from '../components/ui/card';

export const metadata = {
  title: 'Hizmetler | Dilan Karakoç',
  description:
    'Dilan Karakoç danışmanlık hizmetleri. Spor danışmanlığı, bireysel danışmanlık, eğitim danışmanlığı ve özel ders paketleri.',
};

const services = [
  {
    title: 'Spor, Performans & Psikoloji Danışmanlığı',
    description:
      'Sporcuların mental performanslarını artırmak, motivasyonlarını güçlendirmek ve hedeflerine ulaşmalarına yardımcı olmak için kapsamlı danışmanlık programları sunuyoruz.',
    features: ['Mental antrenman', 'Yarışma hazırlığı', 'Motivasyon koçluğu', 'Takım dinamikleri'],
    href: '/hizmetler/spor-danismanligi',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    color: 'primary',
  },
  {
    title: 'Bireysel Yetişkin & Ergen Danışmanlığı',
    description:
      'Yetişkin ve ergenlerin kişisel gelişim süreçlerine destek oluyoruz. Kaygı, stres, özgüven ve ilişki sorunlarında profesyonel rehberlik sağlıyoruz.',
    features: ['Kaygı yönetimi', 'Özgüven geliştirme', 'İlişki danışmanlığı', 'Kişisel gelişim'],
    href: '/hizmetler/bireysel-danismanlik',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
    color: 'secondary',
  },
  {
    title: 'Eğitim Danışmanlığı & Koçluğu',
    description:
      'Eğitim süreçlerinde doğru yönlendirme, sınav hazırlığı stratejileri ve akademik koçluk hizmetleri ile öğrencilerin başarılarını artırıyoruz.',
    features: ['Akademik koçluk', 'Sınav stratejisi', 'Çalışma planlaması', 'Hedef belirleme'],
    href: '/hizmetler/egitim-danismanligi',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    color: 'accent',
  },
  {
    title: 'Özel Ders Paketleri',
    description:
      'Kişiye özel ders programları ve akademik destek paketleri ile öğrencilerin bireysel ihtiyaçlarına uygun eğitim çözümleri sunuyoruz.',
    features: ['Birebir ders', 'Konu takviyeleri', 'Ödev desteği', 'İlerleme takibi'],
    href: '/hizmetler/ozel-ders-paketleri',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    color: 'primary',
  },
];

const colorMap = {
  primary: { bg: 'bg-primary/10', text: 'text-primary', hoverBg: 'group-hover:bg-primary' },
  secondary: { bg: 'bg-secondary/10', text: 'text-secondary', hoverBg: 'group-hover:bg-secondary' },
  accent: { bg: 'bg-accent/10', text: 'text-accent-dark', hoverBg: 'group-hover:bg-accent' },
};

export default function HizmetlerPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-surface-alt pt-28 pb-16 lg:pt-36 lg:pb-24">
        <div className="max-w-[1200px] mx-auto px-6">
          <BlurFade>
            <Badge variant="accent" size="md" className="mb-4">
              Hizmetlerimiz
            </Badge>
            <h1 className="font-heading text-4xl sm:text-5xl font-bold text-secondary mb-4">
              Danışmanlık Hizmetleri
            </h1>
            <p className="text-lg text-foreground-muted max-w-2xl leading-relaxed">
              İhtiyaçlarınıza uygun profesyonel danışmanlık hizmetlerimizi keşfedin.
              Her birey için özelleştirilmiş programlar sunuyoruz.
            </p>
          </BlurFade>
        </div>
      </section>

      {/* Service Cards */}
      <section className="py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="space-y-8">
            {services.map((service, i) => {
              const colors = colorMap[service.color];
              return (
                <BlurFade key={service.href} delay={0.1 * i}>
                  <div className="bg-white rounded-xl border border-border p-8 lg:p-10 hover:shadow-lg transition-all duration-300 group">
                    <div className="flex flex-col lg:flex-row gap-8">
                      {/* Sol - İkon & Başlık */}
                      <div className="flex-1">
                        <div className={`w-14 h-14 rounded-xl ${colors.bg} ${colors.text} flex items-center justify-center mb-5 ${colors.hoverBg} group-hover:text-foreground-inverse transition-all duration-300`}>
                          {service.icon}
                        </div>
                        <h2 className="font-heading text-2xl font-bold text-secondary mb-3">
                          {service.title}
                        </h2>
                        <p className="text-foreground-muted leading-relaxed mb-6">
                          {service.description}
                        </p>
                        <Link
                          href={service.href}
                          className="btn-base btn-sm btn-light"
                        >
                          Detaylı Bilgi
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </Link>
                      </div>

                      {/* Sağ - Özellikler */}
                      <div className="lg:w-64 shrink-0">
                        <h3 className="text-sm font-semibold text-foreground-muted uppercase tracking-wider mb-4">
                          Kapsam
                        </h3>
                        <ul className="space-y-3">
                          {service.features.map((feature) => (
                            <li key={feature} className="flex items-center gap-3 text-sm text-foreground-muted">
                              <svg className={`w-4 h-4 shrink-0 ${colors.text}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </BlurFade>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
