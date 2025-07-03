'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { Home } from 'lucide-react'

interface NavigationTab {
  id: string
  name: string
  path: string
}

interface NavigationSection {
  title: string
  tabs: NavigationTab[]
}

const navigationSections: NavigationSection[] = [
  {
    title: 'Text Animations',
    tabs: [
      { id: 'split', name: 'Split Text', path: '/animations/text/split' },
      { id: 'blur', name: 'Blur Text', path: '/animations/text/blur' },
      { id: 'add', name: 'Add Text', path: '/animations/text/add' },
      { id: 'shiny', name: 'Shiny Text', path: '/animations/text/shiny' }
    ]
  },
  {
    title: 'Timeline Animations',
    tabs: [
      { id: 'timeline-framer', name: 'Framer Motion', path: '/timeline/framer' },
      { id: 'timeline-gsap', name: 'GSAP', path: '/timeline/gsap' }
    ]
  },
  {
    title: 'Exit Animations',
    tabs: [
      { id: 'exit-framer', name: 'Framer Motion', path: '/exit/framer' },
      { id: 'exit-gsap', name: 'GSAP', path: '/exit/gsap' }
    ]
  }
]

interface AnimationsSidebarProps {
  children: React.ReactNode
}

export default function AnimationsSidebar({ children }: AnimationsSidebarProps) {
  const pathname = usePathname()

  return (
    <div className="flex h-screen bg-black/80">
      {/* 左侧菜单栏 */}
      <div className="relative w-60 overflow-y-auto border-r border-gray-700 bg-black/80 p-3 pt-6">
        <h2 className="mb-6 text-sm font-medium text-gray-200">Animations</h2>
        <nav className="space-y-4">
          {navigationSections.map((section) => (
            <div key={section.title}>
              <h3 className="mb-2 text-xs font-medium tracking-wider text-gray-400 uppercase">{section.title}</h3>
              <div className="ml-2 space-y-1.5">
                {section.tabs.map((tab) => {
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
              </div>
            </div>
          ))}
        </nav>

        {/* 返回首页按钮 */}
        <Link
          href="/"
          className="absolute bottom-10 left-1/2 mt-4 flex w-fit -translate-x-1/2 items-center gap-2 rounded-lg border border-gray-700 bg-gray-900 px-4 py-2.5 text-sm text-gray-300 transition-all duration-200 hover:border-gray-600 hover:bg-gray-800 hover:text-white"
        >
          <Home className="h-4 w-4" />
          <span>返回首页</span>
        </Link>
      </div>

      {/* 右侧内容区域 */}
      <div className="flex-1 bg-black/80 p-6">{children}</div>
    </div>
  )
}
