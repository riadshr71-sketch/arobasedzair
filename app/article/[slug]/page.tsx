import Navbar from '../../components/Navbar';
import { getArticleBySlug } from '../../lib/contentful';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { notFound } from 'next/navigation';
import Image from 'next/image';

export const dynamic = 'force-dynamic';

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);
  if (!article) return notFound();

  const articleUrl = `https://arobasedzair.com/article/${slug}`;
  const titre = encodeURIComponent(article.titre);
  const url = encodeURIComponent(articleUrl);

  return (
    <main style={{ background: '#080c08', minHeight: '100vh', color: '#f0f5f0' }}>
      <Navbar active="" />

      <div style={{ maxWidth: '820px', margin: '0 auto', padding: '48px 20px' }}>
        <a href="/" style={{ display: 'inline-block', color: '#026f5c', fontSize: '12px', fontWeight: 700, textDecoration: 'none', textTransform: 'uppercase' as const, letterSpacing: '1px', marginBottom: '28px' }}>
          ← Retour
        </a>
        <br />
        <span style={{ background: '#026f5c', color: '#f0f5f0', fontSize: '10px', fontWeight: 700, padding: '4px 10px', borderRadius: '2px', textTransform: 'uppercase' as const, letterSpacing: '1px' }}>
          {article.category}
        </span>
        <h1 style={{ fontFamily: 'Druk, Georgia, serif', fontSize: '52px', lineHeight: 1, margin: '18px 0', letterSpacing: '1px', textTransform: 'uppercase' as const }}>
          {article.titre}
        </h1>
        <p style={{ fontSize: '13px', color: '#4a6a5a', marginBottom: '32px' }}>
          {article.publisheddate ? new Date(article.publisheddate).toLocaleDateString('fr-FR', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' }) : ''}
        </p>
        {article.coverImage.url && (
          <div style={{ position: 'relative' as const, width: '100%', height: '440px', borderRadius: '8px', overflow: 'hidden', marginBottom: '40px' }}>
            <Image src={article.coverImage.url} alt={article.titre} fill style={{ objectFit: 'cover', objectPosition: 'center top' }} priority />
          </div>
        )}
        <div style={{ fontSize: '16px', lineHeight: 1.9, color: '#c0d0c0' }}>
          {documentToReactComponents(article.content)}
        </div>

        <div style={{ marginTop: '48px', paddingTop: '32px', borderTop: '1px solid #0d2a1f' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
            <div style={{ width: '4px', height: '20px', background: '#026f5c' }}></div>
            <span style={{ fontFamily: 'Druk, Georgia, serif', fontSize: '16px', textTransform: 'uppercase' as const, letterSpacing: '1px' }}>Partager l'article</span>
          </div>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' as const }}>
            <a href={`https://twitter.com/intent/tweet?text=${titre}&url=${url}&via=arobasedzair2`} target="_blank" style={{ display: 'flex', alignItems: 'center', gap: '8px', background: '#0a0f0a', border: '1px solid #0d2a1f', borderRadius: '4px', padding: '10px 16px', textDecoration: 'none', color: '#f0f5f0', fontSize: '12px', fontWeight: 700 }}>
              <Image src="/images/twitter-x-logo-png-9.png" alt="X" width={16} height={16} style={{ objectFit: 'contain' }} />
              X
            </a>
            <a href={`https://www.facebook.com/sharer/sharer.php?u=${url}`} target="_blank" style={{ display: 'flex', alignItems: 'center', gap: '8px', background: '#0a0f0a', border: '1px solid #0d2a1f', borderRadius: '4px', padding: '10px 16px', textDecoration: 'none', color: '#f0f5f0', fontSize: '12px', fontWeight: 700 }}>
              <Image src="/images/facebook.png" alt="Facebook" width={16} height={16} style={{ objectFit: 'contain' }} />
              Facebook
            </a>
            <a href={`https://www.instagram.com/arobasedzair_`} target="_blank" style={{ display: 'flex', alignItems: 'center', gap: '8px', background: '#0a0f0a', border: '1px solid #0d2a1f', borderRadius: '4px', padding: '10px 16px', textDecoration: 'none', color: '#f0f5f0', fontSize: '12px', fontWeight: 700 }}>
              <Image src="/images/instagram.png" alt="Instagram" width={16} height={16} style={{ objectFit: 'contain' }} />
              Instagram
            </a>
            <a href={`whatsapp://send?text=${titre}%20-%20${url}`} target="_blank" style={{ display: 'flex', alignItems: 'center', gap: '8px', background: '#0a0f0a', border: '1px solid #0d2a1f', borderRadius: '4px', padding: '10px 16px', textDecoration: 'none', color: '#f0f5f0', fontSize: '12px', fontWeight: 700 }}>
              <Image src="/images/whatsapp.png" alt="WhatsApp" width={16} height={16} style={{ objectFit: 'contain' }} />
              WhatsApp
            </a>
            <a href={`https://t.me/share/url?url=${url}&text=${titre}`} target="_blank" style={{ display: 'flex', alignItems: 'center', gap: '8px', background: '#0a0f0a', border: '1px solid #0d2a1f', borderRadius: '4px', padding: '10px 16px', textDecoration: 'none', color: '#f0f5f0', fontSize: '12px', fontWeight: 700 }}>
              <Image src="/images/telegram.png" alt="Telegram" width={16} height={16} style={{ objectFit: 'contain' }} />
              Telegram
            </a>
          </div>
        </div>
      </div>

      <div style={{ background: '#060a06', borderTop: '1px solid #0d2a1f', padding: '20px 40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '60px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <Image src="/images/arobaselogo.png" alt="Arobasedzair" width={32} height={32} style={{ objectFit: 'contain' }} />
          <span style={{ fontFamily: 'Druk, Georgia, serif', fontSize: '14px', letterSpacing: '2px', color: '#026f5c', textTransform: 'uppercase' as const }}>Arobasedzair</span>
        </div>
        <div style={{ display: 'flex', gap: '20px', fontSize: '11px' }}>
          <a href="/mentions-legales" style={{ color: '#3a5a4a', textDecoration: 'none' }}>Mentions légales</a>
          <a href="/contact" style={{ color: '#3a5a4a', textDecoration: 'none' }}>Contact</a>
          <a href="/a-propos" style={{ color: '#3a5a4a', textDecoration: 'none' }}>À Propos</a>
        </div>
        <span style={{ fontSize: '11px', color: '#3a5a4a' }}>© 2026 · Média 100% Football Algérien</span>
      </div>
    </main>
  );
}