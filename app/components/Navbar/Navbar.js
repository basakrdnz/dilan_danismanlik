'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

const services = [
  { href: '/hizmetler/spor-danismanligi', label: 'Spor Danışmanlığı' },
  { href: '/hizmetler/bireysel-danismanlik', label: 'Bireysel Danışmanlık' },
  { href: '/hizmetler/egitim-danismanligi', label: 'Eğitim Danışmanlığı' },
  { href: '/hizmetler/ozel-ders-paketleri', label: 'Özel Ders Paketleri' },
];

const navLinks = [
  { href: '/', label: 'Anasayfa' },
  { href: '/hakkimda', label: 'Hakkımda' },
  { href: '/hizmetler', label: 'Hizmetler', hasDropdown: true },
  { href: '/basarilar', label: 'Başarılar' },
  { href: '/iletisim', label: 'İletişim' },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (href) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
    setDropdownOpen(false);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setDropdownOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-transparent px-4 sm:px-6 transition-all duration-300 pointer-events-none">
      <nav
        className={cn(
          'w-full mx-auto flex items-center justify-between transition-all duration-500 relative pointer-events-auto',
          scrolled
            ? 'max-w-[1000px] mt-2 py-2 px-6 bg-white/90 backdrop-blur-lg border border-border/50 shadow-[0_8px_30px_rgba(27,42,74,0.1)] rounded-full'
            : 'max-w-[1200px] mt-3 py-3 px-6 bg-white/95 backdrop-blur-md border border-border/30 shadow-[0_12px_45px_rgba(27,42,74,0.15)] rounded-2xl'
        )}
      >
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-1 hover:scale-[1.02] transition-transform select-none"
          onClick={closeMobileMenu}
        >
          <img
            src="/images/dilan_logo.png"
            alt="Dilan Danışmanlık"
            style={{
              height: '42px',
              width: 'auto',
            }}
            className="object-contain"
          />
          <span className="font-sans text-base md:text-lg font-medium text-primary tracking-tight">
            Dilan Danışmanlık
          </span>
        </Link>

        {/* Desktop Menü */}
        <ul className="hidden md:flex items-center gap-6 list-none">
          {navLinks.map((link) => (
            <li
              key={link.href}
              className={cn('relative', link.hasDropdown && 'group')}
              onMouseEnter={
                link.hasDropdown ? () => setDropdownOpen(true) : undefined
              }
              onMouseLeave={
                link.hasDropdown ? () => setDropdownOpen(false) : undefined
              }
            >
              {link.hasDropdown ? (
                <>
                  <button
                    className={cn(
                      'flex items-center gap-1 py-2 text-sm font-semibold select-none bg-transparent border-none cursor-pointer outline-none transition-colors duration-200',
                      isActive(link.href)
                        ? 'text-primary'
                        : 'text-foreground-muted hover:text-primary'
                    )}
                    onClick={() => setDropdownOpen((prev) => !prev)}
                    aria-expanded={dropdownOpen}
                    aria-haspopup="true"
                  >
                    {link.label}
                    <svg
                      className={cn(
                        'w-3.5 h-3.5 transition-transform duration-200',
                        dropdownOpen && 'rotate-180'
                      )}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>

                  {/* Dropdown */}
                  <ul
                    className={cn(
                      'list-none bg-white rounded-xl border border-border shadow-lg p-2 min-w-[220px]',
                      'absolute top-full left-0 mt-2',
                      'transition-all duration-200 origin-top',
                      dropdownOpen
                        ? 'opacity-100 scale-100 visible'
                        : 'opacity-0 scale-95 invisible'
                    )}
                  >
                    <li>
                      <Link
                        href="/hizmetler"
                        className="block px-4 py-2.5 text-xs font-semibold text-foreground-muted rounded-lg hover:bg-surface-alt hover:text-primary transition-colors"
                        onClick={closeMobileMenu}
                      >
                        Tüm Hizmetler
                      </Link>
                    </li>
                    {services.map((service) => (
                      <li key={service.href}>
                        <Link
                          href={service.href}
                          className="block px-4 py-2.5 text-xs font-semibold text-foreground-muted rounded-lg hover:bg-surface-alt hover:text-primary transition-colors"
                          onClick={closeMobileMenu}
                        >
                          {service.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </>
              ) : (
                <Link
                  href={link.href}
                  className={cn(
                    'block py-2 text-sm font-semibold relative transition-colors duration-200 select-none',
                    'after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-[2px] after:bg-primary after:transition-all after:duration-300 hover:after:w-full',
                    isActive(link.href)
                      ? 'text-primary after:w-full'
                      : 'text-foreground-muted hover:text-primary'
                  )}
                  onClick={closeMobileMenu}
                >
                  {link.label}
                </Link>
              )}
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <Link
          href="/iletisim"
          className="btn-base btn-sm btn-light hidden md:inline-flex"
        >
          Randevu Al
        </Link>

        {/* Hamburger - Mobil */}
        <button
          className="flex flex-col gap-[5px] md:hidden bg-transparent border-none cursor-pointer p-1"
          onClick={toggleMobileMenu}
          aria-label="Menüyü aç/kapat"
          aria-expanded={mobileMenuOpen}
        >
          <span
            className={cn(
              'block w-6 h-0.5 bg-foreground transition-all duration-300',
              mobileMenuOpen && 'rotate-45 translate-y-[7px]'
            )}
          />
          <span
            className={cn(
              'block w-6 h-0.5 bg-foreground transition-all duration-300',
              mobileMenuOpen && 'opacity-0'
            )}
          />
          <span
            className={cn(
              'block w-6 h-0.5 bg-foreground transition-all duration-300',
              mobileMenuOpen && '-rotate-45 -translate-y-[7px]'
            )}
          />
        </button>

        {/* Mobil Menü - Standart Alt Panel */}
        {mobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 mt-2 bg-white/95 backdrop-blur-md rounded-2xl border border-border shadow-xl p-6 flex flex-col gap-4 animate-[scale-in_0.2s_ease-out] z-40">
            <ul className="flex flex-col gap-2 list-none">
              {navLinks.map((link) => (
                <li key={link.href} className="w-full">
                  {link.hasDropdown ? (
                    <div className="flex flex-col gap-1">
                      <div className="px-4 py-2 text-xs font-bold text-secondary border-b border-border/40 pb-1 mb-1 select-none">
                        {link.label}
                      </div>
                      <ul className="list-none pl-4 space-y-1">
                        <li>
                          <Link
                            href="/hizmetler"
                            className="block px-4 py-2 text-xs font-semibold text-foreground-muted hover:text-primary rounded-lg"
                            onClick={closeMobileMenu}
                          >
                            Tüm Hizmetler
                          </Link>
                        </li>
                        {services.map((service) => (
                          <li key={service.href}>
                            <Link
                              href={service.href}
                              className="block px-4 py-2 text-xs font-semibold text-foreground-muted hover:text-primary rounded-lg"
                              onClick={closeMobileMenu}
                            >
                              {service.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : (
                    <Link
                      href={link.href}
                      className={cn(
                        'block px-4 py-2.5 text-xs font-semibold rounded-xl transition-all',
                        isActive(link.href)
                          ? 'bg-primary/5 text-primary font-bold'
                          : 'text-foreground-muted hover:bg-surface-alt hover:text-primary'
                      )}
                      onClick={closeMobileMenu}
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
              <li className="mt-4 pt-4 border-t border-border/40 w-full">
                <Link
                  href="/iletisim"
                  className="btn-base btn-md btn-light w-full text-center"
                  onClick={closeMobileMenu}
                >
                  Randevu Al
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}
