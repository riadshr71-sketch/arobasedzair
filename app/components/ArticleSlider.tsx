'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';

type Article = {
  titre: string;
  slug: string;
  coverImage: { url: string };
  category: string;
  publisheddate: string;
};

export default function ArticleSlider({ articles }: { articles: Article[] }) {
  const [current, setCurrent] = useState(0);
  const [hovered, setHovered] = useState(false);

  const prev = () => setCurrent(c => Math.max(0, c - 1));
  const next = () => setCurrent(c => c === articles.length - 1 ? 0 : c + 1);

  useEffect(() => {
    if (hovered) return;
    const timer = setInterval(() => {
      setCurrent(c => c === articles.length - 1 ? 0 : c + 1);
    }, 8000);
    return () => clearInterval(timer);
  }, [hovered, articles.length]);

  const article = articles[current];

  return (
    <div style={{ background: '#060a06', borderBottom: '1px solid #0d2a1f', padding: '28px 40px' }}>
      
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{ width: '4px', height: '22px', background: '#026f5c' }}></div>
          <span style={{ fontFamily: 'Druk, Georgia, serif', fontSize: '18px', textTransform: 'uppercase' as const, letterSpacing: '1px' }}>Dernieres Actualites</span>
        </div>
        <span style={{ fontSize: '12px', color: '#5a7a6a' }}>{current + 1} / {articles.length}</span>
      </div>

      {article && (
        <div style={{ position: 'relative' as const, maxWidth: '600px', margin: '0 auto' }}>
          
          {/* FLECHE GAUCHE */}
          <button
            onClick={prev}
            disabled={current === 0}
            style={{ position: 'absolute' as const, left: '-20px', top: '50%', transform: 'translateY(-50%)', zIndex: 10, background: current === 0 ? '#0d1a0d' : '#026f5c', border: 'none', color: '#f0f5f0', width: '40px', height: '40px', borderRadius: '50%', cursor: current === 0 ? 'default' : 'pointer', fontSize: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', opacity: current === 0 ? 0.3 : 1, transition: 'all 0.2s' }}
          >
            ←
          </button>

          <Link href={`/article/${article.slug}`} style={{ textDecoration: 'none', display: 'block' }}>
            <div
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
              style={{ position: 'relative' as const, width: '100%', aspectRatio: '1/1', borderRadius: '8px', overflow: 'hidden', border: hovered ? '1px solid #026f5c' : '1px solid #0d2a1f', transition: 'border-color 0.3s', cursor: 'pointer' }}
            >
              {article.coverImage.url && (
                <Image
                  src={article.coverImage.url}
                  alt={article.titre}
                  fill
                  style={{ objectFit: 'cover', objectPosition: 'center top', transform: hovered ? 'scale(1.06)' : 'scale(1)', transition: 'transform 0.4s ease' }}
                />
              )}
              <div style={{ position: 'absolute' as const, inset: 0, background: hovered ? 'linear-gradient(to top, rgba(2,111,92,0.6) 0%, rgba(0,0,0,0.2) 50%, transparent 100%)' : 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.2) 50%, transparent 100%)', transition: 'background 0.3s' }} />

              {hovered && (
                <div style={{ position: 'absolute' as const, top: '50%', left: '50%', transform: 'translate(-50%, -50%)', opacity: 0.9 }}>
                  <Image src="/images/arobaselogo.png" alt="Arobasedzair" width={60} height={60} style={{ objectFit: 'contain', filter: 'brightness(0) invert(1)' }} />
                </div>
              )}

              <div style={{ position: 'absolute' as const, bottom: 0, left: 0, right: 0, padding: '24px' }}>
                <div style={{ display: 'inline-block', background: '#026f5c', color: '#f0f5f0', fontSize: '9px', fontWeight: 700, padding: '3px 8px', borderRadius: '2px', textTransform: 'uppercase' as const, letterSpacing: '1px', marginBottom: '10px' }}>
                  {article.category}
                </div>
                <div style={{ fontFamily: 'Druk, Georgia, serif', fontSize: '22px', color: '#f0f5f0', lineHeight: 1.15, textTransform: 'uppercase' as const, marginBottom: '8px' }}>
                  {article.titre}
                </div>
                <div style={{ fontSize: '12px', color: '#8a9a8a' }}>
                  {article.publisheddate ? new Date(article.publisheddate).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' }) : ''}
                </div>
              </div>
            </div>
          </Link>

          {/* FLECHE DROITE */}
          <button
            onClick={next}
            style={{ position: 'absolute' as const, right: '-20px', top: '50%', transform: 'translateY(-50%)', zIndex: 10, background: '#026f5c', border: 'none', color: '#f0f5f0', width: '40px', height: '40px', borderRadius: '50%', cursor: 'pointer', fontSize: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.2s' }}
          >
            →
          </button>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '6px', marginTop: '14px' }}>
            {articles.map((_, i) => (
              <div key={i} onClick={() => setCurrent(i)} style={{ width: i === current ? '20px' : '6px', height: '6px', borderRadius: '3px', background: i === current ? '#026f5c' : '#2a3a2a', cursor: 'pointer', transition: 'all 0.3s' }} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}