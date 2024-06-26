import type { Metadata } from 'next'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import GsapPlugin from '@/components/gsap-plugin'
// GoogleTagManager
import { GoogleAnalytics } from '@next/third-parties/google'

export const metadata: Metadata = {
  title: 'imber | animation',
  description: 'Generated by create next app'
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
