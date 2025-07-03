'use client'

import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { SplitText } from 'gsap/SplitText'
import { useRef } from 'react'
import SplitTextGsap from '../components/SplitText-Gsap'
import { AnimationSourceStatic } from '@/components/ui/animation-source-static'

gsap.registerPlugin(SplitText)

// 页面源码
const PAGE_CODE = `'use client'

import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { SplitText } from 'gsap/SplitText'
import { useRef } from 'react'
import SplitTextGsap from '../components/SplitText-Gsap'

gsap.registerPlugin(SplitText)

const SplitTextPage = () => {
  const gsapTextRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    if (gsapTextRef.current) {
      // 文档是create，但是有报错，可能ts问题，暂时不用
      // let split =  SplitText.create('.split-text', { type: 'words, chars' })
      let split = new SplitText('.split-text', { type: 'words, chars' })

      gsap.from(split.chars, {
        duration: 1,
        y: '50%',
        autoAlpha: 0,
        stagger: 0.05,
        onComplete: () => {
          split.revert()
        }
      })
    }
  })

  return (
    <div className="relative flex h-full flex-col gap-4">
      {/* GSAP 卡片 */}
      <div className="relative flex flex-1 flex-col justify-center rounded border border-gray-700 bg-gray-900/50 p-6">
        <h3 className="absolute top-10 left-10 mb-2 text-sm font-medium text-gray-300">GSAP</h3>
        <div className="split-text mb-20 text-center text-4xl font-bold" ref={gsapTextRef}>
          hello world
        </div>

        <SplitTextGsap text="break the world and make it better" className="text-center text-4xl font-bold" />
      </div>
    </div>
  )
}

export default SplitTextPage`

// 组件源码
const COMPONENT_CODE = `'use client'

import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { SplitText } from 'gsap/SplitText'
import { useRef } from 'react'

gsap.registerPlugin(SplitText)

interface SplitTextGsapProps {
  text: string
  className?: string
}

const SplitTextGsap = ({ text, className }: SplitTextGsapProps) => {
  const gsapTextRef = useRef<HTMLDivElement>(null)
  useGSAP(() => {
    if (gsapTextRef.current) {
      let split = new SplitText(gsapTextRef.current, { type: 'chars,words' })

      gsap.from(split.chars, {
        autoAlpha: 0,
        yPercent: 'random([-100,100])',
        rotation: 'random([-30,30])',
        ease: 'back.out',
        stagger: {
          amount: 0.5,
          from: 'random'
        },
        onComplete: () => {
          split.revert()
        }
      })
    }
  })

  return (
    <div className={className} ref={gsapTextRef}>
      {text}
    </div>
  )
}

export default SplitTextGsap`

const SplitTextPage = () => {
  const gsapTextRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    if (gsapTextRef.current) {
      // 文档是create，但是有报错，可能ts问题，暂时不用
      // let split =  SplitText.create('.split-text', { type: 'words, chars' })
      let split = new SplitText('.split-text', { type: 'words, chars' })

      gsap.from(split.chars, {
        duration: 1,
        y: '50%',
        autoAlpha: 0,
        stagger: 0.05,
        onComplete: () => {
          split.revert()
        }
      })
    }
  })

  return (
    <div className="relative flex h-full flex-col gap-4">
      {/* 源码查看按钮 */}
      <AnimationSourceStatic
        pageCode={PAGE_CODE}
        pageFilename="page.tsx"
        componentCodes={[
          {
            content: COMPONENT_CODE,
            filename: 'SplitText-Gsap.tsx'
          }
        ]}
      />

      {/* GSAP 卡片 */}
      <div className="relative flex flex-1 flex-col justify-center rounded border border-gray-700 bg-gray-900/50 p-6">
        <h3 className="absolute top-10 left-10 mb-2 text-sm font-medium text-gray-300">GSAP</h3>
        <div className="split-text mb-20 text-center text-4xl font-bold" ref={gsapTextRef}>
          hello world
        </div>

        <SplitTextGsap text="break the world and make it better" className="text-center text-4xl font-bold" />
      </div>
    </div>
  )
}

export default SplitTextPage
