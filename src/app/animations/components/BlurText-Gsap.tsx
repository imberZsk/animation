'use client'

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
    <p ref={containerRef} className={`${className}`}>
      {children || text}
    </p>
  )
}

export default BlurTextGsap
