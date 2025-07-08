'use client'

import Image from 'next/image'
import { data } from '../const'
import { motion } from 'framer-motion'

const Page = () => {
  return (
    <div className="relative h-[200vh]">
      <Image fill sizes="100vw" src={data.bg} alt="bg" className="object-cover" />

      <div className="absolute bottom-[170px] left-[50%] grid h-[970px] w-[1110px] translate-x-[-50%] grid-cols-2 grid-rows-2 gap-[10px]">
        {data.arr.map((item, index) => {
          return (
            <motion.div
              initial={{
                opacity: 0,
                x: index % 2 === 0 ? '-100px' : '100px' // 偶数从左进入，奇数从右进入
              }}
              whileInView={{
                opacity: 1,
                x: '0px'
              }}
              viewport={{
                once: false, // 允许重复触发，就像 GSAP 的 toggleActions
                margin: '0px 0px -20% 0px' // 当元素底部还有20%在视口外时就触发
              }}
              transition={{
                duration: 0.5, // 默认是 0.3
                ease: 'easeInOut'
              }}
              key={index}
              className={`box${index} relative overflow-hidden rounded-[10px] p-[60px] text-left`}
            >
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
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}

export default Page
