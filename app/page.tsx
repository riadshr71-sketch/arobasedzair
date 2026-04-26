import ArticleCard from './components/ArticleCard';
import { getAllArticles } from './lib/contentful';
import Image from 'next/image';
import Navbar from './components/Navbar';

export const revalidate = 60;

export default async function HomePage() {
  const articles = await getAllArticles();
  const [hero, ...rest] = articles;

  return (
    <main style={{ background: '#080c08', minHeight: '100vh', color: '#f0f5f0' }}>

      <Navbar active="Accueil" />

      {hero && (
        <section className="hero-section" style={{ display: 'flex', minHeight: '520px', position: 'relative' as const, overflow: 'hidden', background: '#060a06' }}>
          <div className="hero-text" style={{ flex: '0 0 42%', padding: '60px 40px', display: 'flex', flexDirection: 'column' as const, justifyContent: 'center', zIndex: 2 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
              <div style={{ width: '28px', height: '2px', background: '#026f5c' }}></div>
              <span style={{ fontSize: '10px', fontWeight: 700, textTransform: 'uppercase' as const, letterSpacing: '2.5px', color: '#026f5c' }}>Media Dzair — 100% Foot Algerien</span>
            </div>
            <h1 style={{ fontFamily: 'Druk, Georgia, serif', fontSize: '70px', lineHeight: '0.92', margin: '0 0 20px', letterSpacing: '1px', color: '#f0f5f0', textTransform: 'uppercase' as const }}>
              L'actualite<br />du football<br /><span style={{ color: '#026f5c' }}>Algerien</span>
            </h1>
            <p style={{ fontSize: '13px', color: '#6a8a7a', lineHeight: 1.7, marginBottom: '32px', maxWidth: '340px' }}>
              Toute l'actualite, les analyses, les transferts et les coulisses du football algerien en temps reel.
            </p>
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' as const }}>
              <a href="/actualites" style={{ background: '#026f5c', color: '#f0f5f0', fontSize: '11px', fontWeight: 700, padding: '13px 26px', borderRadius: '3px', textTransform: 'uppercase' as const, letterSpacing: '1.5px', textDecoration: 'none' }}>
                Decouvrir les actus →
              </a>
              <a href="/a-propos" style={{ color: '#f0f5f0', fontSize: '11px', fontWeight: 700, padding: '13px 26px', border: '1px solid #2a4a3a', borderRadius: '3px', textTransform: 'uppercase' as const, letterSpacing: '1.5px', textDecoration: 'none' }}>
                Qui sommes-nous ?
              </a>
            </div>
          </div>
          <div className="hero-image" style={{ flex: 1, position: 'relative' as const, overflow: 'hidden' }}>
            {hero.coverImage.url && (
              <Image src={hero.coverImage.url} alt={hero.titre} fill style={{ objectFit: 'cover', objectPosition: 'top center' }} priority />
            )}
            <div style={{ position: 'absolute' as const, inset: 0, background: 'linear-gradient(to right, #060a06 0%, rgba(6,10,6,0.4) 50%, transparent 100%)' }} />
            <div style={{ position: 'absolute' as const, bottom: 0, left: 0, right: 0, height: '30%', background: 'linear-gradient(to top, #060a06, transparent)' }} />
          </div>
        </section>
      )}

      <div style={{ background: '#026f5c', padding: '8px 0', overflow: 'hidden', whiteSpace: 'nowrap' as const }}>
        <span className="ticker-inner" style={{ display: 'inline-block', fontSize: '11px', fontWeight: 700, color: '#f0f5f0', textTransform: 'uppercase' as const, letterSpacing: '1px' }}>
          {articles.slice(0, 8).map((article, i) => (
            <span key={i}>⚽ {article.titre} &nbsp;●&nbsp; </span>
          ))}
        </span>
      </div>

      <section style={{ padding: 'clamp(24px, 4vw, 48px) clamp(16px, 4vw, 40px)', maxWidth: '1280px', margin: '0 auto' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '28px' }}>
          <div style={{ width: '4px', height: '24px', background: '#026f5c' }}></div>
          <h2 style={{ fontFamily: 'Druk, Georgia, serif', fontSize: '22px', margin: 0, letterSpacing: '1px', textTransform: 'uppercase' as const }}>Dernieres Actualites</h2>
        </div>
        <div className="articles-grid">
          {rest.slice(0, 6).map(article => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      </section>

      <div className="features-grid">
        {[
          { icon: '⏱', title: 'Actus en temps réel', desc: "Toute l'actualité du football algérien, en direct." },
          { icon: '📸', title: 'Photos exclusives', desc: 'Des images inédites des matchs et des coulisses.' },
          { icon: '📊', title: 'Analyses & décryptages', desc: 'Statistiques et débats passionnés.' },
          { icon: '👥', title: 'Communauté passionnée', desc: 'Rejoins des milliers de supporters algériens.' },
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

      <div className="footer">
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <Image src="/images/arobaselogo.png" alt="Arobasedzair" width={32} height={32} style={{ objectFit: 'contain' }} />
          <span style={{ fontFamily: 'Druk, Georgia, serif', fontSize: '14px', letterSpacing: '2px', color: '#026f5c', textTransform: 'uppercase' as const }}>Arobasedzair</span>
        </div>
        <div style={{ display: 'flex', gap: '16px', fontSize: '11px', flexWrap: 'wrap' as const, justifyContent: 'center' }}>
          <a href="/mentions-legales" style={{ color: '#3a5a4a', textDecoration: 'none' }}>Mentions legales</a>
          <a href="/contact" style={{ color: '#3a5a4a', textDecoration: 'none' }}>Contact</a>
          <a href="/a-propos" style={{ color: '#3a5a4a', textDecoration: 'none' }}>À Propos</a>
        </div>
        <div style={{ fontSize: '11px', color: '#3a5a4a' }}>© 2026 · Media 100% Football Algerien</div>
      </div>

    </main>
  );
}