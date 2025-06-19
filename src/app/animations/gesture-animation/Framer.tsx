import React from 'react'
import { motion, Variants } from 'framer-motion'
import Image from 'next/image'

// 定义动画变体
const buttonVariants: Variants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: 'linear'
    }
  }
}

// 定义图片旋转动画变体
const imageVariants: Variants = {
  initial: {
    rotate: 0,
    transition: {
      type: 'spring',
      damping: 20, // 阻尼系数，数值越大阻尼越强
      stiffness: 100, // 弹性系数
      duration: 1.5 // 回到初始状态的时间
    }
  },
  hover: {
    // rotate: [0, 360, 720, 720], // 旋转两圈然后停止
    rotate: 1080,
    transition: {
      duration: 5, // 总共5秒
      ease: 'linear'
    }
  },
  exit: {
    rotate: 0,
    transition: {
      type: 'spring',
      damping: 25, // 离开时的阻尼
      stiffness: 120, // 离开时的弹性
      duration: 5 // 停止旋转的时间
    }
  }
}

// 定义可复用的 viewport 配置
const viewportConfigs = {
  early: {
    margin: '200px', // 提前 200px 触发
    once: true
  },
  delayed: {
    margin: '-200px' // 进入视口 200px 后才触发
    // once: true
  },
  standard: {
    margin: '0px',
    once: true
  }
}

const Framer = () => {
  return (
    <section className="min-h-screen w-screen overflow-x-hidden bg-black text-center text-white">
      <div className="flex-center h-screen w-full">
        <motion.div
          className="size-48 overflow-hidden rounded-full bg-white"
          variants={buttonVariants}
          initial="hidden"
          whileInView="visible"
          whileHover={{
            backgroundColor: 'rgba(200, 200, 200, 1)',
            transition: {
              type: 'spring',
              damping: 15,
              stiffness: 200,
              duration: 1
            }
          }}
          whileTap={{
            backgroundColor: 'red',
            transition: {
              type: 'spring',
              damping: 10,
              stiffness: 400
            }
          }}
          viewport={viewportConfigs.early}
        >
          <motion.div
            variants={imageVariants}
            initial="initial"
            whileHover="hover"
            animate="initial" // 默认保持在initial状态
            exit="exit" // 离开时的动画
          >
            <Image src="/avatar.jpeg" alt="logo" width={1000} height={1000} className="rounded-full" />
          </motion.div>
        </motion.div>
      </div>
      <div className="flex-center flex-center h-screen w-full">
        <motion.button
          className="size-48 bg-white"
          variants={buttonVariants}
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ backgroundColor: 'rgba(220, 220, 220, 1)' }}
          whileTap={{ backgroundColor: 'red' }}
          viewport={viewportConfigs.delayed}
        />
      </div>
    </section>
  )
}

export default Framer
