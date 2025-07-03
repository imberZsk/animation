import AddTextFramer from '@/app/animations/components/AddText-Framer'
import AddTextGsap from '@/app/animations/components/AddText-Gsap'
import { AnimationSourceStatic } from '@/components/ui/animation-source-static'

// 页面源码
const PAGE_CODE = `import AddTextFramer from '@/app/animations/components/AddText-Framer'
import AddTextGsap from '@/app/animations/components/AddText-Gsap'

const AddTextPage = () => {
  return (
    <div className="relative flex h-full flex-col gap-4">
      {}
      

      {/* Framer Motion 卡片 */}
      <div className="relative flex flex-1 flex-col justify-center rounded border border-gray-700 bg-gray-900/50 p-6">
        <h3 className="absolute top-10 left-10 mb-2 text-sm font-medium text-gray-300">Framer Motion</h3>
        <AddTextFramer from={0} to={100} className="text-center text-4xl" />
      </div>

      {/* GSAP 卡片 */}
      <div className="relative flex flex-1 flex-col justify-center rounded border border-gray-700 bg-gray-900/50 p-6">
        <h3 className="absolute top-10 left-10 mb-2 text-sm font-medium text-gray-300">GSAP</h3>
        <AddTextGsap from={0} to={100} className="text-center text-4xl" />
      </div>
    </div>
  )
}

export default AddTextPage`

// AddText-Framer.tsx 源码
const COMPONENT_CODE_0 = `'use client'

import { motion, useMotionValue, useTransform, animate } from 'framer-motion'
import { useEffect } from 'react'

const AddTextFramer = ({ from, to, className }: { from: number; to: number; className: string }) => {
  // 创建一个动画值，初始值为 from 参数
  const count = useMotionValue(from)
  //  将动画值转换为整数，确保显示的数字没有小数点
  const rounded = useTransform(count, (latest) => Math.round(latest))

  useEffect(() => {
    // 创建一个动画，将 count 从 from 动画到 to
    const animation = animate(count, to, {
      duration: 1,
      // 先加速后减速
      ease: 'easeInOut'
    })

    // 清理函数
    return animation.stop
  }, [count, to])

  return (
    <motion.h1 transition={{ duration: 1, ease: 'easeInOut' }} className={className}>
      <motion.span>{rounded}</motion.span>
    </motion.h1>
  )
}

export default AddTextFramer
`

// AddText-Gsap.tsx 源码
const COMPONENT_CODE_1 = `'use client'

import React, { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

const AddTextGsap = ({ from, to, className }: { from: number; to: number; className: string }) => {
  const ref = useRef<HTMLHeadingElement>(null)
  useGSAP(() => {
    gsap.to(ref.current, {
      textContent: to,
      duration: 1,
      ease: 'power2.inOut',
      roundProps: 'textContent'
    })
  })

  return (
    <h1 ref={ref} className={className}>
      {from}
    </h1>
  )
}

export default AddTextGsap
`

const AddTextPage = () => {
  return (
    <div className="relative flex h-full flex-col gap-4">
      {/* 源码查看按钮 */}
      <AnimationSourceStatic
        pageCode={PAGE_CODE}
        pageFilename="page.tsx"
        componentCodes={[
    {
      content: COMPONENT_CODE_0,
      filename: 'AddText-Framer.tsx'
    },
    {
      content: COMPONENT_CODE_1,
      filename: 'AddText-Gsap.tsx'
    }
  ]}
      />

      {/* Framer Motion 卡片 */}
      <div className="relative flex flex-1 flex-col justify-center rounded border border-gray-700 bg-gray-900/50 p-6">
        <h3 className="absolute top-10 left-10 mb-2 text-sm font-medium text-gray-300">Framer Motion</h3>
        <AddTextFramer from={0} to={100} className="text-center text-4xl" />
      </div>

      {/* GSAP 卡片 */}
      <div className="relative flex flex-1 flex-col justify-center rounded border border-gray-700 bg-gray-900/50 p-6">
        <h3 className="absolute top-10 left-10 mb-2 text-sm font-medium text-gray-300">GSAP</h3>
        <AddTextGsap from={0} to={100} className="text-center text-4xl" />
      </div>
    </div>
  )
}

export default AddTextPage
