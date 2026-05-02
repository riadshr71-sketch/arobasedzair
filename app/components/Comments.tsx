'use client';
import { DiscussionEmbed } from 'disqus-react';

export default function Comments({ slug, titre }: { slug: string; titre: string }) {
  return (
    <div style={{ marginTop: '48px', paddingTop: '32px', borderTop: '1px solid #0d2a1f' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
        <div style={{ width: '4px', height: '20px', background: '#026f5c' }}></div>
        <span style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: '16px', textTransform: 'uppercase' as const, letterSpacing: '1px' }}>Commentaires</span>
      </div>
      <DiscussionEmbed
        shortname='arobasedzair-com'
        config={{
          url: `https://arobasedzair.com/article/${slug}`,
          identifier: slug,
          title: titre,
          language: 'fr',
        }}
      />
    </div>
  );
}