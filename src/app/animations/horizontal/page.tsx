'use client'

import { cn } from '@/lib/utils'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

const commonCss = 'flex-center font-bold size-[400px] text-4xl shrink-0'

const Page = () => {
  useGSAP(() => {
    const t1 = gsap.timeline({
      scrollTrigger: {
        trigger: '#container',
        start: 'top top',
        end: `+=${window.innerHeight}`,
        pin: true,
        markers: true,
        scrub: 1
      }
    })

    t1.set('.box1', {
      visibility: 'visible'
    })

    t1.from('.box1', {
      height: window.innerHeight,
      width: window.innerWidth,
      transform: `translateX(calc(240px + 50vw))`
    })

    t1.to('#other-container', {
      x: 0
    })

    t1.to('#inner-container', {
      right: 0
    })
  })

  return (
    <div className="flex-center h-screen w-[calc(100vw-240px)] overflow-x-hidden text-white" id="container">
      <div id="inner" className="relative mx-auto flex h-100 w-[1280px] items-center">
        <div className="absolute top-1/2 flex -translate-y-1/2" id="inner-container">
          <div className={cn(commonCss, 'box1 invisible bg-gray-500')}>box1</div>
          <div id="other-container" className="flex" style={{ transform: 'translateX(100vw)' }}>
            <div className={cn(commonCss, 'box2 relative z-10 bg-gray-600')}>Box2</div>
            <div className={cn(commonCss, 'box3 relative z-10 bg-gray-700')}>Box3</div>
            <div className={cn(commonCss, 'box4 relative z-10 bg-gray-800')}>Box4</div>
            <div className={cn(commonCss, 'box5 relative z-10 bg-gray-900')}>Box5</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page
