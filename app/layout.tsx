import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'Arobasedzair | Media Football Algerien',
    template: '%s | Arobasedzair',
  },
  description: 'Arobasedzair, le media independant du football algerien. Actualites, transferts, analyses et photos exclusives en temps reel depuis 2022.',
  keywords: 'football algerien, equipe nationale algerie, transferts, ligue 1 algerie, arobasedzair, media foot algerien',
  metadataBase: new URL('https://arobasedzair.com'),
  openGraph: {
    title: 'Arobasedzair | Media Football Algerien',
    description: 'Actualites, transferts, analyses et photos exclusives du football algerien.',
    url: 'https://arobasedzair.com',
    siteName: 'Arobasedzair',
    locale: 'fr_FR',
    type: 'website',
    images: ['/images/arobaselogo.png'],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@arobasedzair2',
    title: 'Arobasedzair | Media Football Algerien',
    description: 'Le media independant du football algerien.',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body style={{ margin: 0, padding: 0, background: '#080c08' }}>
        {children}
      </body>
    </html>
  );
}