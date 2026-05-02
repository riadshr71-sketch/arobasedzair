import Navbar from '../components/Navbar';
export const metadata = { title: 'Galerie Photo' };
import Image from 'next/image';
import { createClient } from 'contentful';
import GalerieClient from './GalerieClient';

async function getPhotos() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID!,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
  });
  const entries = await client.getEntries({ content_type: 'photo' });
  return entries.items.map((item: any) => ({
    titre: item.fields.titre as string,
    image: { url: 'https:' + (item.fields.image as any).fields.file.url },
    categorie: item.fields.categorie as string,
  }));
}

export const revalidate = 60;

export default async function Galerie() {
  const photos = await getPhotos();

  return (
    <main style={{ background: '#080c08', minHeight: '100vh', color: '#f0f5f0' }}>

     <Navbar active="Galerie" />

      <div style={{ background: '#060a06', borderBottom: '1px solid #0d2a1f', padding: '48px 40px', textAlign: 'center' as const }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', marginBottom: '16px' }}>
          <div style={{ width: '28px', height: '2px', background: '#026f5c' }}></div>
          <span style={{ fontSize: '10px', fontWeight: 700, textTransform: 'uppercase' as const, letterSpacing: '2.5px', color: '#026f5c' }}>Photos exclusives</span>
          <div style={{ width: '28px', height: '2px', background: '#026f5c' }}></div>
        </div>
        <h1 style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: '52px', lineHeight: 1, margin: '0 0 16px', textTransform: 'uppercase' as const }}>
          Galerie <span style={{ color: '#026f5c' }}>Photo</span>
        </h1>
        <p style={{ fontSize: '14px', color: '#6a8a7a', lineHeight: 1.8, maxWidth: '500px', margin: '0 auto' }}>
          Retrouvez toutes nos photos exclusives des matchs, entraînements et coulisses du football algérien.
        </p>
      </div>

      <section style={{ padding: '48px 40px', maxWidth: '1280px', margin: '0 auto' }}>
        {photos.length === 0 ? (
          <div style={{ textAlign: 'center' as const, padding: '80px 0', color: '#4a6a5a' }}>
            <div style={{ fontSize: '48px', marginBottom: '16px' }}>📸</div>
            <p style={{ fontSize: '16px' }}>Aucune photo disponible pour le moment.</p>
          </div>
        ) : (
          <GalerieClient photos={photos} />
        )}
      </section>

      <div style={{ background: '#060a06', borderTop: '1px solid #0d2a1f', padding: '20px 40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <Image src="/images/arobaselogo.png" alt="Arobasedzair" width={32} height={32} style={{ objectFit: 'contain' }} />
          <span style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: '14px', letterSpacing: '2px', color: '#026f5c', textTransform: 'uppercase' as const }}>Arobasedzair</span>
        </div>
        <div style={{ display: 'flex', gap: '20px', fontSize: '11px' }}>
          <a href="/mentions-legales" style={{ color: '#3a5a4a', textDecoration: 'none' }}>Mentions légales</a>
          <a href="/contact" style={{ color: '#3a5a4a', textDecoration: 'none' }}>Contact</a>
          <a href="/a-propos" style={{ color: '#3a5a4a', textDecoration: 'none' }}>À Propos</a>
        </div>
        <div style={{ fontSize: '11px', color: '#3a5a4a' }}>© 2026 · Média 100% Football Algérien</div>
      </div>

    </main>
  );
}