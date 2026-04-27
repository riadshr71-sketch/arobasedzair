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
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  const prev = () => setCurrent(c => Math.max(0, c - 1));
  const next = () => setCurrent(c => c === articles.length - 1 ? 0 : c + 1);

  useEffect(() => {
    if (hovered) return;
    const timer = setInterval(() => {
      setCurrent(c => c === articles.length - 1 ? 0 : c + 1);
    }, 5000);
    return () => clearInterval(timer);
  }, [hovered, articles.length]);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: 'relative' as const,
        width: '100%',
        height: isMobile ? '300px' : '70vh',
        maxHeight: isMobile ? '300px' : '680px',
        minHeight: isMobile ? '300px' : '500px',
        overflow: 'hidden',
        background: '#060a06',
      }}
    >
      {articles.map((article, i) => (
        <Link
          key={i}
          href={`/article/${article.slug}`}
          style={{
            position: 'absolute' as const,
            inset: 0,
            opacity: i === current ? 1 : 0,
            transition: 'opacity 0.8s ease',
            pointerEvents: i === current ? 'auto' : 'none',
            textDecoration: 'none',
            display: 'block',
          }}
        >
          <div style={{
            position: 'absolute' as const,
            inset: 0,
            transform: hovered && i === current ? 'scale(1.05)' : 'scale(1)',
            transition: 'transform 0.6s ease',
          }}>
            {article.coverImage.url && (
              <Image
                src={article.coverImage.url}
                alt={article.titre}
                fill
                style={{ objectFit: 'cover', objectPosition: 'center top' }}
                priority={i === 0}
              />
            )}
          </div>
          <div style={{ position: 'absolute' as const, inset: 0, background: hovered && i === current ? 'linear-gradient(to top, rgba(2,111,92,0.5) 0%, rgba(0,0,0,0.3) 50%, transparent 100%)' : 'linear-gradient(to top, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.2) 100%)', transition: 'background 0.4s ease' }} />
        </Link>
      ))}

      <button onClick={(e) => { e.preventDefault(); prev(); }} disabled={current === 0} style={{ position: 'absolute' as const, left: isMobile ? '10px' : '20px', top: '50%', transform: 'translateY(-50%)', zIndex: 10, background: 'rgba(0,0,0,0.5)', border: '1px solid #2a4a3a', color: '#f0f5f0', width: isMobile ? '32px' : '44px', height: isMobile ? '32px' : '44px', borderRadius: '50%', cursor: current === 0 ? 'default' : 'pointer', fontSize: isMobile ? '14px' : '18px', display: 'flex', alignItems: 'center', justifyContent: 'center', opacity: current === 0 ? 0.3 : 1, transition: 'all 0.2s' }}>
        ←
      </button>
      <button onClick={(e) => { e.preventDefault(); next(); }} style={{ position: 'absolute' as const, right: isMobile ? '10px' : '20px', top: '50%', transform: 'translateY(-50%)', zIndex: 10, background: 'rgba(0,0,0,0.5)', border: '1px solid #2a4a3a', color: '#f0f5f0', width: isMobile ? '32px' : '44px', height: isMobile ? '32px' : '44px', borderRadius: '50%', cursor: 'pointer', fontSize: isMobile ? '14px' : '18px', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.2s' }}>
        →
      </button>

      <div style={{ position: 'absolute' as const, bottom: 0, left: 0, right: 0, padding: isMobile ? '20px 16px' : '40px 60px', zIndex: 5, pointerEvents: 'none' }}>
        <div style={{ display: 'inline-block', background: '#026f5c', color: '#f0f5f0', fontSize: '9px', fontWeight: 700, padding: '3px 10px', borderRadius: '2px', textTransform: 'uppercase' as const, letterSpacing: '1.5px', marginBottom: '8px' }}>
          {articles[current]?.category}
        </div>
        <h2 style={{ fontFamily: 'Druk, Georgia, serif', fontSize: isMobile ? '20px' : '48px', color: '#f0f5f0', lineHeight: 1.05, margin: '0 0 10px', textTransform: 'uppercase' as const, maxWidth: '800px' }}>
          {articles[current]?.titre}
        </h2>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', pointerEvents: 'all' }}>
          <span style={{ fontSize: '11px', color: '#8a9a8a' }}>
            {articles[current]?.publisheddate ? new Date(articles[current].publisheddate).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' }) : ''}
          </span>
          <div style={{ display: 'flex', gap: '6px' }}>
            {articles.map((_, i) => (
              <div key={i} onClick={() => setCurrent(i)} style={{ width: i === current ? '20px' : '6px', height: '6px', borderRadius: '3px', background: i === current ? '#026f5c' : 'rgba(255,255,255,0.3)', cursor: 'pointer', transition: 'all 0.3s' }} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}