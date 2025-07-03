'use client'

import { postsConfig } from '../const'
import Link from 'next/link'
import { Calendar, Eye } from 'lucide-react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useEffect } from 'react'
import { AnimationSource } from '@/components/ui/animation-source'

gsap.registerPlugin(ScrollTrigger)

const StaggerGsapPage = () => {
  useEffect(() => {
    gsap.from('.stagger-item', {
      opacity: 0,
      y: 15,
      stagger: 0.1,
      duration: 0.4
    })
  }, [])

  return (
    <div className="relative flex h-full flex-col gap-4">
      {/* 源码查看按钮 */}
      <AnimationSource
        currentPagePath="app/animations/stagger/gsap/page.tsx"
        componentPaths={['app/animations/stagger/const.ts']}
      />

      <div className="relative flex flex-1 flex-col justify-center rounded border border-gray-700 bg-gray-900/50 p-6">
        <div className="mx-auto max-w-4xl">
          {postsConfig.map((post, index) => (
            <div key={index} className="stagger-item">
              <Link
                href={'https://imber.netlify.app' + post.href}
                target="_blank"
                className="group block space-y-2 rounded-md border border-zinc-200/50 bg-white/80 p-4 transition-all hover:border-zinc-300 hover:bg-zinc-50/90 hover:shadow-sm dark:border-zinc-800/50 dark:bg-zinc-950/80 dark:hover:border-zinc-700 dark:hover:bg-zinc-900/90"
              >
                <h2 className="text-lg font-medium text-zinc-800 transition-colors group-hover:text-zinc-900 dark:text-zinc-200 dark:group-hover:text-white">
                  {post.title}
                </h2>

                <div className="flex flex-wrap items-center gap-3 text-xs text-zinc-500 dark:text-zinc-500">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    <span>{post.date}</span>
                  </div>

                  <div className="flex items-center gap-1">
                    <Eye className="h-3 w-3" />
                    <span>{post.views}</span>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default StaggerGsapPage
