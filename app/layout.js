import { Plus_Jakarta_Sans, Playfair_Display } from 'next/font/google';
import './globals.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

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
  title: 'Dilan Karakoç | Kişisel Danışmanlık',
  description:
    'Dilan Karakoç ile kişisel danışmanlık hizmetleri. Spor danışmanlığı, bireysel danışmanlık, eğitim danışmanlığı ve özel ders paketleri ile hayatınıza değer katın.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr" className={`${sans.variable} ${heading.variable}`}>
      <body className="min-h-screen flex flex-col font-sans">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
