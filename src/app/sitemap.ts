import { MetadataRoute } from 'next';
import { locales } from '@/i18n/config';
import { articlesData } from '@/data/articles';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://neuewege-gmbh.at';
  const routes = ['', '/about', '/services', '/events', '/partners', '/articles', '/contact'];

  const sitemapEntries: MetadataRoute.Sitemap = [];

  // Static pages for each locale
  for (const locale of locales) {
    for (const route of routes) {
      sitemapEntries.push({
        url: `${baseUrl}/${locale}${route}`,
        lastModified: new Date('2026-10-24'),
        changeFrequency: route === '' ? 'weekly' : 'monthly',
        priority: route === '' ? 1.0 : 0.8,
      });
    }

    // Dynamic articles for each locale
    for (const article of articlesData) {
      sitemapEntries.push({
        url: `${baseUrl}/${locale}/articles/${article.slug}`,
        lastModified: new Date(article.date),
        changeFrequency: 'monthly',
        priority: 0.7,
      });
    }
  }

  return sitemapEntries;
}
