export const metadata = {
  title: 'pin1',
  description: 'pin1 动画',
  metadataBase: new URL(`${process.env.REAL_WEBSITE_URL}`),
  twitter: {
    card: 'summary_large_image',
    site: process.env.REAL_WEBSITE_URL,
    images: {
      url: `/animations/pin1.png`,
      width: 1280,
      height: 640,
      alt: 'pin1',
      type: 'image/png'
    }
  },
  openGraph: {
    type: 'website',
    images: `/animations/pin1.png`
  }
}

const Layout = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>
}

export default Layout
