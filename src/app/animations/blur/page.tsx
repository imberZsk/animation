import BlurTextFramer from '../components/BlurText-Framer'
import BlurTextGsap from '../components/BlurText-Gsap'
import { AnimationSourceStatic } from '@/components/ui/animation-source-static'

// 页面源码
const PAGE_CODE = `import BlurTextFramer from '../components/BlurText-Framer'
import BlurTextGsap from '../components/BlurText-Gsap'

const BlurTextPage = () => {
  return (
    <div className="relative flex h-full flex-col gap-4">
      {}
      

      {/* Framer Motion 卡片 */}
      <div className="relative flex flex-1 flex-col justify-center rounded border border-gray-700 bg-gray-900/50 p-6">
        <h3 className="absolute top-10 left-10 mb-2 text-sm font-medium text-gray-300">Framer Motion</h3>

        <BlurTextFramer
          text="seize the day"
          delay={150}
          animateBy="words"
          direction="top"
          // onAnimationComplete={() => {}}
          className="inline-block text-center text-4xl font-bold"
        />
      </div>

      {/* GSAP 卡片 */}
      <div className="relative flex flex-1 flex-col justify-center rounded border border-gray-700 bg-gray-900/50 p-6">
        <h3 className="absolute top-10 left-10 mb-2 text-sm font-medium text-gray-300">GSAP</h3>

        <BlurTextGsap
          text="seize the day"
          delay={50}
          animateBy="words"
          direction="top"
          ease="none"
          className="text-center text-4xl font-bold"
        />
      </div>
    </div>
  )
}

export default BlurTextPage`

// BlurText-Framer.tsx 源码
const COMPONENT_CODE_0 = `'use client'

import { motion } from 'framer-motion'
import { useRef, useMemo } from 'react'

// 定义动画状态的类型
interface AnimationState {
  filter?: string
  opacity?: number
  y?: number
  [key: string]: any
}

// 定义组件props的类型
interface BlurTextProps {
  text?: string
  delay?: number
  className?: string
  animateBy?: 'words' | 'characters'
  direction?: 'top' | 'bottom'
  threshold?: number
  rootMargin?: string
  animationFrom?: AnimationState
  animationTo?: AnimationState[]
  easing?: (t: number) => number
  onAnimationComplete?: () => void
  stepDuration?: number
}

const buildKeyframes = (from: AnimationState, steps: AnimationState[]) => {
  const keys = new Set([...Object.keys(from), ...steps.flatMap((s) => Object.keys(s))])

  const keyframes: Record<string, any[]> = {}
  keys.forEach((k) => {
    keyframes[k] = [from[k], ...steps.map((s) => s[k])]
  })
  return keyframes
}

const BlurTextFramer = ({
  text = '',
  delay = 200,
  className = '',
  animateBy = 'words',
  direction = 'top',
  threshold = 0.1,
  rootMargin = '0px',
  animationFrom,
  animationTo,
  easing = (t: number) => t,
  onAnimationComplete,
  stepDuration = 0.35
}: BlurTextProps) => {
  const elements = animateBy === 'words' ? text.split(' ') : text.split('')
  const ref = useRef<HTMLParagraphElement>(null)

  const defaultFrom = useMemo(
    () =>
      direction === 'top' ? { filter: 'blur(10px)', opacity: 0, y: -50 } : { filter: 'blur(10px)', opacity: 0, y: 50 },
    [direction]
  )

  const defaultTo = useMemo(
    () => [
      {
        filter: 'blur(5px)',
        opacity: 0.5,
        y: direction === 'top' ? 5 : -5
      },
      { filter: 'blur(0px)', opacity: 1, y: 0 }
    ],
    [direction]
  )

  const fromSnapshot = animationFrom ?? defaultFrom
  const toSnapshots = animationTo ?? defaultTo

  // 3
  const stepCount = toSnapshots.length + 1

  // 0.7
  const totalDuration = stepDuration * (stepCount - 1)

  // 均匀分布动画
  const times = Array.from({ length: stepCount }, (_, i) => (stepCount === 1 ? 0 : i / (stepCount - 1)))

  return (
    <p ref={ref} className={\`blur-text \${className} flex flex-wrap\`}>
      {elements.map((segment, index) => {
        const animateKeyframes = buildKeyframes(fromSnapshot, toSnapshots)

        const spanTransition = {
          duration: totalDuration,
          times,
          delay: (index * delay) / 1000,
          ease: easing
        }

        return (
          <motion.span
            className="inline-block will-change-[transform,filter,opacity]"
            key={index}
            initial={fromSnapshot}
            animate={animateKeyframes}
            transition={spanTransition}
            onAnimationComplete={index === elements.length - 1 ? onAnimationComplete : undefined}
          >
            {segment === ' ' ? '\\u00A0' : segment}
            {animateBy === 'words' && index < elements.length - 1 && '\\u00A0'}
          </motion.span>
        )
      })}
    </p>
  )
}

export default BlurTextFramer
`

// BlurText-Gsap.tsx 源码
const COMPONENT_CODE_1 = `'use client'

import React, { useRef } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { SplitText } from 'gsap/SplitText'

// 注册SplitText插件
gsap.registerPlugin(SplitText)

interface BlurTextGsapProps {
  text?: string
  children?: React.ReactNode
  delay?: number
  className?: string
  animateBy?: 'words' | 'chars'
  direction?: 'top' | 'bottom'
  onAnimationComplete?: () => void
  ease?: string
}

const BlurTextGsap = ({
  text = '',
  children,
  delay = 50, // 默认更快的delay，像React Spring版本
  className = '',
  animateBy = 'words',
  direction = 'top',
  onAnimationComplete,
  ease = 'none' // 使用linear ease让动画更匀速
}: BlurTextGsapProps) => {
  const containerRef = useRef<HTMLParagraphElement>(null)
  const splitRef = useRef<SplitText | null>(null)

  useGSAP(() => {
    if (!containerRef.current) return

    // 使用SplitText拆分文字
    splitRef.current = new SplitText(containerRef.current, {
      type: animateBy
    })

    const elements = splitRef.current[animateBy] as HTMLElement[]

    // 设置初始状态 - 更接近React Spring版本
    gsap.set(elements, {
      filter: 'blur(10px)',
      opacity: 0,
      y: 0, // 移除y轴移动，更专注于模糊效果
      willChange: 'transform, filter, opacity'
    })

    // 创建时间线动画
    const tl = gsap.timeline({
      onComplete: onAnimationComplete
    })

    // 第一阶段：从完全模糊到半模糊
    tl.to(elements, {
      filter: 'blur(5px)',
      opacity: 0.5,
      y: 0,
      stagger: {
        amount: (elements.length * delay) / 1000, // 使用amount而不是each来控制总时间
        ease: 'none' // stagger也使用linear
      },
      ease: ease
    }).to(elements, {
      filter: 'blur(0px)',
      opacity: 1,
      stagger: {
        amount: (elements.length * delay) / 1000,
        ease: 'none'
      },
      ease: ease
    })

    return () => {
      // 清理SplitText实例
      splitRef.current?.revert()
    }
  }, [text, children, delay, animateBy, direction, onAnimationComplete, ease])

  return (
    <p ref={containerRef} className={\`\${className}\`}>
      {children || text}
    </p>
  )
}

export default BlurTextGsap
`

const BlurTextPage = () => {
  return (
    <div className="relative flex h-screen flex-col gap-4">
      {/* 源码查看按钮 */}
      <AnimationSourceStatic
        pageCode={PAGE_CODE}
        pageFilename="page.tsx"
        componentCodes={[
          {
            content: COMPONENT_CODE_0,
            filename: 'BlurText-Framer.tsx'
          },
          {
            content: COMPONENT_CODE_1,
            filename: 'BlurText-Gsap.tsx'
          }
        ]}
      />

      {/* Framer Motion 卡片 */}
      <div className="relative flex flex-1 flex-col justify-center rounded border border-gray-700 bg-gray-900/50 p-6">
        <h3 className="absolute top-10 left-10 mb-2 text-sm font-medium text-gray-300">Framer Motion</h3>

        <BlurTextFramer
          text="seize the day"
          delay={150}
          animateBy="words"
          direction="top"
          // onAnimationComplete={() => {}}
          className="inline-block text-center text-4xl font-bold"
        />
      </div>

      {/* GSAP 卡片 */}
      <div className="relative flex flex-1 flex-col justify-center rounded border border-gray-700 bg-gray-900/50 p-6">
        <h3 className="absolute top-10 left-10 mb-2 text-sm font-medium text-gray-300">GSAP</h3>

        <BlurTextGsap
          text="seize the day"
          delay={50}
          animateBy="words"
          direction="top"
          ease="none"
          className="text-center text-4xl font-bold"
        />
      </div>
    </div>
  )
}

export default BlurTextPage
