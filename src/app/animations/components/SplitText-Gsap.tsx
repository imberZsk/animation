'use client'

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
        // repeat: -1,
        // yoyo: true,
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
    <div className={`${className}`} ref={gsapTextRef}>
      {text}
    </div>
  )
}

export default SplitTextGsap
