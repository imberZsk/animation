'use client'

import { useGSAP } from '@gsap/react'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import { useRef } from 'react'

const SplitText = () => {
  const gsapTextRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    gsap.to(gsapTextRef.current, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: 'power2.inOut'
    })
  })

  return (
    <div className="flex h-full flex-col gap-4">
      {/* Framer Motion 卡片 */}
      <div className="relative flex flex-1 flex-col justify-center rounded border border-gray-700 bg-gray-900/50 p-6">
        <h3 className="absolute top-10 left-10 mb-2 text-sm font-medium text-gray-300">Framer Motion</h3>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="text-center text-4xl font-bold"
        >
          Split Text
        </motion.div>
      </div>

      {/* GSAP 卡片 */}
      <div className="relative flex flex-1 flex-col justify-center rounded border border-gray-700 bg-gray-900/50 p-6">
        <h3 className="absolute top-10 left-10 mb-2 text-sm font-medium text-gray-300">GSAP</h3>
        <div className="text-center text-4xl font-bold" ref={gsapTextRef}>
          Split Text
        </div>
      </div>
    </div>
  )
}

export default SplitText
