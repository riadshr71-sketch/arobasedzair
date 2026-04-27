import { getAllArticles } from './lib/contentful';

export default async function sitemap() {
  const articles = await getAllArticles();

  const articleUrls = articles.map(article => ({
    url: `https://arobasedzair.com/article/${article.slug}`,
    lastModified: article.publisheddate ? new Date(article.publisheddate) : new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  return [
    { url: 'https://arobasedzair.com', lastModified: new Date(), changeFrequency: 'daily' as const, priority: 1 },
    { url: 'https://arobasedzair.com/actualites', lastModified: new Date(), changeFrequency: 'daily' as const, priority: 0.9 },
    { url: 'https://arobasedzair.com/galerie', lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: 'https://arobasedzair.com/a-propos', lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.5 },
    { url: 'https://arobasedzair.com/contact', lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.5 },
    ...articleUrls,
  ];
}