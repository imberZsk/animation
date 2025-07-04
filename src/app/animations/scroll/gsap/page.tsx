'use client'

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'
import { data } from '../const'
import { AnimationSourceStatic } from '@/components/ui/animation-source-static'

gsap.registerPlugin(ScrollTrigger)

// 页面源码
const PAGE_CODE = `'use client'

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'
import { data } from '../const'

gsap.registerPlugin(ScrollTrigger)

const Page = () => {
  useGSAP(() => {
    // 通用的 scrollTrigger 配置
    const commonScrollTriggerConfig = {
      markers: true, // 显示标记，方便开发时调试动画触发时机
      start: 'center 90%', // 元素相对自身的位置 和 视口的位置，两者重合即触发动画开始
      toggleActions: 'play none none reverse', // 动画触发时机
      onEnter: () => console.log('onEnter'),
      onLeave: () => console.log('onLeave'),
      onEnterBack: () => console.log('onEnterBack'),
      onLeaveBack: () => console.log('onLeaveBack')
    }

    // 通用的动画配置
    const commonAnimationConfig = {
      duration: 0.5,
      autoAlpha: 0,
      ease: 'power1.inOut'
    }

    // 为每一对 box 创建动画（0-1, 2-3）
    for (let i = 0; i < 4; i += 2) {
      const timeline = gsap.timeline({
        scrollTrigger: {
          ...commonScrollTriggerConfig,
          trigger: \`.box\${i}\` // 以每对的第一个元素作为触发器
        }
      })

      // 第一个 box 从左进入
      timeline.from(\`.box\${i}\`, {
        ...commonAnimationConfig,
        x: '-10%'
      })

      // 第二个 box 从右进入，与第一个动画重叠
      timeline.from(
        \`.box\${i + 1}\`,
        {
          ...commonAnimationConfig,
          x: '10%'
        },
        '-=0.5'
      )
    }
  })

  return (
    <div className="relative h-[200vh]">
      <Image fill sizes="100vw" src={data.bg} alt="bg" className="object-cover" />

      <div className="absolute bottom-[170px] left-[50%] grid h-[970px] w-[1110px] translate-x-[-50%] grid-cols-2 grid-rows-2 gap-[10px]">
        {data.arr.map((item, index) => {
          return (
            <div key={index} className={\`box\${index} relative overflow-hidden rounded-[10px] p-[60px] text-left\`}>
              <Image
                alt=""
                loading="lazy"
                width={5120}
                height={5120}
                src={item.url}
                className="absolute top-0 left-0 z-[-1] h-full w-full cursor-pointer object-cover transition-transform duration-1000 hover:scale-110"
              />

              {/* 显示描述文本 */}
              <div className="text-[26px] font-medium text-black">
                {item.title.split('$').map((text, index) => {
                  return <p key={index}>{text}</p>
                })}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Page`

const Page = () => {
  useGSAP(() => {
    // 通用的 scrollTrigger 配置
    const commonScrollTriggerConfig = {
      markers: true, // 显示标记，方便开发时调试动画触发时机
      start: 'center 90%', // 元素相对自身的位置 和 视口的位置，两者重合即触发动画开始
      toggleActions: 'play none none reverse', // 动画触发时机
      onEnter: () => console.log('onEnter'),
      onLeave: () => console.log('onLeave'),
      onEnterBack: () => console.log('onEnterBack'),
      onLeaveBack: () => console.log('onLeaveBack')
    }

    // 通用的动画配置
    const commonAnimationConfig = {
      duration: 0.5,
      autoAlpha: 0,
      ease: 'power1.inOut'
    }

    // 为每一对 box 创建动画（0-1, 2-3）
    for (let i = 0; i < 4; i += 2) {
      const timeline = gsap.timeline({
        scrollTrigger: {
          ...commonScrollTriggerConfig,
          trigger: `.box${i}` // 以每对的第一个元素作为触发器
        }
      })

      // 第一个 box 从左进入
      timeline.from(`.box${i}`, {
        ...commonAnimationConfig,
        x: '-10%'
      })

      // 第二个 box 从右进入，与第一个动画重叠
      timeline.from(
        `.box${i + 1}`,
        {
          ...commonAnimationConfig,
          x: '10%'
        },
        '-=0.5'
      )
    }
  })

  return (
    <div className="relative h-[200vh]">
      {/* 源码查看按钮 */}
      <AnimationSourceStatic pageCode={PAGE_CODE} pageFilename="page.tsx" componentCodes={[]} />

      <Image fill sizes="100vw" src={data.bg} alt="bg" className="object-cover" />

      <div className="absolute bottom-[170px] left-[50%] grid h-[970px] w-[1110px] translate-x-[-50%] grid-cols-2 grid-rows-2 gap-[10px]">
        {data.arr.map((item, index) => {
          return (
            <div key={index} className={`box${index} relative overflow-hidden rounded-[10px] p-[60px] text-left`}>
              <Image
                alt=""
                loading="lazy"
                width={5120}
                height={5120}
                src={item.url}
                className="absolute top-0 left-0 z-[-1] h-full w-full cursor-pointer object-cover transition-transform duration-1000 hover:scale-110"
              />

              {/* 显示描述文本 */}
              <div className="text-[26px] font-medium text-black">
                {item.title.split('$').map((text, index) => {
                  return <p key={index}>{text}</p>
                })}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Page
