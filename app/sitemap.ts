import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://hyzerox.com' // TODO: Update to actual production domain
  
  const routes = ['', '/products', '/pricing', '/about', '/contact', '/privacy', '/terms', '/cookies', '/legal'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  const products = ['vps', 'minecraft', 'discord-bots', 'game-servers'].map((product) => ({
    url: `${baseUrl}/products/${product}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }));
 
  return [...routes, ...products];
}
