import { Plus_Jakarta_Sans, Playfair_Display } from 'next/font/google';
import './globals.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import { siteConfig } from '@/lib/seo-config';

const sans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-jakarta',
});

const heading = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair',
});

export const metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.shortName}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.shortName }],
  creator: siteConfig.shortName,
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: siteConfig.locale,
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: siteConfig.title,
    description: siteConfig.description,
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.title,
    description: siteConfig.description,
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'ProfessionalService',
      '@id': `${siteConfig.url}/#business`,
      name: siteConfig.name,
      image: `${siteConfig.url}/images/dilanpp.jpeg`,
      logo: `${siteConfig.url}/images/dilan_logo.png`,
      url: siteConfig.url,
      telephone: siteConfig.phone,
      email: siteConfig.email,
      priceRange: '₺₺',
      address: {
        '@type': 'PostalAddress',
        addressLocality: siteConfig.addressLocality,
        addressRegion: siteConfig.addressRegion,
        addressCountry: siteConfig.addressCountry,
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: siteConfig.geo.latitude,
        longitude: siteConfig.geo.longitude,
      },
      areaServed: [
        { '@type': 'City', name: 'Ankara' },
        { '@type': 'Place', name: 'Etimesgut' },
        { '@type': 'Place', name: 'Çankaya' },
      ],
      sameAs: siteConfig.sameAs,
      founder: { '@id': `${siteConfig.url}/#person` },
      employee: { '@id': `${siteConfig.url}/#person` },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '5',
        bestRating: '5',
        reviewCount: '8',
      },
    },
    {
      '@type': 'Person',
      '@id': `${siteConfig.url}/#person`,
      name: 'Dilan Karakoç',
      jobTitle: 'Psikolojik Danışman',
      image: `${siteConfig.url}/images/dilanpp.jpeg`,
      url: siteConfig.url,
      email: siteConfig.email,
      telephone: siteConfig.phone,
      alumniOf: {
        '@type': 'CollegeOrUniversity',
        name: 'TED Üniversitesi',
      },
      address: {
        '@type': 'PostalAddress',
        addressLocality: siteConfig.addressLocality,
        addressCountry: siteConfig.addressCountry,
      },
      sameAs: siteConfig.sameAs,
      worksFor: { '@id': `${siteConfig.url}/#business` },
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr" className={`${sans.variable} ${heading.variable}`}>
      <head>
        {/* Google Ads Global Site Tag */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-18334855740"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-18334855740');
            `,
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
