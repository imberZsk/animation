'use client'

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

export default function FadeIn() {
  useGSAP(() => {
    gsap.fromTo(
      '.title1',
      {
        opacity: 0
      },
      {
        opacity: 1,
        y: '0%',
        duration: 1,
        ease: 'power2.out'
      }
    )
    const t1 = gsap.timeline({
      scrollTrigger: {
        trigger: '.item1',
        start: 'center bottom',
        end: 'center bottom',
        toggleActions: 'play none reverse none'
      }
    })

    t1.addLabel('spin')

    t1.from(
      '.item1',
      {
        opacity: 0,
        x: '-10%'
      },
      'spin'
    )

    t1.from(
      '.item2',
      {
        opacity: 0,
        x: '10%'
      },
      'spin'
    )

    const t2 = gsap.timeline({
      scrollTrigger: {
        trigger: '.item3',
        start: 'center bottom',
        end: 'center bottom',
        toggleActions: 'play none reverse none'
      }
    })

    t2.addLabel('spin')

    t2.from(
      '.item3',
      {
        opacity: 0,
        x: '-10%'
      },
      'spin'
    )

    t2.from(
      '.item4',
      {
        opacity: 0,
        x: '10%'
      },
      'spin'
    )

    const t3 = gsap.timeline({
      scrollTrigger: {
        trigger: '.item5',
        start: 'center bottom',
        end: 'center bottom',
        toggleActions: 'play none reverse none'
      }
    })

    t3.from('.item5', {
      opacity: 0,
      y: 20,
      stagger: 0.1
    })
  })
  return (
    <article className="bg-stone-900 text-white w-screen overflow-x-hidden text-center">
      <section className="text-6xl font-bold flex justify-center items-center h-screen title1">
        第一屏
      </section>
      <section className="flex justify-center items-center">
        <div className="grid grid-cols-2 grid-rows-2 w-[90vw] h-[90vw] lg:w-[1280px] lg:h-[800px] gap-2 lg:gap-4">
          <div className="bg-[#252525] h-full item1"></div>
          <div className="bg-[#252525] h-full item2"></div>
          <div className="bg-[#252525] h-full item3"></div>
          <div className="bg-[#252525] h-full item4"></div>
        </div>
      </section>
      <section className="flex justify-center items-center mt-20 mb-60">
        <div className="grid w-[90vw] h-[45vw] lg:w-[1280px] lg:h-[400px] grid-cols-3 grid-rows-2 gap-2">
          {Array(6)
            .fill(0)
            .map((item, index) => {
              return <div key={index} className="bg-[#252525] item5"></div>
            })}
        </div>
      </section>
    </article>
  )
}
