'use client'

import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { data } from '../const'
import Image from 'next/image'
import { useRef } from 'react'
import { AnimationSourceStatic } from '@/components/ui/animation-source-static'

gsap.registerPlugin(ScrollTrigger)

// 页面源码
const PAGE_CODE = `'use client'

import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { data } from '../const'
import Image from 'next/image'
import { useRef } from 'react'

gsap.registerPlugin(ScrollTrigger)

const Page = () => {
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    const t1 = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        markers: true,
        start: 'center bottom',
        end: 'top top',
        scrub: 1,
        toggleActions: 'play none none reverse'
      }
    })

    t1.to(containerRef.current, {
      right: '0'
    })
  })

  return (
    <div className="h-[250vh] overflow-x-hidden">
      {}
      
      <div className="flex-center h-[80vh] text-2xl font-bold">向下翻页</div>
      <div className="relative mx-auto w-[1280px]">
        <div ref={containerRef} className="absolute flex w-[2000px] gap-4">
          {data.map((item) => (
            <div key={item.url} className="relative h-100 w-100" style={{ width: item.w, height: item.h }}>
              <Image src={item.url} alt="image" fill sizes="100vw" className="rounded-md object-cover" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Page`

const Page = () => {
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    const t1 = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        markers: true,
        start: 'center bottom',
        end: 'top top',
        scrub: 1,
        toggleActions: 'play none none reverse'
      }
    })

    t1.to(containerRef.current, {
      right: '0'
    })
  })

  return (
    <div className="h-[250vh] overflow-x-hidden">
      {/* 源码查看按钮 */}
      <AnimationSourceStatic pageCode={PAGE_CODE} pageFilename="page.tsx" componentCodes={[]} />
      <div className="flex-center h-[80vh] text-2xl font-bold">向下滚动</div>
      <div className="relative mx-auto w-[1280px]">
        <div ref={containerRef} className="absolute flex w-[2000px] gap-4">
          {data.map((item) => (
            <div key={item.url} className="relative h-100 w-100" style={{ width: item.w, height: item.h }}>
              <Image src={item.url} alt="image" fill sizes="100vw" className="rounded-md object-cover" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Page
