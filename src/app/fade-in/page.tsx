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
    <article className="bg-stone-900 text-white w-screen overflow-x-hidden text-center">
      <section>
        <div className="pt-10 md:pt-20">
          <div className="font-bold text-3xl mb-4 md:mb-10 md:text-6xl title1">
            {section1.title}
          </div>
          <div className="desc1 text-center font-bold text-md md:text-2xl mb-2 md:mb-8 text-gray-300">
            {section1.desc}
          </div>
          {section1.content.map((item, index) => {
            return (
              <div
                key={index}
                className="text-center font-bold text-sm leading-6 md:leading-10 item md:text-xl"
              >
                {item}
              </div>
            )
          })}
        </div>
        <div className="pt-10">
          <div className="font-bold text-3xl mb-4 md:mb-10 md:text-6xl title2">
            {section2.title}
          </div>
          <div className="text-center desc2 font-bold text-md md:text-2xl mb-2 md:mb-8 text-gray-300">
            {section2.desc}
          </div>
          {section2.content.map((item, index) => {
            return (
              <div
                key={index}
                className="text-center font-bold text-sm leading-6 md:leading-10 md:text-xl item2"
              >
                {item}
              </div>
            )
          })}
        </div>
      </section>
    </article>
  )
}
