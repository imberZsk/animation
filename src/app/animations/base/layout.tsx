import { Suspense } from 'react'

export const metadata = {
  title: '基础动画',
  description: '基础动画',
  metadataBase: new URL(`${process.env.REAL_WEBSITE_URL}`),
  twitter: {
    card: 'summary_large_image',
    site: process.env.REAL_WEBSITE_URL,
    images: {
      url: `/animations/base.png`,
      width: 1280,
      height: 640,
      alt: 'base',
      type: 'image/png'
    }
  },
  openGraph: {
    type: 'website',
    images: `/animations/base.png`
  }
}

const Layout = ({ children }: { children: React.ReactNode }) => {
  return <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
}

export default Layout
