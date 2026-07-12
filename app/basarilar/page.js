import Link from 'next/link';
import { BlurFade } from '../components/magicui/blur-fade';
import { NumberTicker } from '../components/magicui/number-ticker';
import { Badge } from '../components/ui/badge';
import YorumModal from '../components/YorumFormu';

export const metadata = {
  title: 'Başarılar & Referanslar | Dilan Karakoç',
  description:
    'Dilan Karakoç danışmanlık başarıları, müşteri referansları ve başarı hikayeleri.',
};

const testimonials = [
  {
    name: 'Almina C.',
    role: 'Öğrenci',
    text: 'Sınav sürecimde bana verdiğiniz destek, motivasyon ve yol göstericiliğiniz için çok teşekkür ederim. Sayenizde daha düzenli ve bilinçli çalışmayı öğrendim. Her konudaki bilgilerinizle beni yönlendirdiniz. Emekleriniz benim için çok değerli. Gerçekten alanınızda en iyisisiniz.',
    rating: 5,
  },
  {
    name: 'Nisa Nur G.',
    role: 'Öğrenci',
    text: 'Hocam öncelikle bana her konuda destek verdiğiniz ve hayatımın bu döneminde bana eşlik ettiğiniz için size ne kadar teşekkür etsem az. Her kararımda beni desteklediniz. Bazen sadece öğretmenim gibi değil, bir arkadaşım gibi de yanımda oldunuz. Zorlandığım zamanlarda beni dinlediniz, motive ettiniz, bana benden daha çok inandınız ve kendime daha çok güvenmemi sağladınız.',
    rating: 5,
  },
  {
    name: 'Kutay Ö.',
    role: 'Öğrenci',
    text: 'Her öğrenci gibi benim de çok fazla rehber öğretmenim ve danışmanım oldu; ancak Dilan Hocam kadar beni tanımlayabilen, sınırlarımı anlayabilen ve hayatımı bu kadar düzene sokabilen bir öğretmenim daha önce hiç olmadı. Kendisi sayesinde sadece derslerimde değil, hayatımda da disiplin ve istikrarı yakaladım.',
    rating: 5,
  },
  {
    name: 'Elif İrem İ.',
    role: 'Öğrenci',
    text: 'Dilan Hocamla çalışmaya başlamadan önce hedeflerime ulaşabileceğimden tam olarak emin değildim. Ancak beni çok iyi analiz ederek eksiklerimi ve güçlü yönlerimi doğru şekilde belirledi. Her öğrenciye aynı yöntemi uygulamak yerine, bana özel bir çalışma planı ve yönlendirme hazırlayarak en verimli şekilde ilerlememi sağladı.',
    rating: 5,
  },
  {
    name: 'Aysima E.',
    role: 'Öğrenci',
    text: 'Dilan hoca benim için hiç bir zaman sadece bir hoca olmadı. Kendisi her zaman hem bana hem diğer öğrencilerine bir abla şefkatiyle yaklaştı. Onunla kurduğumuz bağ her zaman gerçekti, şu ana kadar hayatıma etkisi olan nadir öğretmenlerden biri benim için. Bana kattığı her şey için kendisine teşekkür ederim.',
    rating: 5,
  },
  {
    name: 'Funda E.',
    role: 'Veli',
    text: 'Dilan hocam öncelikle kızım için bir abla, arkadaş ve öğretmen oldunuz. Yorulduğu, sıkıldığı anda o tatlı dilinizle hep motive ettiniz. Emeğiniz için sonsuz teşekkürler. İyi ki tanıdık sizi, iyi ki kızımın öğretmeni oldunuz.',
    rating: 5,
  },
  {
    name: 'İlsu Akar',
    role: 'Öğrenci',
    text: 'YKS sürecinde Dilan Hoca ile yaklaşık bir yıl çalıştım ve bu süreç benim için gerçekten çok verimli geçti. Bana özel hazırladığı, her günü detaylı planlanmış çalışma programları sayesinde düzenli bir şekilde ilerleyebildim. Programları hem benim isteklerimi dikkate alarak hazırladı hem de konuları en doğru sırayla çalışmamı sağladı. Yaklaşık üç dört ay gibi kısa bir sürede netlerimde 30 netlik bir artış yakaladım. Akademik desteğinin yanı sıra, stres yönetimi konusunda da bana çok yardımcı oldu. Süreç boyunca her konuda rahatça konuşabildiğim, beni yargılamadan dinleyen ve her zaman çözüm odaklı yaklaşan bir rehberdi. Genç olması sayesinde bizi ve yaşadığımız süreci çok iyi anlayabiliyor, bu da iletişimi çok daha samimi ve güçlü kılıyor. Disiplinli, ilgili ve her zaman ulaşılabilir olması sayesinde kendimi bu zorlu süreçte hiç yalnız hissetmedim. YKS hazırlığında sadece akademik değil, psikolojik olarak da destek arayan herkese gönül rahatlığıyla tavsiye ederim.',
    rating: 5,
  },
  {
    name: 'Merve Yıldırım',
    role: 'Öğrenci',
    text: 'Bu süreci benimle beraber beni anlayarak geçirdiniz. Bir yıl boyunca bıkmadan, yorulmadan verdiğiniz emekler, sadece bir öğretmen olarak değil, her zaman arkamda hissettiğim o güçlü desteğiniz benim için çok kıymetli. Ne zaman çıkmaza girsem, güler yüzünüz ve samimiyetinizle bana her zaman doğru yolu gösterdiniz. Emekleriniz, sabrınız ve bana kattığınız her şey için sonsuz teşekkür ederim.',
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
