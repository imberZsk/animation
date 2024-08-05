export const metadata = {
  title: 'pin2',
  description: 'pin2 动画',
  metadataBase: new URL(`${process.env.REAL_WEBSITE_URL}`),
  twitter: {
    card: 'summary_large_image',
    site: process.env.REAL_WEBSITE_URL,
    images: {
      url: `/animations/pin2.png`,
      width: 1280,
      height: 640,
      alt: 'pin2',
      type: 'image/png'
    }
  },
  openGraph: {
    type: 'website',
    images: `/animations/pin2.png`
  }
}

const Layout = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>
}

export default Layout
