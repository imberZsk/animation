'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { data } from '../const'
import Image from 'next/image'
import { useRef } from 'react'

const Page = () => {
  const containerRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['center end', 'start start']
  })

  const left = useTransform(scrollYProgress, [0, 1], ['0px', `${1280 - 2000}px`])

  return (
    <div className="h-[250vh] overflow-x-hidden">
      {/* 源码查看按钮 */}
      <div className="flex-center h-[80vh] text-2xl font-bold">向下滚动</div>
      <div className="relative mx-auto w-[1280px]">
        <motion.div style={{ left }} ref={containerRef} className="absolute flex w-[2000px] gap-4">
          {data.map((item) => (
            <div key={item.url} className="relative h-100 w-100" style={{ width: item.w, height: item.h }}>
              <Image src={item.url} alt="image" fill sizes="100vw" className="rounded-md object-cover" />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

export default Page
