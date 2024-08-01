import { globby } from 'globby'

function addPage(page: string) {
  const path = page.replace('src/app', '').replace('.tsx', '').replace('.mdx', '').replace('/page', '')
  return path
}

export default async function sitemap() {
  const pages = await globby([
    'src/app/**/*.tsx',
    '!src/app/_*.js',
    '!src/app/{sitemap,layout}.{js,jsx,ts,tsx}',
    '!src/app/api',
    '!src/app/@modal/**'
  ])

  const routes = pages.map((page: string) => ({
    url: `${process.env.WEBSITE_URL}${addPage(page)}`,
    // ISO标准
    lastModified: new Date().toISOString()
  }))

  return [...routes]
}
