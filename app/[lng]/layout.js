import './style.css'
import Sidebar from '@/components/Sidebar'
import { i18n } from '@/i18n-config.js'

const { locales } = i18n

export async function generateStaticParams() {
  return locales.map((lng) => ({ lng }))
}

export default async function RootLayout({ children, params: { lng } }) {
  return (
    <html lang={lng}>
      <body>
        <div className="container">
          <div className="main">
            <Sidebar lng={lng} />
            <section className="col note-viewer">{children}</section>
          </div>
        </div>
      </body>
    </html>
  )
}
