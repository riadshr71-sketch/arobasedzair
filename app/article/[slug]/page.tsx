import Navbar from '../../components/Navbar';
import { getArticleBySlug, getAllArticles } from '../../lib/contentful';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import ReadingProgress from '../../components/ReadingProgress';
import Link from 'next/link';
import Comments from '../../components/Comments';

export const revalidate = 60;

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);
  if (!article) return {};

  const imageUrl = article.coverImage.url
    ? (article.coverImage.url.startsWith('//') ? 'https:' + article.coverImage.url : article.coverImage.url)
    : 'https://arobasedzair.com/images/arobaselogo.png';

  return {
    title: article.titre,
    description: article.titre,
    openGraph: {
      title: article.titre,
      description: article.titre,
      url: `https://arobasedzair.com/article/${slug}`,
      images: [{ url: imageUrl, width: 1200, height: 630 }],
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: article.titre,
      description: article.titre,
      images: [imageUrl],
    },
  };
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);
  if (!article) return notFound();

  const tousLesArticles = await getAllArticles();
  const similaires = tousLesArticles
    .filter(a => a.slug !== slug && a.category === article.category)
    .slice(0, 3);

  const articleUrl = `https://arobasedzair.com/article/${slug}`;
  const titre = encodeURIComponent(article.titre);
  const url = encodeURIComponent(articleUrl);

  return (
    <main style={{ background: '#080c08', minHeight: '100vh', color: '#f0f5f0' }}>
      <ReadingProgress />
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
          {article.publisheddate ? new Date(article.publisheddate).toLocaleDateString('fr-FR', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' }) + ' à ' + new Date(article.publisheddate).toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' }) : ''}
        </p>
        {article.coverImage.url && (
          <div style={{ position: 'relative' as const, width: '100%', height: '440px', borderRadius: '8px', overflow: 'hidden', marginBottom: '40px' }}>
            <Image src={article.coverImage.url} alt={article.titre} fill style={{ objectFit: 'cover', objectPosition: 'center top' }} priority />
          </div>
        )}
        <div style={{ fontSize: '16px', lineHeight: 1.9, color: '#c0d0c0', display: 'flex', flexDirection: 'column' as const, gap: '16px' }}>
  {documentToReactComponents(article.content, {
    renderNode: {
        'heading-3': (node, children) => (
      <h3 style={{ fontFamily: 'Druk, Georgia, serif', fontSize: '24px', color: '#026f5c', textTransform: 'uppercase' as const, letterSpacing: '1px', margin: '8px 0' }}>{children}</h3>
    ),
      'heading-4': (node, children) => (
        <h4 style={{ fontFamily: 'Druk, Georgia, serif', fontSize: '20px', color: '#f0f5f0', textTransform: 'uppercase' as const, letterSpacing: '1px', margin: '8px 0' }}>{children}</h4>
      ),
      'heading-5': (node, children) => (
        <h5 style={{ fontFamily: 'Druk, Georgia, serif', fontSize: '16px', color: '#026f5c', textTransform: 'uppercase' as const, letterSpacing: '1px', margin: '6px 0' }}>{children}</h5>
      ),
    }
  })}
</div>
<Comments slug={slug} titre={article.titre} />
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

      {similaires.length > 0 && (
        <div style={{ background: '#060a06', borderTop: '1px solid #0d2a1f', padding: '48px 40px' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '28px' }}>
              <div style={{ width: '4px', height: '24px', background: '#026f5c' }}></div>
              <h2 style={{ fontFamily: 'Druk, Georgia, serif', fontSize: '22px', margin: 0, letterSpacing: '1px', textTransform: 'uppercase' as const }}>Articles similaires</h2>
            </div>
            <div className="similaires-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
              {similaires.map(a => (
                <Link key={a.slug} href={`/article/${a.slug}`} style={{ textDecoration: 'none' }}>
                  <div style={{ background: '#0a0f0a', border: '1px solid #0d2a1f', borderRadius: '6px', overflow: 'hidden' }}>
                    {a.coverImage.url && (
                      <div style={{ position: 'relative' as const, width: '100%', height: '180px', overflow: 'hidden' }}>
                        <Image src={a.coverImage.url} alt={a.titre} fill style={{ objectFit: 'cover', objectPosition: 'center top' }} />
                      </div>
                    )}
                    <div style={{ padding: '14px' }}>
                      <div style={{ display: 'inline-block', background: '#026f5c', color: '#f0f5f0', fontSize: '8px', fontWeight: 700, padding: '2px 7px', borderRadius: '2px', textTransform: 'uppercase' as const, letterSpacing: '1px', marginBottom: '8px' }}>
                        {a.category}
                      </div>
                      <div style={{ fontFamily: 'Druk, Georgia, serif', fontSize: '13px', color: '#f0f5f0', lineHeight: 1.3, textTransform: 'uppercase' as const, marginBottom: '6px' }}>
                        {a.titre}
                      </div>
                      <div style={{ fontSize: '11px', color: '#4a6a5a' }}>
                        {a.publisheddate ? new Date(a.publisheddate).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long' }) : ''}
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}

      <div className="footer">
  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
    <Image src="/images/arobaselogo.png" alt="Arobasedzair" width={32} height={32} style={{ objectFit: 'contain' }} />
    <span style={{ fontFamily: 'Druk, Georgia, serif', fontSize: '14px', letterSpacing: '2px', color: '#026f5c', textTransform: 'uppercase' as const }}>Arobasedzair</span>
  </div>
  <div style={{ display: 'flex', gap: '16px', fontSize: '11px', flexWrap: 'wrap' as const, justifyContent: 'center' }}>
    <a href="/mentions-legales" style={{ color: '#3a5a4a', textDecoration: 'none' }}>Mentions légales</a>
    <a href="/contact" style={{ color: '#3a5a4a', textDecoration: 'none' }}>Contact</a>
    <a href="/a-propos" style={{ color: '#3a5a4a', textDecoration: 'none' }}>À Propos</a>
  </div>
  <div style={{ fontSize: '11px', color: '#3a5a4a' }}>© 2026 · Média 100% Football Algérien</div>
</div>
    </main>
  );
}