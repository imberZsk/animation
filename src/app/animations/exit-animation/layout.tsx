import { Suspense } from 'react'

export const metadata = {
  title: '退出动画',
  description: '退出动画',
  metadataBase: new URL(`${process.env.REAL_WEBSITE_URL}`),
  twitter: {
    card: 'summary_large_image',
    site: process.env.REAL_WEBSITE_URL,
    images: {
      url: `/animations/exit-animation.png`,
      width: 1280,
      height: 640,
      alt: 'exit-animation',
      type: 'image/png'
    }
  },
  openGraph: {
    type: 'website',
    images: `/animations/exit-animation.png`
  }
}

const Layout = ({ children }: { children: React.ReactNode }) => {
  return <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
}

export default Layout
