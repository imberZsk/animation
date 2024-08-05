export const metadata = {
  title: 'fade in',
  description: 'fade in 动画',
  metadataBase: new URL(`${process.env.REAL_WEBSITE_URL}`),
  twitter: {
    card: 'summary_large_image',
    site: process.env.REAL_WEBSITE_URL,
    images: {
      url: `/animations/fade-in.png`,
      width: 1280,
      height: 640,
      alt: 'fade-in',
      type: 'image/png'
    }
  },
  openGraph: {
    type: 'website',
    images: `/animations/fade-in.png`
  }
}

const Layout = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>
}

export default Layout
