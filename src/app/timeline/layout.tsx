import { Suspense } from 'react'
import AnimationsSidebar from '@/components/animations-sidebar'

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
  return (
    <AnimationsSidebar>
      <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
    </AnimationsSidebar>
  )
}

export default Layout
