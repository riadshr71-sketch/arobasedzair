import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/react';
import CookieBanner from './components/CookieBanner';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'Arobasedzair — Le football algérien comme vous ne l\'avez jamais vécu',
    template: '%s | Arobasedzair',
  },
  description: 'Le football algérien comme vous ne l\'avez jamais vécu. Actualites, transferts, analyses et photos exclusives en temps reel depuis 2022.',
  keywords: 'football algerien, equipe nationale algerie, transferts, ligue 1 algerie, arobasedzair, media foot algerien',
  metadataBase: new URL('https://arobasedzair.com'),
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon.ico', sizes: '32x32', type: 'image/x-icon' },
    ],
    apple: '/favicon.ico',
    shortcut: '/favicon.ico',
  },
  openGraph: {
    title: 'Arobasedzair — Le football algerien comme vous ne l\'avez jamais vecu',
    description: 'Le football algerien comme vous ne l\'avez jamais vecu. Actualites, transferts, analyses et photos exclusives.',
    url: 'https://arobasedzair.com',
    siteName: 'Arobasedzair',
    locale: 'fr_FR',
    type: 'website',
    images: ['/images/arobaselogo.png'],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@arobasedzair2',
    title: 'Arobasedzair — Le football algerien comme vous ne l\'avez jamais vecu',
    description: 'Le football algerien comme vous ne l\'avez jamais vecu.',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6296660804889380"
          crossOrigin="anonymous"
        />
      </head>
      <body style={{ margin: 0, padding: 0, background: '#080c08' }}>
        <CookieBanner />
        <Analytics />
        {children}
      </body>
    </html>
  );
}