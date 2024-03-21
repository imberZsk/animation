import './style.css'
import Sidebar from '@/components/Sidebar'
import { i18n } from '@/i18n-config.js'
import Header from '@/components/Header'
const { locales } = i18n

export async function generateStaticParams() {
  return locales.map((lng) => ({ lng }))
}

export default async function RootLayout({ children, params: { lng } }) {
  return (
    <html lang={lng}>
      <body>
        <div className="container">
          <Header />
          <div className="main">
            <Sidebar lng={lng} />
            <section className="col note-viewer">{children}</section>
          </div>
        </div>
      </body>
    </html>
  )
}
