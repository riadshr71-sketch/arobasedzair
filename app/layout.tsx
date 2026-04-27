import type { Metadata } from 'next';
import './globals.css';

export const metadata = {
  title: 'Arobasedzair — Le football algerien comme vous ne l\'avez jamais vecu',
  description: 'Arobasedzair, le media independant du football algerien. Actualites, transferts, analyses et photos exclusives en temps reel depuis 2022.',
  keywords: 'football algerien, equipe nationale algerie, transferts, ligue 1 algerie, arobasedzair, media foot algerien',
  metadataBase: new URL('https://arobasedzair.com'),
  openGraph: {
    title: 'Arobasedzair — Le football algerien comme vous ne l\'avez jamais vecu',
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
    title: 'Arobasedzair — Le football algerien comme vous ne l\'avez jamais vecu',
    description: 'Le media independant du football algerien.',
  },
};