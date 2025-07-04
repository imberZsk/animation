'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Moon, Sun } from 'lucide-react'
import { AnimationSourceStatic } from '@/components/ui/animation-source-static'

// 页面源码
const PAGE_CODE = `'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Moon, Sun } from 'lucide-react'

const Layout = () => {
  const [isDark, setIsDark] = useState(false)
  const toggleTheme = () => setIsDark(!isDark)

  return (
    <div
      className={\`relative flex h-full items-center justify-center transition-colors duration-300 \${
        isDark ? 'bg-gray-900' : 'bg-[#f2f4f5]'
      }\`}
    >
      {}
      
      <button
        className={\`box-content flex h-[60px] w-[120px] cursor-pointer rounded-[60px] p-[8px] transition-colors duration-300 \${
          // 这里的切换，通过使用 layout 可以实现过渡效果
          isDark ? 'justify-end bg-gray-700 shadow-inner' : 'justify-start bg-blue-200 shadow-inner'
        }\`}
        onClick={toggleTheme}
      >
        <motion.div
          className={\`flex h-[60px] w-[60px] items-center justify-center rounded-full text-2xl transition-colors duration-300 \${
            isDark ? 'bg-gray-800 text-yellow-200 shadow-lg' : 'bg-yellow-400 text-orange-600 shadow-lg'
          }\`}
          // 自动处理布局变化
          layout
          transition={{
            // 指定动画类型为弹簧动画
            type: 'spring',
            // 设置动画的视觉感知持续时间为 0.2 秒
            visualDuration: 0.2,
            // 控制弹簧的弹跳强度
            bounce: 0.2
          }}
        >
          {isDark ? <Moon className="h-6 w-6" /> : <Sun className="h-6 w-6" />}
        </motion.div>
      </button>

      {/* 主题状态指示 */}
      <div
        className={\`ml-8 text-lg font-medium transition-colors duration-300 \${isDark ? 'text-white' : 'text-gray-800'}\`}
      >
        {isDark ? '深色模式' : '浅色模式'}
      </div>
    </div>
  )
}

export default Layout`

const Layout = () => {
  const [isDark, setIsDark] = useState(false)
  const toggleTheme = () => setIsDark(!isDark)

  return (
    <div
      className={`relative flex h-screen items-center justify-center transition-colors duration-300 ${
        isDark ? 'bg-gray-900' : 'bg-[#f2f4f5]'
      }`}
    >
      {/* 源码查看按钮 */}
      <AnimationSourceStatic pageCode={PAGE_CODE} pageFilename="page.tsx" componentCodes={[]} />
      <button
        className={`box-content flex h-[60px] w-[120px] cursor-pointer rounded-[60px] p-[8px] transition-colors duration-300 ${
          // 这里的切换，通过使用 layout 可以实现过渡效果
          isDark ? 'justify-end bg-gray-700 shadow-inner' : 'justify-start bg-blue-200 shadow-inner'
        }`}
        onClick={toggleTheme}
      >
        <motion.div
          className={`flex h-[60px] w-[60px] items-center justify-center rounded-full text-2xl transition-colors duration-300 ${
            isDark ? 'bg-gray-800 text-yellow-200 shadow-lg' : 'bg-yellow-400 text-orange-600 shadow-lg'
          }`}
          // 自动处理布局变化
          layout
          transition={{
            // 指定动画类型为弹簧动画
            type: 'spring',
            // 设置动画的视觉感知持续时间为 0.2 秒
            visualDuration: 0.2,
            // 控制弹簧的弹跳强度
            bounce: 0.2
          }}
        >
          {isDark ? <Moon className="h-6 w-6" /> : <Sun className="h-6 w-6" />}
        </motion.div>
      </button>

      {/* 主题状态指示 */}
      <div
        className={`ml-8 text-lg font-medium transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-800'}`}
      >
        {isDark ? '深色模式' : '浅色模式'}
      </div>
    </div>
  )
}

export default Layout
