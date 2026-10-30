import type { Metadata, Viewport } from 'next';
import './globals.css';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: 'Neue Wege GmbH | ТОВ «НОВА ДОРОГА»',
  description: 'Internationale Agrarkooperation, Tierzucht, Pflanzenbau und Messevertretung in Gent 2027.',
  icons: {
    icon: '/brand/logo-neue-wege.webp',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de" className="scroll-smooth">
      <body className="min-h-screen bg-white text-brand-ink antialiased selection:bg-brand-purple selection:text-white">
        {children}
      </body>
    </html>
  );
}
