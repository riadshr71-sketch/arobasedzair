'use client';
import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Navbar from '../components/Navbar';
import ArticleCard from '../components/ArticleCard';
import Image from 'next/image';

type Article = {
  titre: string;
  slug: string;
  coverImage: { url: string };
  category: string;
  publisheddate: string;
};

function RechercheContent() {
  const searchParams = useSearchParams();
  const [query, setQuery] = useState(searchParams.get('q') || '');
  const [articles, setArticles] = useState<Article[]>([]);
  const [filtered, setFiltered] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/articles')
      .then(res => res.json())
      .then(data => {
        setArticles(data);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    if (!query.trim()) {
      setFiltered(articles);
      return;
    }
    const q = query.toLowerCase();
    setFiltered(articles.filter(a =>
      a.titre.toLowerCase().includes(q) ||
      a.category.toLowerCase().includes(q)
    ));
  }, [query, articles]);

  return (
    <>
      <div style={{ background: '#060a06', borderBottom: '1px solid #0d2a1f', padding: '48px 40px', textAlign: 'center' as const }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', marginBottom: '16px' }}>
          <div style={{ width: '28px', height: '2px', background: '#026f5c' }}></div>
          <span style={{ fontSize: '10px', fontWeight: 700, textTransform: 'uppercase' as const, letterSpacing: '2.5px', color: '#026f5c' }}>Recherche</span>
          <div style={{ width: '28px', height: '2px', background: '#026f5c' }}></div>
        </div>
        <h1 style={{ fontFamily: 'Druk, Georgia, serif', fontSize: '42px', lineHeight: 1, margin: '0 0 24px', textTransform: 'uppercase' as const }}>
          Rechercher un article
        </h1>
        <div style={{ maxWidth: '600px', margin: '0 auto', position: 'relative' as const }}>
          <input
            type="text"
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="Titre, categorie..."
            autoFocus
            style={{ width: '100%', background: '#0a0f0a', border: '1px solid #0d2a1f', borderRadius: '4px', padding: '14px 48px 14px 20px', fontSize: '15px', color: '#f0f5f0', outline: 'none', boxSizing: 'border-box' as const, fontFamily: 'Barlow, sans-serif' }}
          />
          <span style={{ position: 'absolute' as const, right: '16px', top: '50%', transform: 'translateY(-50%)', fontSize: '18px', color: '#026f5c' }}>🔍</span>
        </div>
        {query && (
          <p style={{ fontSize: '12px', color: '#5a7a6a', marginTop: '12px' }}>
            {filtered.length} resultat{filtered.length > 1 ? 's' : ''} pour "{query}"
          </p>
        )}
      </div>

      <section style={{ padding: '48px 40px', maxWidth: '1280px', margin: '0 auto' }}>
        {loading ? (
          <p style={{ color: '#5a7a6a', textAlign: 'center' as const }}>Chargement...</p>
        ) : filtered.length === 0 ? (
          <div style={{ textAlign: 'center' as const, padding: '60px 0' }}>
            <p style={{ fontSize: '48px', marginBottom: '16px' }}>🔍</p>
            <p style={{ fontFamily: 'Druk, Georgia, serif', fontSize: '20px', textTransform: 'uppercase' as const, color: '#5a7a6a' }}>Aucun resultat trouve</p>
          </div>
        ) : (
          <div className="articles-grid">
            {filtered.map(article => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        )}
      </section>
    </>
  );
}

export default function RecherchePage() {
  return (
    <main style={{ background: '#080c08', minHeight: '100vh', color: '#f0f5f0' }}>
      <Navbar active="Recherche" />
      <Suspense fallback={<div style={{ padding: '48px', textAlign: 'center' as const, color: '#5a7a6a' }}>Chargement...</div>}>
        <RechercheContent />
      </Suspense>
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