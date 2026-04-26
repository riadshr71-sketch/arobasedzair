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

export default function ArticleCard({ article }: { article: Article }) {
  const [hovered, setHovered] = useState(false);

  return (
    <Link href={`/article/${article.slug}`} style={{ textDecoration: 'none' }}>
      <div
        style={{ background: '#0a0f0a', border: hovered ? '1px solid #026f5c44' : '1px solid #0d2a1f', borderRadius: '6px', overflow: 'hidden', transition: 'border-color 0.3s' }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div style={{ position: 'relative' as const, height: '190px', overflow: 'hidden' }}>
          {article.coverImage.url && (
            <Image
              src={article.coverImage.url}
              alt={article.titre}
              fill
              style={{ objectFit: 'cover', objectPosition: 'center top', transform: hovered ? 'scale(1.08)' : 'scale(1)', transition: 'transform 0.4s ease' }}
            />
          )}
          <div style={{ position: 'absolute' as const, top: '10px', left: '10px', background: '#026f5c', color: '#f0f5f0', fontSize: '9px', fontWeight: 700, padding: '3px 8px', borderRadius: '2px', textTransform: 'uppercase' as const, letterSpacing: '1px' }}>
            {article.category}
          </div>
          {hovered && (
            <div style={{ position: 'absolute' as const, top: '50%', left: '50%', transform: 'translate(-50%, -50%)', opacity: 0.9 }}>
              <Image src="/images/arobaselogo.png" alt="Arobasedzair" width={60} height={60} style={{ objectFit: 'contain', filter: 'brightness(0) invert(1)' }} />
            </div>
          )}
        </div>
        <div style={{ padding: '14px' }}>
          <h3 style={{ fontFamily: 'Druk, Georgia, serif', fontSize: '14px', fontWeight: 700, color: '#e0e8e0', lineHeight: 1.3, margin: '0 0 8px', textTransform: 'uppercase' as const }}>{article.titre}</h3>
          <span style={{ fontSize: '11px', color: '#4a6a5a' }}>
            {article.publisheddate ? new Date(article.publisheddate).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long' }) : ''}
          </span>
        </div>
      </div>
    </Link>
  );
}