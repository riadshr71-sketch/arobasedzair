import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Arobasedzair — Média Football Algérien',
  description: 'Toute l\'actualité, les analyses, les transferts et les coulisses du football algérien.',
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