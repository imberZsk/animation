'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { Home } from 'lucide-react'
import { navigationSections } from '@/app/const'

interface AnimationsSidebarProps {
  children: React.ReactNode
}

export default function AnimationsSidebar({ children }: AnimationsSidebarProps) {
  const pathname = usePathname()

  return (
    <div className="flex h-screen bg-black/80">
      {/* 左侧菜单栏 */}
      <div className="fixed top-0 left-0 z-10 h-screen w-60 overflow-y-auto border-r border-gray-700 bg-black p-3 pt-6">
        <h2 className="mb-6 text-sm font-medium text-gray-200">Animations</h2>
        <nav className="space-y-4">
          <div className="ml-2 space-y-1.5">
            {navigationSections.map((tab, index) => {
              const isActive = pathname === tab.path
              return (
                <Link
                  key={tab.id + index}
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
      <div className="h-fit min-h-screen flex-1 bg-black/80 pl-60">{children}</div>
    </div>
  )
}
