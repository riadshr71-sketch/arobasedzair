import ArticleSlider from './components/ArticleSlider';
import ArticleCard from './components/ArticleCard';
import { getAllArticles } from './lib/contentful';
import Image from 'next/image';
import Navbar from './components/Navbar';
import Link from 'next/link';
import Newsletter from './components/Newsletter';

export const revalidate = 60;

export default async function HomePage() {
  const articles = await getAllArticles();
  const sliderArticles = articles.slice(0, 3);
  const restArticles = articles.slice(0, 8);
  const filArticles = articles.slice(0, 10);

  return (
    <main style={{ background: '#080c08', minHeight: '100vh', color: '#f0f5f0' }}>

      <Navbar active="Accueil" />

      {/* BANDEAU PRESENTATION */}
      <div style={{ background: '#060a06', borderBottom: '1px solid #0d2a1f', padding: '14px 40px', display: 'flex', alignItems: 'center', gap: '12px' }}>
        <Image src="/images/arobaselogo.png" alt="Arobasedzair" width={32} height={32} style={{ objectFit: 'contain' }} />
        <span style={{ fontSize: '11px', fontWeight: 700, color: '#5a7a6a', textTransform: 'uppercase' as const, letterSpacing: '2px' }}>
          Arobasedzair — <span style={{ color: '#026f5c' }}>Le football algérien comme vous ne l'avez jamais vécu</span>
        </span>
      </div>

      {/* SLIDER HERO */}
      <ArticleSlider articles={sliderArticles} />

{/* FIL EN DIRECT */}
<div style={{ background: '#060a06', borderTop: '1px solid #0d2a1f', borderBottom: '1px solid #0d2a1f' }}>
  <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '20px 40px 0' }}>
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#026f5c', animation: 'pulse 1.5s infinite' }} />
        <span style={{ fontFamily: 'Druk, Georgia, serif', fontSize: '13px', fontWeight: 700, textTransform: 'uppercase' as const, letterSpacing: '1px', color: '#f0f5f0' }}>Fil en direct</span>
      </div>
      <a href="/actualites" style={{ fontSize: '10px', fontWeight: 700, color: '#5a7a6a', textTransform: 'uppercase' as const, letterSpacing: '1px', textDecoration: 'none' }}>
        Voir tout →
      </a>
    </div>
  </div>
  <div>
    {articles.slice(0, 5).map((article, i) => {
      const date = article.publisheddate ? new Date(article.publisheddate) : null;
      const now = new Date();
      const isToday = date && date.toDateString() === now.toDateString();
      const isYesterday = date && new Date(now.getTime() - 86400000).toDateString() === date.toDateString();
      const label = !date ? '' : isToday
        ? date.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' })
        : isYesterday ? 'Hier'
        : date.toLocaleDateString('fr-FR', { day: 'numeric', month: 'short' });
      const isEven = i % 2 === 0;
      const bg = isEven ? '#026f5c' : '#01503f';
      const textColor = '#ffffff';
      const categoryColor = '#a0b0a0';

      return (
        <Link key={article.slug} href={`/article/${article.slug}`} style={{ textDecoration: 'none', display: 'block' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', padding: '14px 40px', background: bg }}>
            <span style={{ fontSize: '11px', fontWeight: 700, color: textColor, flexShrink: 0, minWidth: '55px' }}>
              {label}
            </span>
            <span style={{ fontSize: '10px', fontWeight: 700, color: categoryColor, textTransform: 'uppercase' as const, letterSpacing: '1px', flexShrink: 0 }}>
              {article.category}
            </span>
            <span style={{ fontSize: '13px', fontWeight: 700, color: textColor, lineHeight: 1.3, fontFamily: 'Druk, Georgia, serif', textTransform: 'uppercase' as const }}>
              {article.titre}
            </span>
          </div>
        </Link>
      );
    })}
  </div>
</div>

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
        <div style={{ position: 'relative' as const, marginTop: '-120px', height: '120px', background: 'linear-gradient(to bottom, transparent, #080c08)', zIndex: 2 }} />
        <div style={{ textAlign: 'center' as const, paddingTop: '16px' }}>
          <a href="/actualites" style={{ display: 'inline-block', background: 'transparent', border: '1px solid #026f5c', color: '#026f5c', fontSize: '11px', fontWeight: 700, padding: '12px 32px', borderRadius: '3px', textTransform: 'uppercase' as const, letterSpacing: '1.5px', textDecoration: 'none' }}>
            Voir toutes les actualités →
          </a>
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
<Newsletter />
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