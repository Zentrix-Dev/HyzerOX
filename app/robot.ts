import { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/dashboard/'], // Protect internal routes
    },
    sitemap: 'https://hyzerox.com/sitemap.xml',
  }
}
