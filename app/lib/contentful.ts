import { createClient } from 'contentful';

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID!,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
});

export async function getAllArticles() {
  const entries = await client.getEntries({
    content_type: 'article',
  });

  return entries.items.map((item: any) => ({
    titre: item.fields.titre as string,
    slug: item.fields.slug as string,
    content: item.fields.content,
    coverImage: item.fields.coverImage
      ? { url: 'https:' + (item.fields.coverImage as any).fields.file.url }
      : { url: '' },
    publisheddate: item.fields.publisheddate as string,
    category: item.fields.category as string,
  }));
}

export async function getArticleBySlug(slug: string) {
  const entries = await client.getEntries({
    content_type: 'article',
    limit: 100,
  });

  console.log('Slug cherché:', slug);
  console.log('Slugs disponibles:', entries.items.map((i: any) => i.fields.slug));

  const item = entries.items.find((item: any) => item.fields.slug === slug) as any;
  if (!item) return null;

  return {
    titre: item.fields.titre,
    slug: item.fields.slug,
    content: item.fields.content,
    coverImage: item.fields.coverImage
      ? { url: 'https:' + (item.fields.coverImage as any).fields.file.url }
      : { url: '' },
    publisheddate: item.fields.publisheddate,
    category: item.fields.category,
  };
}