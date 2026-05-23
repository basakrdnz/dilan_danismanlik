'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

const breadcrumbMap = {
  '/hizmetler': 'Hizmetler',
  '/hizmetler/spor-danismanligi': 'Spor Danışmanlığı',
  '/hizmetler/bireysel-danismanlik': 'Bireysel Danışmanlık',
  '/hizmetler/egitim-danismanligi': 'Eğitim Danışmanlığı',
  '/hizmetler/ozel-ders-paketleri': 'Özel Ders Paketleri',
};

function Breadcrumb() {
  const pathname = usePathname();
  const segments = pathname.split('/').filter(Boolean);

  const crumbs = segments.map((_, index) => {
    const href = '/' + segments.slice(0, index + 1).join('/');
    const label = breadcrumbMap[href] || segments[index];
    const isLast = index === segments.length - 1;
    return { href, label, isLast };
  });

  return (
    <nav aria-label="Breadcrumb" className="py-3">
      <ol className="flex items-center gap-2 list-none text-sm text-foreground-subtle">
        <li>
          <Link href="/" className="hover:text-primary transition-colors">
            Anasayfa
          </Link>
        </li>
        {crumbs.map((crumb) => (
          <li key={crumb.href} className="flex items-center gap-2">
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            {crumb.isLast ? (
              <span className="text-foreground font-medium">{crumb.label}</span>
            ) : (
              <Link href={crumb.href} className="hover:text-primary transition-colors">
                {crumb.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export default function HizmetlerLayout({ children }) {
  return (
    <>
      <div className="max-w-[1200px] mx-auto px-6">
        <Breadcrumb />
      </div>
      {children}
    </>
  );
}
