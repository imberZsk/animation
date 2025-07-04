'use client'

import React from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import Image from 'next/image'
import { AnimationSourceStatic } from '@/components/ui/animation-source-static'

// 页面源码
const PAGE_CODE = `'use client'

import React from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import Image from 'next/image'

const Gsap = () => {
  useGSAP(() => {
    const t1 = gsap.timeline()

    t1.from('.title2', {
      duration: 0.8,
      scale: 5,
      autoAlpha: 0
    })

    t1.from('.title1', {
      y: 30,
      duration: 0.5,
      autoAlpha: 0
    })

    t1.from('.bg1', {
      duration: 1,
      x: '10%',
      autoAlpha: 0
    })
  })

  return (
    <section className="relative min-h-full overflow-x-hidden bg-black pt-52 text-center text-white">
      {}
      
      <div className="absolute top-32 left-1/2 z-10 -translate-x-1/2">
        <Image
          src="https://fms.res.meizu.com/dms/2023/03/29/221febae-e651-410a-903f-29e0bd051ac7.png"
          alt="gsap"
          width={437}
          height={30}
          className="title1 z-10 mx-auto mb-10"
        />

        <Image
          src="https://fms.res.meizu.com/dms/2023/03/29/399cc024-ff70-4cf2-8011-5b86e6313b1f.png"
          alt="gsap"
          width={548}
          height={80}
          className="title2 z-10"
        />
      </div>

      <Image
        src="https://fms.res.meizu.com/dms/2023/05/24/a8ee0203-5636-4b61-b6bf-7e66b5f671b5.jpg"
        alt="gsap"
        width={2560}
        height={1111}
        className="bg1"
      />
    </section>
  )
}

export default Gsap`

const Gsap = () => {
  useGSAP(() => {
    const t1 = gsap.timeline()

    t1.from('.title2', {
      duration: 0.8,
      scale: 5,
      autoAlpha: 0
    })

    t1.from('.title1', {
      y: 30,
      duration: 0.5,
      autoAlpha: 0
    })

    t1.from('.bg1', {
      duration: 1,
      x: '10%',
      autoAlpha: 0
    })
  })

  return (
    <section className="relative min-h-full overflow-x-hidden bg-black pt-52 text-center text-white">
      {/* 源码查看按钮 */}
      <AnimationSourceStatic
        pageCode={PAGE_CODE}
        pageFilename="page.tsx"
        componentCodes={[]}
      />
      <div className="absolute top-32 left-1/2 z-10 -translate-x-1/2">
        <Image
          src="https://fms.res.meizu.com/dms/2023/03/29/221febae-e651-410a-903f-29e0bd051ac7.png"
          alt="gsap"
          width={437}
          height={30}
          className="title1 z-10 mx-auto mb-10"
        />

        <Image
          src="https://fms.res.meizu.com/dms/2023/03/29/399cc024-ff70-4cf2-8011-5b86e6313b1f.png"
          alt="gsap"
          width={548}
          height={80}
          className="title2 z-10"
        />
      </div>

      <Image
        src="https://fms.res.meizu.com/dms/2023/05/24/a8ee0203-5636-4b61-b6bf-7e66b5f671b5.jpg"
        alt="gsap"
        width={2560}
        height={1111}
        className="bg1"
      />
    </section>
  )
}

export default Gsap
