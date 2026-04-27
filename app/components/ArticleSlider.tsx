'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

type Article = {
  titre: string;
  slug: string;
  coverImage: { url: string };
  category: string;
  publisheddate: string;
};

export default function ArticleSlider({ articles }: { articles: Article[] }) {
  const [current, setCurrent] = useState(0);
  const [hovered, setHovered] = useState<number | null>(null);
  const visible = 3;
  const max = Math.max(0, articles.length - visible);

  const prev = () => setCurrent(c => Math.max(0, c - 1));
  const next = () => setCurrent(c => Math.min(max, c + 1));

  return (
    <div style={{ background: '#060a06', borderBottom: '1px solid #0d2a1f', padding: '28px 40px' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{ width: '4px', height: '22px', background: '#026f5c' }}></div>
          <span style={{ fontFamily: 'Druk, Georgia, serif', fontSize: '18px', textTransform: 'uppercase' as const, letterSpacing: '1px' }}>Dernieres Actualites</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{ display: 'flex', gap: '6px' }}>
            {Array.from({ length: max + 1 }).map((_, i) => (
              <div key={i} onClick={() => setCurrent(i)} style={{ width: i === current ? '20px' : '6px', height: '6px', borderRadius: '3px', background: i === current ? '#026f5c' : '#2a3a2a', cursor: 'pointer', transition: 'all 0.3s' }} />
            ))}
          </div>
          <button onClick={prev} disabled={current === 0} style={{ background: current === 0 ? '#0d1a0d' : '#026f5c', border: 'none', color: '#f0f5f0', width: '34px', height: '34px', borderRadius: '3px', cursor: current === 0 ? 'default' : 'pointer', fontSize: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center', opacity: current === 0 ? 0.4 : 1 }}>
            ←
          </button>
          <button onClick={next} disabled={current >= max} style={{ background: current >= max ? '#0d1a0d' : '#026f5c', border: 'none', color: '#f0f5f0', width: '34px', height: '34px', borderRadius: '3px', cursor: current >= max ? 'default' : 'pointer', fontSize: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center', opacity: current >= max ? 0.4 : 1 }}>
            →
          </button>
        </div>
      </div>

      <div style={{ overflow: 'hidden' }}>
        <div style={{ display: 'flex', gap: '16px', transform: `translateX(calc(-${current} * (33.33% + 5.5px)))`, transition: 'transform 0.4s ease' }}>
          {articles.map((article, i) => (
            <Link key={i} href={`/article/${article.slug}`} style={{ textDecoration: 'none', flexShrink: 0, width: 'calc(33.33% - 11px)' }}>
              <div
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                style={{ position: 'relative' as const, height: '220px', borderRadius: '6px', overflow: 'hidden', border: hovered === i ? '1px solid #026f5c' : '1px solid #0d2a1f', transition: 'border-color 0.3s' }}
              >
                {article.coverImage.url && (
                  <Image
                    src={article.coverImage.url}
                    alt={article.titre}
                    fill
                    style={{ objectFit: 'cover', objectPosition: 'center top', transform: hovered === i ? 'scale(1.08)' : 'scale(1)', transition: 'transform 0.4s ease' }}
                  />
                )}
                {/* VIGNETTAGE */}
                <div style={{ position: 'absolute' as const, inset: 0, background: hovered === i ? 'linear-gradient(to top, rgba(2,111,92,0.5) 0%, rgba(0,0,0,0.3) 60%, transparent 100%)' : 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.1) 60%, transparent 100%)', transition: 'background 0.3s' }} />
                
                {/* LOGO AU SURVOL */}
                {hovered === i && (
                  <div style={{ position: 'absolute' as const, top: '50%', left: '50%', transform: 'translate(-50%, -50%)', opacity: 0.9 }}>
                    <Image src="/images/arobaselogo.png" alt="Arobasedzair" width={50} height={50} style={{ objectFit: 'contain', filter: 'brightness(0) invert(1)' }} />
                  </div>
                )}

                <div style={{ position: 'absolute' as const, bottom: 0, left: 0, right: 0, padding: '12px 14px' }}>
                  <div style={{ display: 'inline-block', background: '#026f5c', color: '#f0f5f0', fontSize: '8px', fontWeight: 700, padding: '2px 7px', borderRadius: '2px', textTransform: 'uppercase' as const, letterSpacing: '1px', marginBottom: '6px' }}>
                    {article.category}
                  </div>
                  <div style={{ fontFamily: 'Druk, Georgia, serif', fontSize: '13px', color: '#f0f5f0', lineHeight: 1.25, textTransform: 'uppercase' as const }}>
                    {article.titre}
                  </div>
                  <div style={{ fontSize: '10px', color: '#8a9a8a', marginTop: '4px' }}>
                    {article.publisheddate ? new Date(article.publisheddate).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long' }) : ''}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}