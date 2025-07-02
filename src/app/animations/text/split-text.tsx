'use client'

import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { SplitText } from 'gsap/SplitText'
import { motion } from 'framer-motion'
import { useRef } from 'react'

gsap.registerPlugin(SplitText)

const SplitTextComponent = () => {
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

      // @ts-ignore
      let split2 = SplitText.create('.split-text2', { type: 'chars,words' })

      gsap.from(split2.chars, {
        autoAlpha: 0,
        yPercent: 'random([-100,100])',
        rotation: 'random([-30,30])',
        ease: 'back.out',
        // repeat: -1,
        // yoyo: true,
        stagger: {
          amount: 0.5,
          from: 'random'
        },
        onComplete: () => {
          split2.revert()
        }
      })
    }
  })

  return (
    <div className="flex h-full flex-col gap-4">
      {/* Framer Motion 卡片 */}
      <div className="relative flex flex-1 flex-col justify-center rounded border border-gray-700 bg-gray-900/50 p-6">
        <h3 className="absolute top-10 left-10 mb-2 text-sm font-medium text-gray-300">Framer Motion</h3>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="text-center text-4xl font-bold"
        >
          Framer Motion 需要手动切割文本，参考 BlurText 组件
        </motion.div>
      </div>

      {/* GSAP 卡片 */}
      <div className="relative flex flex-1 flex-col justify-center rounded border border-gray-700 bg-gray-900/50 p-6">
        <h3 className="absolute top-10 left-10 mb-2 text-sm font-medium text-gray-300">GSAP</h3>
        <div className="split-text mb-20 text-center text-4xl font-bold" ref={gsapTextRef}>
          hello world
        </div>

        <div className="split-text2 text-center text-4xl font-bold">break the world and make it better</div>
      </div>
    </div>
  )
}

export default SplitTextComponent
