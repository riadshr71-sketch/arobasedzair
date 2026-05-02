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
  verdict?: string | null;
};

export default function ArticleCard({ article }: { article: Article }) {
  const [hovered, setHovered] = useState(false);

  const verdictConfig: { [key: string]: { bg: string; label: string } } = {
    'verifie': { bg: '#026f5c', label: '✅ Verifie' },
    'faux': { bg: '#8b0000', label: '❌ Faux' },
    'partiellement-vrai': { bg: '#b8860b', label: '⚠️ Partiel' },
    'en-cours': { bg: '#1a3a5c', label: '🔍 En cours' },
  };

  return (
    <Link href={`/article/${article.slug}`} style={{ textDecoration: 'none', display: 'block', height: '100%' }}>
      <div
        style={{ background: '#0a0f0a', border: hovered ? '1px solid #026f5c44' : '1px solid #0d2a1f', borderRadius: '6px', overflow: 'hidden', transition: 'border-color 0.3s', display: 'flex', flexDirection: 'column' as const, height: '100%' }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div style={{ position: 'relative' as const, height: '200px', flexShrink: 0, overflow: 'hidden' }}>
          {article.coverImage.url && (
            <Image
              src={article.coverImage.url}
              alt={article.titre}
              fill
              style={{ objectFit: 'cover', objectPosition: 'center top', transform: hovered ? 'scale(1.08)' : 'scale(1)', transition: 'transform 0.4s ease' }}
            />
          )}
          <div style={{ position: 'absolute' as const, top: '10px', left: '10px', display: 'flex', gap: '6px', flexWrap: 'wrap' as const }}>
            <div style={{ background: '#026f5c', color: '#f0f5f0', fontSize: '9px', fontWeight: 700, padding: '3px 8px', borderRadius: '2px', textTransform: 'uppercase' as const, letterSpacing: '1px' }}>
              {article.category}
            </div>
            {article.verdict && verdictConfig[article.verdict] && (
              <div style={{ background: verdictConfig[article.verdict].bg, color: '#f0f5f0', fontSize: '9px', fontWeight: 700, padding: '3px 8px', borderRadius: '2px', textTransform: 'uppercase' as const, letterSpacing: '1px' }}>
                {verdictConfig[article.verdict].label}
              </div>
            )}
          </div>
          {hovered && (
            <div style={{ position: 'absolute' as const, top: '50%', left: '50%', transform: 'translate(-50%, -50%)', opacity: 0.9 }}>
              <Image src="/images/arobaselogo.png" alt="Arobasedzair" width={60} height={60} style={{ objectFit: 'contain', filter: 'brightness(0) invert(1)' }} />
            </div>
          )}
        </div>
        <div style={{ padding: '14px', flex: 1, display: 'flex', flexDirection: 'column' as const, justifyContent: 'space-between' }}>
          <h3 style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: '14px', fontWeight: 700, color: '#e0e8e0', lineHeight: 1.3, margin: '0 0 8px', textTransform: 'uppercase' as const, display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical' as const, overflow: 'hidden' }}>{article.titre}</h3>
          <span style={{ fontSize: '11px', color: '#4a6a5a' }}>
            {article.publisheddate ? new Date(article.publisheddate).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long' }) : ''}
          </span>
        </div>
      </div>
    </Link>
  );
}