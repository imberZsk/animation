'use client'
import { useGSAP } from '@gsap/react'
import { useRef } from 'react'
import { gsap } from 'gsap'
export default function FadeIn() {
  const titleRef = useRef<HTMLDivElement>(null)
  const subTitleRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    const t1 = gsap.timeline()

    t1.from(subTitleRef.current, {
      duration: 0.8,
      scale: 5
    })

    t1.from(titleRef.current, {
      opacity: 0,
      y: 30,
      duration: 0.5
    })

    t1.from('.item', {
      stagger: 0.1,
      opacity: 0,
      y: 10
    })
  })
  return (
    <article className="bg-stone-900 text-white w-screen overflow-x-hidden">
      <section className="h-screen pt-10 md:pt-20">
        <div
          className="text-center font-bold text-3xl mb-4 md:mb-10 md:text-6xl"
          ref={titleRef}
        >
          将进酒 · 君不见
        </div>
        <div
          className="text-center font-bold text-md md:text-2xl mb-2 md:mb-8 text-gray-300"
          ref={subTitleRef}
        >
          【作者】李白 【朝代】唐
        </div>
        <div className="text-center font-bold text-sm leading-6 md:leading-10 item md:text-xl">
          君不见，黄河之水天上来，奔流到海不复回。
        </div>
        <div className="text-center font-bold text-sm leading-6 md:leading-10 item md:text-xl">
          君不见，高堂明镜悲白发，朝如青丝暮成雪。
        </div>
        <div className="text-center font-bold text-sm leading-6 md:leading-10 item md:text-xl">
          人生得意须尽欢，莫使金樽空对月。
        </div>
        <div className="text-center font-bold text-sm leading-6 md:leading-10 item md:text-xl">
          天生我材必有用，千金散尽还复来。
        </div>
        <div className="text-center font-bold text-sm leading-6 md:leading-10 item md:text-xl">
          烹羊宰牛且为乐，会须一饮三百杯。
        </div>
        <div className="text-center font-bold text-sm leading-6 md:leading-10 item md:text-xl">
          岑夫子，丹丘生，将进酒，杯莫停。
        </div>
        <div className="text-center font-bold text-sm leading-6 md:leading-10 item md:text-xl">
          与君歌一曲，请君为我倾耳听。
        </div>
        <div className="text-center font-bold text-sm leading-6 md:leading-10 item md:text-xl">
          钟鼓馔玉不足贵，但愿长醉不愿醒。
        </div>
        <div className="text-center font-bold text-sm leading-6 md:leading-10 item md:text-xl">
          古来圣贤皆寂寞，惟有饮者留其名。
        </div>
        <div className="text-center font-bold text-sm leading-6 md:leading-10 item md:text-xl">
          陈王昔时宴平乐，斗酒十千恣欢谑。
        </div>
        <div className="text-center font-bold text-sm leading-6 md:leading-10 item md:text-xl">
          主人何为言少钱，径须沽取对君酌。
        </div>
        <div className="text-center font-bold text-sm leading-6 md:leading-10 item md:text-xl">
          五花马，千金裘，呼儿将出换美酒，与尔同销万古愁。
        </div>
      </section>
    </article>
  )
}
