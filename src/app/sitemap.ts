import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://imber.top',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1
    }
  ]
}
