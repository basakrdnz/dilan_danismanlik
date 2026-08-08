import { siteConfig } from '@/lib/seo-config';

export default function sitemap() {
  const now = new Date();

  const routes = [
    { path: '', priority: 1, changeFrequency: 'weekly' },
    { path: '/hakkimda', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/hizmetler', priority: 0.9, changeFrequency: 'monthly' },
    { path: '/hizmetler/spor-danismanligi', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/hizmetler/bireysel-danismanlik', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/hizmetler/egitim-danismanligi', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/hizmetler/ozel-ders-paketleri', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/basarilar', priority: 0.7, changeFrequency: 'weekly' },
    { path: '/iletisim', priority: 0.7, changeFrequency: 'yearly' },
  ];

  return routes.map((route) => ({
    url: `${siteConfig.url}${route.path}`,
    lastModified: now,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
