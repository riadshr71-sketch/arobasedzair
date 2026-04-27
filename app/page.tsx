import ArticleSlider from './components/ArticleSlider';
import ArticleCard from './components/ArticleCard';
import { getAllArticles } from './lib/contentful';
import Image from 'next/image';
import Navbar from './components/Navbar';

export const revalidate = 60;

export default async function HomePage() {
  const articles = await getAllArticles();
  const sliderArticles = articles.slice(0, 3);
const restArticles = articles;

  return (
    <main style={{ background: '#080c08', minHeight: '100vh', color: '#f0f5f0' }}>

      <Navbar active="Accueil" />

      {/* BANDEAU PRESENTATION */}
<div style={{ background: '#060a06', borderBottom: '1px solid #0d2a1f', padding: '14px 40px', display: 'flex', alignItems: 'center', gap: '12px' }}>
  <Image src="/images/arobaselogo.png" alt="Arobasedzair" width={32} height={32} style={{ objectFit: 'contain' }} />
  <span style={{ fontSize: '11px', fontWeight: 700, color: '#5a7a6a', textTransform: 'uppercase' as const, letterSpacing: '2px' }}>
    Arobasedzair — <span style={{ color: '#026f5c' }}>L'actualite du football algerien,comme tu la jamais vécu !</span>
  </span>
</div>

{/* SLIDER HERO */}
<ArticleSlider articles={sliderArticles} />

      {/* DERNIERES ACTUALITES */}
      <section style={{ padding: '48px 40px', maxWidth: '1280px', margin: '0 auto' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '28px' }}>
          <div style={{ width: '4px', height: '24px', background: '#026f5c' }}></div>
          <h2 style={{ fontFamily: 'Druk, Georgia, serif', fontSize: '22px', margin: 0, letterSpacing: '1px', textTransform: 'uppercase' as const }}>Dernieres Actualites</h2>
        </div>
        <div className="articles-grid">
          {restArticles.map(article => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      </section>

      {/* FEATURES */}
      <div className="features-grid">
        {[
          { icon: '⏱', title: 'Actus en temps reel', desc: "Toute l'actualite du football algerien, en direct." },
          { icon: '📸', title: 'Photos exclusives', desc: 'Des images inedites des matchs et des coulisses.' },
          { icon: '📊', title: 'Analyses & decryptages', desc: 'Statistiques et debats passionnes.' },
          { icon: '👥', title: 'Communaute passionnee', desc: 'Rejoins des milliers de supporters algeriens.' },
        ].map((f, i) => (
          <div key={f.title} style={{ padding: '22px 20px', borderRight: i < 3 ? '1px solid #0d2a1f' : 'none', display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
            <span style={{ fontSize: '22px', flexShrink: 0 }}>{f.icon}</span>
            <div>
              <div style={{ fontFamily: 'Druk, Georgia, serif', fontSize: '11px', fontWeight: 700, textTransform: 'uppercase' as const, letterSpacing: '1px', color: '#f0f5f0', marginBottom: '5px' }}>{f.title}</div>
              <div style={{ fontSize: '11px', color: '#4a6a5a', lineHeight: 1.5 }}>{f.desc}</div>
            </div>
          </div>
        ))}
      </div>

      {/* FOOTER */}
      <div className="footer">
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <Image src="/images/arobaselogo.png" alt="Arobasedzair" width={32} height={32} style={{ objectFit: 'contain' }} />
          <span style={{ fontFamily: 'Druk, Georgia, serif', fontSize: '14px', letterSpacing: '2px', color: '#026f5c', textTransform: 'uppercase' as const }}>Arobasedzair</span>
        </div>
        <div style={{ display: 'flex', gap: '16px', fontSize: '11px', flexWrap: 'wrap' as const, justifyContent: 'center' }}>
          <a href="/mentions-legales" style={{ color: '#3a5a4a', textDecoration: 'none' }}>Mentions legales</a>
          <a href="/contact" style={{ color: '#3a5a4a', textDecoration: 'none' }}>Contact</a>
          <a href="/a-propos" style={{ color: '#3a5a4a', textDecoration: 'none' }}>A Propos</a>
        </div>
        <div style={{ fontSize: '11px', color: '#3a5a4a' }}>© 2026 · Media 100% Football Algerien</div>
      </div>

    </main>
  );
}