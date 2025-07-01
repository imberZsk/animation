import { Suspense } from 'react'

export const metadata = {
  title: '时间轴动画',
  description: '时间轴动画',
  metadataBase: new URL(`${process.env.REAL_WEBSITE_URL}`),
  twitter: {
    card: 'summary_large_image',
    site: process.env.REAL_WEBSITE_URL
  },
  openGraph: {
    type: 'website'
  }
}

const Layout = ({ children }: { children: React.ReactNode }) => {
  return <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
}

export default Layout
