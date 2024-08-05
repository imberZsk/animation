'use client'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { DATA } from './const'
const { section1, section2 } = DATA

export default function FadeIn() {
  useGSAP(() => {
    const t1 = gsap.timeline()

    t1.from('.title1', {
      duration: 0.8,
      scale: 5,
      opacity: 0
    })

    t1.from('.desc1', {
      opacity: 0,
      y: 30,
      duration: 0.5
    })

    t1.from('.item', {
      stagger: 0.1,
      opacity: 0,
      y: 10
    }).addLabel('spin')

    t1.from(
      '.title2',
      {
        x: 200,
        opacity: 0,
        ease: 'back.out(1.7)',
        duration: 0.5
      },
      'spin'
    )

    t1.from(
      '.desc2',
      {
        opacity: 0,
        x: 200,
        ease: 'back.out(1.7)',
        duration: 0.5
      },
      'spin+=0.1'
    )

    t1.from('.item2', {
      stagger: 0.1,
      opacity: 0,
      y: 10
    })
  })

  return (
    <article className="w-screen overflow-x-hidden bg-stone-900 text-center text-white">
      <section>
        <div className="pt-10 md:pt-20">
          <div className="title1 mb-4 text-3xl font-bold md:mb-10 md:text-6xl">{section1.title}</div>
          <div className="desc1 text-md mb-2 text-center font-bold text-gray-300 md:mb-8 md:text-2xl">
            {section1.desc}
          </div>
          {section1.content.map((item, index) => {
            return (
              <div key={index} className="item text-center text-sm font-bold leading-6 md:text-xl md:leading-10">
                {item}
              </div>
            )
          })}
        </div>
        <div className="pt-10">
          <div className="title2 mb-4 text-3xl font-bold md:mb-10 md:text-6xl">{section2.title}</div>
          <div className="desc2 text-md mb-2 text-center font-bold text-gray-300 md:mb-8 md:text-2xl">
            {section2.desc}
          </div>
          {section2.content.map((item, index) => {
            return (
              <div key={index} className="item2 text-center text-sm font-bold leading-6 md:text-xl md:leading-10">
                {item}
              </div>
            )
          })}
        </div>
      </section>
    </article>
  )
}
