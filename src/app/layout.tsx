import type { Metadata } from 'next'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import GsapPlugin from '@/components/gsap-plugin'
// GoogleTagManager
import { GoogleAnalytics } from '@next/third-parties/google'

export const metadata: Metadata = {
  title: {
    default: 'home | imber-animation',
    template: '%s | imber-animation'
  },
  description: 'web 动画作品展示',
  metadataBase: new URL(`${process.env.REAL_WEBSITE_URL}`),
  twitter: {
    card: 'summary_large_image',
    site: process.env.REAL_WEBSITE_URL,
    creator: '@imberZsk',
    images: {
      url: `/avatar.jpeg`,
      width: 1280,
      height: 640,
      alt: 'imber-animation',
      type: 'image/jpeg'
    }
  },
  openGraph: {
    type: 'website',
    images: '/opengraph-image.jpeg'
  }
}

export default function RootLayout({
  children,
  modal
}: Readonly<{
  children: React.ReactNode
  modal: React.ReactNode
}>) {
  return (
    <html lang="zh" suppressHydrationWarning>
      <link rel="canonical" href="https://imber.top"></link>
      {/* <GoogleTagManager gtmId="GTM-NJ7PWQ3B" /> */}
      <body suppressHydrationWarning>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
          {modal}
          {children}
        </ThemeProvider>
        <GoogleAnalytics gaId="G-EZLJ1D6L6Y" />
      </body>
      <GsapPlugin></GsapPlugin>
    </html>
  )
}
