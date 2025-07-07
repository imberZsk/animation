'use client'

import { cn } from '@/lib/utils'
import { useGSAP } from '@gsap/react'
import { ScrollSmoother } from 'gsap/ScrollSmoother'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import gsap from 'gsap'
import Image from 'next/image'
import { AnimationSourceStatic } from '@/components/ui/animation-source-static'

gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

// 页面源码
const PAGE_CODE = `'use client'

import { cn } from '@/lib/utils'
import { useGSAP } from '@gsap/react'
import { ScrollSmoother } from 'gsap/ScrollSmoother'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import gsap from 'gsap'
import Image from 'next/image'

gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

const commonCss = 'flex-center font-bold h-screen w-full text-4xl relative overflow-hidden'

const Page = () => {
  useGSAP(() => {
    ScrollSmoother.create({
      smooth: 1, //需要多长时间（以秒为单位）才能"赶上"原始滚动位置
      effects: true, //查找元素上的数据速度和数据滞后属性
      wrapper: '#smooth-wrapper',
      content: '#smooth-content'
    })
  })

  return (
    <div className="relative min-h-screen">
      <div id="smooth-wrapper" className="w-full">
        <div id="smooth-content">
          {/* 以 0.8 的速度滚动 */}
          <div className={cn(commonCss, 'bg-gray-500')}>
            <Image
              data-speed="0.8"
              src="https://raw.githubusercontent.com/imberZsk/images/main/gallery/1750645361121-4032x3024-IMG_8827.jpg"
              fill
              sizes="100vw"
              className="h-full w-full object-cover"
              alt=""
            />
            <span className="absolute" data-speed="0.8">
              在海岛上发现的无人沙滩，沙滩上挺多白色垃圾
            </span>
          </div>
          <div className={cn(commonCss, 'bg-gray-600')}>
            <Image
              data-speed="0.8"
              src="https://raw.githubusercontent.com/imberZsk/images/main/gallery/1750412435589-4032x3024-IMG_8878.jpg"
              fill
              sizes="100vw"
              className="h-full w-full object-cover"
              alt=""
            />
            <span className="absolute" data-speed="0.8">
              海岛的一角
            </span>
          </div>
          <div className={cn(commonCss, 'bg-gray-700')}>
            <Image
              data-speed="0.8"
              src="https://raw.githubusercontent.com/imberZsk/images/main/gallery/1750412424952-4032x3024-IMG_8841.jpg"
              fill
              sizes="100vw"
              className="h-full w-full object-cover"
              alt=""
            />
            <span className="absolute" data-speed="0.8">
              含有特殊元素矿石，让水变成了绿色，像宝石一样
            </span>
          </div>

          {/* 滞后效果区域 (data-lag) */}
          <div className="h-[50vh] bg-slate-100 px-8 py-16">
            <h2 className="mb-12 text-center text-3xl font-bold">滞后效果展示</h2>

            <div className="flex flex-wrap justify-center gap-8">
              {/* 无滞后（对比） */}
              <div className="relative h-64 w-64 overflow-hidden rounded-xl shadow-lg">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-80"></div>
                <div className="absolute inset-0 flex items-center justify-center font-bold text-white">无滞后效果</div>
              </div>

              {/* 轻微滞后 */}
              <div className="relative h-64 w-64 overflow-hidden rounded-xl shadow-lg" data-lag="0.1">
                <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-teal-500 opacity-80"></div>
                <div className="absolute inset-0 flex items-center justify-center font-bold text-white">
                  轻微滞后 0.1s
                </div>
              </div>

              {/* 中等滞后 */}
              <div className="relative h-64 w-64 overflow-hidden rounded-xl shadow-lg" data-lag="0.3">
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-orange-500 opacity-80"></div>
                <div className="absolute inset-0 flex items-center justify-center font-bold text-white">
                  中等滞后 0.3s
                </div>
              </div>

              {/* 明显滞后 */}
              <div className="relative h-64 w-64 overflow-hidden rounded-xl shadow-lg" data-lag="0.6">
                <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-pink-500 opacity-80"></div>
                <div className="absolute inset-0 flex items-center justify-center font-bold text-white">
                  明显滞后 0.6s
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page`

const commonCss = 'flex-center font-bold h-screen w-full text-4xl relative overflow-hidden'

const Page = () => {
  useGSAP(() => {
    ScrollSmoother.create({
      smooth: 1, //需要多长时间（以秒为单位）才能"赶上"原始滚动位置
      effects: true, //查找元素上的数据速度和数据滞后属性
      wrapper: '#smooth-wrapper',
      content: '#smooth-content'
    })
  })

  return (
    <div className="relative min-h-screen">
      <AnimationSourceStatic pageCode={PAGE_CODE} pageFilename="page.tsx" componentCodes={[]} />
      <div id="smooth-wrapper" className="w-full">
        <div id="smooth-content">
          {/* 以 0.8 的速度滚动 */}
          <div className={cn(commonCss, 'bg-gray-500')}>
            <Image
              data-speed="0.8"
              src="https://raw.githubusercontent.com/imberZsk/images/main/gallery/1750645361121-4032x3024-IMG_8827.jpg"
              fill
              sizes="100vw"
              className="h-full w-full object-cover"
              alt=""
            />
            <span className="absolute" data-speed="0.8">
              在海岛上发现的无人沙滩，沙滩上挺多白色垃圾
            </span>
          </div>
          <div className={cn(commonCss, 'bg-gray-600')}>
            <Image
              data-speed="0.8"
              src="https://raw.githubusercontent.com/imberZsk/images/main/gallery/1750412435589-4032x3024-IMG_8878.jpg"
              fill
              sizes="100vw"
              className="h-full w-full object-cover"
              alt=""
            />
            <span className="absolute" data-speed="0.8">
              海岛的一角
            </span>
          </div>
          <div className={cn(commonCss, 'bg-gray-700')}>
            <Image
              data-speed="0.8"
              src="https://raw.githubusercontent.com/imberZsk/images/main/gallery/1750412424952-4032x3024-IMG_8841.jpg"
              fill
              sizes="100vw"
              className="h-full w-full object-cover"
              alt=""
            />
            <span className="absolute" data-speed="0.8">
              含有特殊元素矿石，让水变成了绿色，像宝石一样
            </span>
          </div>

          {/* 滞后效果区域 (data-lag) */}
          <div className="h-[50vh] bg-slate-100 px-8 py-16">
            <h2 className="mb-12 text-center text-3xl font-bold">滞后效果展示</h2>

            <div className="flex flex-wrap justify-center gap-8">
              {/* 无滞后（对比） */}
              <div className="relative h-64 w-64 overflow-hidden rounded-xl shadow-lg">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-80"></div>
                <div className="absolute inset-0 flex items-center justify-center font-bold text-white">无滞后效果</div>
              </div>

              {/* 轻微滞后 */}
              <div className="relative h-64 w-64 overflow-hidden rounded-xl shadow-lg" data-lag="0.1">
                <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-teal-500 opacity-80"></div>
                <div className="absolute inset-0 flex items-center justify-center font-bold text-white">
                  轻微滞后 0.1s
                </div>
              </div>

              {/* 中等滞后 */}
              <div className="relative h-64 w-64 overflow-hidden rounded-xl shadow-lg" data-lag="0.3">
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-orange-500 opacity-80"></div>
                <div className="absolute inset-0 flex items-center justify-center font-bold text-white">
                  中等滞后 0.3s
                </div>
              </div>

              {/* 明显滞后 */}
              <div className="relative h-64 w-64 overflow-hidden rounded-xl shadow-lg" data-lag="0.6">
                <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-pink-500 opacity-80"></div>
                <div className="absolute inset-0 flex items-center justify-center font-bold text-white">
                  明显滞后 0.6s
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page
