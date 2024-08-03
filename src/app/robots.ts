import { MetadataRoute } from 'next'

// 如果有国际化，可以通过robots动态让搜索引擎爬取对应的页面
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/'
    },
    sitemap: 'https://imber-animation.netlify.app/sitemap.xml'
  }
}
