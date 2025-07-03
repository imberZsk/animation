import { Suspense } from 'react'
import AnimationsSidebar from '@/components/animations-sidebar'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <AnimationsSidebar>
      <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
    </AnimationsSidebar>
  )
}

export default Layout
