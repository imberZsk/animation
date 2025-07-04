'use client'

import { motion } from 'framer-motion'
import { postsConfig } from '../const'
import Link from 'next/link'
import { Calendar, Eye } from 'lucide-react'
import { AnimationSourceStatic } from '@/components/ui/animation-source-static'

// 页面源码
const PAGE_CODE = `'use client'

import { motion } from 'framer-motion'
import { postsConfig } from '../const'
import Link from 'next/link'
import { Calendar, Eye } from 'lucide-react'

const StaggerFramerPage = () => {
  return (
    <div className="relative flex h-full flex-col gap-4">
      {}
      

      <div className="relative flex flex-1 flex-col justify-center rounded border border-gray-700 bg-gray-900/50 p-6">
        <div className="mx-auto max-w-4xl">
          {postsConfig.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
            >
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
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default StaggerFramerPage`

// const.ts 源码
const COMPONENT_CODE_0 = `export const postsConfig = [
  {
    title: '瀑布流 + 虚拟列表 实现博客画廊',
    href: '/posts/gallery',
    date: '2025-02-09',
    tags: ['博客'],
    views: 32
  },
  {
    title: 'AI 编辑器 Cursor 从基础功能到手写 MCP',
    href: '/posts/cursor-mcp',
    date: '2025-02-09',
    tags: ['ai'],
    views: 32
  },
  {
    title: '基于 Next MDX & Sandpack 的博客文章实现',
    href: '/posts/sandpack-mdx',
    date: '2025-02-09',
    tags: ['博客'],
    views: 32
  },
  {
    title: '用 Supabase PostgreSQL 构建和部署 Strapi CMS',
    href: '/posts/strapi-supabase',
    date: '2025-06-24',
    tags: ['Strapi', 'Supabase'],
    views: 32
  },
  {
    title: 'Framer Motion & GSAP 实现酷炫动画',
    href: '/posts/animate',
    date: '2025-02-09',
    tags: ['动画'],
    views: 32
  },
  {
    title: '基于 Tailwind 的响应式布局（含图片深入理解）',
    href: '/posts/responsive',
    date: '2025-02-09',
    tags: ['Tailwind'],
    views: 123
  },
  {
    title: '基于 Tailwind 的营销活动 H5 自适应布局',
    href: '/posts/adaptive',
    date: '2025-02-09',
    tags: ['Tailwind'],
    views: 123
  },
  {
    title: 'Web 安全：用 Nextjs 模拟 XSS & CSRF',
    href: '/posts/safe',
    date: '2025-02-09',
    tags: ['Nextjs'],
    views: 123
  }
]
`

const StaggerFramerPage = () => {
  return (
    <div className="relative flex h-screen flex-col gap-4">
      {/* 源码查看按钮 */}
      <AnimationSourceStatic
        pageCode={PAGE_CODE}
        pageFilename="page.tsx"
        componentCodes={[
          {
            content: COMPONENT_CODE_0,
            filename: 'const.ts'
          }
        ]}
      />

      <div className="relative flex flex-1 flex-col justify-center rounded border border-gray-700 bg-gray-900/50 p-6">
        <div className="mx-auto max-w-4xl">
          {postsConfig.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
            >
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
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default StaggerFramerPage
