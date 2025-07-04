'use client'
import Image from 'next/image'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { data } from './const'
import { AnimationSourceStatic } from '@/components/ui/animation-source-static'

// 页面源码
const PAGE_CODE = `'use client'
import Image from 'next/image'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { data } from './const'

export default function Page() {
  useGSAP(() => {
    const t1 = gsap
      .timeline({
        scrollTrigger: {
          trigger: '.section-block',
          start: 'center center',
          end: '+=2000',
          toggleActions: 'play none reverse none',
          pin: true,
          scrub: 1,
          markers: true
        }
      })
      .addLabel('spin')

    t1.to(
      '.section-video ',
      {
        width: '50px',
        height: '50px',
        left: 23,
        top: 265
      },
      'spin'
    )

    t1.to(
      '.section-img',
      {
        autoAlpha: 1
      },
      'spin'
    )

    // 第一组气泡从右侧依次进入
    t1.to(['.bubble1', '.bubble2', '.bubble3'], {
      x: '0%',
      autoAlpha: 1,
      stagger: 0.5 // 每个元素间隔0.5秒
    })

    // 第二组气泡在第一组完成后从左侧依次进入
    t1.to(
      ['.bubble4', '.bubble5', '.bubble6'],
      {
        x: '0%',
        autoAlpha: 1,
        stagger: 0.5, // 每个元素间隔0.5秒
        duration: 0.6
      },
      '+=0.3'
    ) // 在上一个动画完成后延迟0.3秒开始
  })

  return (
    <div>
      <div className="h-[40vh]"></div>

      <section className="section overflow-x-hidden bg-black text-center text-white">
        <div className="section-block relative bottom-0 z-10 mx-auto flex h-[917px] w-[1280px] justify-between px-[100px]">
          <div className="flex flex-col items-end pt-[300px]">
            <div className="bubble1 mb-[32px] h-[47px] w-[163px]" style={{ opacity: 0, transform: 'translateX(10%)' }}>
              <Image alt="" className="h-full w-full object-cover" height={5120} src={data.node[0].img} width={5120} />
            </div>
            <div
              className="bubble2 mb-[114px] h-[149px] w-[352px]"
              style={{ opacity: 0, transform: 'translateX(10%)' }}
            >
              <Image alt="" className="h-full w-full object-cover" height={5120} src={data.node[1].img} width={5120} />
            </div>
            <div className="bubble3 h-[47px] w-[178px]" style={{ opacity: 0, transform: 'translateX(10%)' }}>
              <Image alt="" className="h-full w-full object-cover" height={5120} src={data.node[2].img} width={5120} />
            </div>
          </div>
          <div className="absolute bottom-[118px] left-[50%] h-[633px] w-[306px] translate-x-[-50%] overflow-x-hidden">
            <Image
              alt=""
              className="section-img h-full w-full object-cover"
              height={5120}
              src={data.bg}
              width={5120}
              style={{ opacity: 0 }}
            />
            <div
              className="section-video absolute overflow-hidden rounded-[50%]"
              style={{ width: '300px', height: '300px', left: '0px', top: '100px' }}
            >
              <video autoPlay className="h-full w-full" loop muted src={data.video}></video>
            </div>
          </div>
          <div className="pt-[60px]">
            <div className="bubble4 mb-[40px] h-[47px] w-[178px]" style={{ opacity: 0, transform: 'translateX(-10%)' }}>
              <Image alt="" className="h-full w-full object-cover" height={5120} src={data.node[3].img} width={5120} />
            </div>
            <div
              className="bubble5 mb-[122px] h-[297px] w-[352px]"
              style={{ opacity: 0, transform: 'translateX(-10%)' }}
            >
              <Image alt="" className="h-full w-full object-cover" height={5120} src={data.node[4].img} width={5120} />
            </div>
            <div className="bubble6 h-[47px] w-[167px]" style={{ opacity: 0, transform: 'translateX(-10%)' }}>
              <Image alt="" className="h-full w-full object-cover" height={5120} src={data.node[5].img} width={5120} />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}`

export default function Page() {
  useGSAP(() => {
    const t1 = gsap
      .timeline({
        scrollTrigger: {
          trigger: '.section-block',
          start: 'center center',
          end: '+=2000',
          toggleActions: 'play none reverse none',
          pin: true,
          scrub: 1,
          markers: true
        }
      })
      .addLabel('spin')

    t1.to(
      '.section-video ',
      {
        width: '50px',
        height: '50px',
        left: 23,
        top: 265
      },
      'spin'
    )

    t1.to(
      '.section-img',
      {
        autoAlpha: 1
      },
      'spin'
    )

    // 第一组气泡从右侧依次进入
    t1.to(['.bubble1', '.bubble2', '.bubble3'], {
      x: '0%',
      autoAlpha: 1,
      stagger: 0.5 // 每个元素间隔0.5秒
    })

    // 第二组气泡在第一组完成后从左侧依次进入
    t1.to(
      ['.bubble4', '.bubble5', '.bubble6'],
      {
        x: '0%',
        autoAlpha: 1,
        stagger: 0.5, // 每个元素间隔0.5秒
        duration: 0.6
      },
      '+=0.3'
    ) // 在上一个动画完成后延迟0.3秒开始
  })

  return (
    <div>
      {/* 源码查看按钮 */}
      <AnimationSourceStatic pageCode={PAGE_CODE} pageFilename="page.tsx" componentCodes={[]} />

      <div className="h-[40vh]"></div>

      <section className="section overflow-x-hidden bg-black text-center text-white">
        <div className="section-block relative bottom-0 z-10 mx-auto flex h-[917px] w-[1280px] justify-between px-[100px]">
          <div className="flex flex-col items-end pt-[300px]">
            <div className="bubble1 mb-[32px] h-[47px] w-[163px]" style={{ opacity: 0, transform: 'translateX(10%)' }}>
              <Image alt="" className="h-full w-full object-cover" height={5120} src={data.node[0].img} width={5120} />
            </div>
            <div
              className="bubble2 mb-[114px] h-[149px] w-[352px]"
              style={{ opacity: 0, transform: 'translateX(10%)' }}
            >
              <Image alt="" className="h-full w-full object-cover" height={5120} src={data.node[1].img} width={5120} />
            </div>
            <div className="bubble3 h-[47px] w-[178px]" style={{ opacity: 0, transform: 'translateX(10%)' }}>
              <Image alt="" className="h-full w-full object-cover" height={5120} src={data.node[2].img} width={5120} />
            </div>
          </div>
          <div className="absolute bottom-[118px] left-[50%] h-[633px] w-[306px] translate-x-[-50%] overflow-x-hidden">
            <Image
              alt=""
              className="section-img h-full w-full object-cover"
              height={5120}
              src={data.bg}
              width={5120}
              style={{ opacity: 0 }}
            />
            <div
              className="section-video absolute overflow-hidden rounded-[50%]"
              style={{ width: '300px', height: '300px', left: '0px', top: '100px' }}
            >
              <video autoPlay className="h-full w-full" loop muted src={data.video}></video>
            </div>
          </div>
          <div className="pt-[60px]">
            <div className="bubble4 mb-[40px] h-[47px] w-[178px]" style={{ opacity: 0, transform: 'translateX(-10%)' }}>
              <Image alt="" className="h-full w-full object-cover" height={5120} src={data.node[3].img} width={5120} />
            </div>
            <div
              className="bubble5 mb-[122px] h-[297px] w-[352px]"
              style={{ opacity: 0, transform: 'translateX(-10%)' }}
            >
              <Image alt="" className="h-full w-full object-cover" height={5120} src={data.node[4].img} width={5120} />
            </div>
            <div className="bubble6 h-[47px] w-[167px]" style={{ opacity: 0, transform: 'translateX(-10%)' }}>
              <Image alt="" className="h-full w-full object-cover" height={5120} src={data.node[5].img} width={5120} />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
