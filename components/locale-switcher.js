'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function LocaleSwitcher({ lang }) {
  const pathName = usePathname()

  const redirectedPathName = () => {
    if (!pathName) return '/'
    const segments = pathName.split('/')
    const change = lang === 'zh' || !lang ? 'en' : 'zh'
    segments[1] = change
    return segments.join('/')
  }

  return (
    <Link
      href={redirectedPathName()}
      className="ml-[20px] flex cursor-pointer items-center"
    >
      语言切换
    </Link>
  )
}
