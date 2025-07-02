'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'

const tabs = [
  { id: 'split', name: 'Split Text', path: '/animations/text/split' },
  { id: 'blur', name: 'Blur Text', path: '/animations/text/blur' },
  { id: 'add', name: 'Add Text', path: '/animations/text/add' },
  { id: 'shiny', name: 'Shiny Text', path: '/animations/text/shiny' }
]

export default function TextAnimationsLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  return (
    <div className="flex h-screen bg-black/80">
      {/* 左侧菜单栏 */}
      <div className="w-60 border-r border-gray-700 bg-black/80 p-3 pt-8">
        <h2 className="mb-6 text-sm font-medium text-gray-200">Text Animations</h2>
        <nav className="space-y-1.5">
          {tabs.map((tab) => {
            const isActive = pathname === tab.path
            return (
              <Link
                key={tab.id}
                href={tab.path}
                className={`block w-full cursor-pointer rounded px-3 py-1.5 text-left text-sm transition-colors ${
                  isActive
                    ? 'bg-gray-200 font-medium text-black'
                    : 'text-gray-400 hover:bg-gray-800 hover:text-gray-200'
                }`}
              >
                {tab.name}
              </Link>
            )
          })}
        </nav>
      </div>

      {/* 右侧内容区域 */}
      <div className="flex-1 bg-black/80 p-6">{children}</div>
    </div>
  )
}
