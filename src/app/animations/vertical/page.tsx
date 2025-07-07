'use client'

import { cn } from '@/lib/utils'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

const commonCss = 'flex-center font-bold h-screen w-full text-4xl'

const Page = () => {
  useGSAP(() => {
    ScrollTrigger.create({
      trigger: '.box1',
      start: 'top top',
      end: `+=${window.innerHeight}`,
      pin: '.box1',
      markers: true,
      pinSpacing: false
      // anticipatePin: 1
    })

    ScrollTrigger.create({
      trigger: '.box2',
      start: 'top top',
      end: `+=${window.innerHeight}`,
      pin: '.box2',
      markers: true,
      pinSpacing: false
      // anticipatePin: 1
    })
  })

  return (
    <div className="text-white">
      <div className={cn(commonCss, 'box1 bg-gray-500')}>box1</div>
      <div className={cn(commonCss, 'box2 relative z-10 bg-gray-600')}>Box2</div>
      <div className={cn(commonCss, 'box3 relative z-10 bg-gray-700')}>Box3</div>
    </div>
  )
}

export default Page
