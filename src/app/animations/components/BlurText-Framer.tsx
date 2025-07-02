'use client'

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
    <p ref={ref} className={`blur-text ${className} flex flex-wrap`}>
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
            {segment === ' ' ? '\u00A0' : segment}
            {animateBy === 'words' && index < elements.length - 1 && '\u00A0'}
          </motion.span>
        )
      })}
    </p>
  )
}

export default BlurTextFramer
