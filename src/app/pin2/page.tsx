'use client'

import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'

const Page = () => {
  useGSAP(() => {
    const EnterFn = () => {
      gsap.set('.section1', {
        position: 'relative',
        zIndex: 1
      })

      gsap.set('.section2', {
        position: 'fixed',
        zIndex: 0,
        bottom: 0
      })
    }

    const LeaveFn = () => {
      gsap.set('.section2', {
        position: 'static'
      })

      gsap.set('.section1', {
        position: 'static'
      })
    }

    gsap.timeline({
      scrollTrigger: {
        trigger: '.section2',
        start: 'top bottom',
        end: `+=${window.innerHeight}`,
        toggleActions: 'play none none reverse',
        scrub: 1,
        onEnter: EnterFn,
        onLeave: LeaveFn,
        onEnterBack: EnterFn,
        onLeaveBack: LeaveFn
      }
    })

    const EnterFn2 = () => {
      gsap.set('.section2', {
        position: 'relative',
        zIndex: 1
      })

      gsap.set('.section3', {
        position: 'fixed',
        bottom: 0
      })
    }

    const LeaveFn2 = () => {
      gsap.set('.section3', {
        position: 'static'
      })
    }

    gsap.timeline({
      scrollTrigger: {
        trigger: '.section3',
        start: 'top bottom',
        end: `+=${window.innerHeight}`,
        toggleActions: 'play none none reverse',
        scrub: 1,
        onEnter: EnterFn2,
        onLeave: LeaveFn2,
        onEnterBack: EnterFn2,
        onLeaveBack: LeaveFn2
      }
    })
  })

  return (
    <div>
      <div className="section1 flex-center h-screen bg-pink-200 text-3xl text-black">第一屏</div>
      <div className="section2-wrap">
        <div className="section2 flex-center h-screen w-full bg-cyan-200 text-3xl text-black">第二屏</div>
      </div>
      <div className="section3-wrap">
        <div className="section3 flex-center h-screen w-full bg-purple-200 text-3xl text-black">第三屏</div>
      </div>
    </div>
  )
}

export default Page
