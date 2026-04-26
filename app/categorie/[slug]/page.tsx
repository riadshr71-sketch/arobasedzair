import { getAllArticles } from '../../lib/contentful';
import Image from 'next/image';
import Navbar from '../../components/Navbar';
import ArticleCard from '../../components/ArticleCard';

export const revalidate = 60;

export default async function CategoriePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const tous = await getAllArticles();

  const categories: { [key: string]: string } = {
    'equipe-nationale': 'Equipe Nationale',
    'transferts': 'Transferts',
    'clubs': 'Clubs',
  };

  const nomCategorie = categories[slug] || slug;

  const articles = tous.filter(a => {
    if (!a.category) return false;
    return a.category.trim().toLowerCase() === nomCategorie.trim().toLowerCase();
  });

  return (
    <main style={{ background: '#080c08', minHeight: '100vh', color: '#f0f5f0' }}>

      <Navbar active={nomCategorie} />

      <div style={{ background: '#060a06', borderBottom: '1px solid #0d2a1f', padding: '48px 40px', textAlign: 'center' as const }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', marginBottom: '16px' }}>
          <div style={{ width: '28px', height: '2px', background: '#026f5c' }}></div>
          <span style={{ fontSize: '10px', fontWeight: 700, textTransform: 'uppercase' as const, letterSpacing: '2.5px', color: '#026f5c' }}>Catégorie</span>
          <div style={{ width: '28px', height: '2px', background: '#026f5c' }}></div>
        </div>
        <h1 style={{ fontFamily: 'Druk, Georgia, serif', fontSize: '52px', lineHeight: 1, margin: '0 0 12px', textTransform: 'uppercase' as const }}>
          {nomCategorie}
        </h1>
        <p style={{ fontSize: '13px', color: '#5a7a6a' }}>
          {articles.length} article{articles.length > 1 ? 's' : ''} disponible{articles.length > 1 ? 's' : ''}
        </p>
      </div>

      <section style={{ padding: '48px 40px', maxWidth: '1280px', margin: '0 auto' }}>
        {articles.length === 0 ? (
          <div style={{ textAlign: 'center' as const, padding: '80px 0', color: '#4a6a5a' }}>
            <div style={{ fontSize: '48px', marginBottom: '16px' }}>📰</div>
            <p style={{ fontSize: '16px' }}>Aucun article dans cette catégorie pour le moment.</p>
            <a href="/" style={{ display: 'inline-block', marginTop: '20px', background: '#026f5c', color: '#f0f5f0', fontSize: '11px', fontWeight: 700, padding: '12px 24px', borderRadius: '3px', textTransform: 'uppercase' as const, letterSpacing: '1.5px', textDecoration: 'none' }}>
              Retour à l'accueil
            </a>
          </div>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
            {articles.map(article => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        )}
      </section>

      <div style={{ background: '#060a06', borderTop: '1px solid #0d2a1f', padding: '20px 40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <Image src="/images/arobaselogo.png" alt="Arobasedzair" width={32} height={32} style={{ objectFit: 'contain' }} />
          <span style={{ fontFamily: 'Druk, Georgia, serif', fontSize: '14px', letterSpacing: '2px', color: '#026f5c', textTransform: 'uppercase' as const }}>Arobasedzair</span>
        </div>
        <div style={{ display: 'flex', gap: '20px', fontSize: '11px' }}>
          <a href="/mentions-legales" style={{ color: '#3a5a4a', textDecoration: 'none' }}>Mentions légales</a>
          <a href="/contact" style={{ color: '#3a5a4a', textDecoration: 'none' }}>Contact</a>
          <a href="/a-propos" style={{ color: '#3a5a4a', textDecoration: 'none' }}>À Propos</a>
        </div>
        <div style={{ fontSize: '11px', color: '#3a5a4a' }}>© 2025 · Média 100% Football Algérien</div>
      </div>

    </main>
  );
}