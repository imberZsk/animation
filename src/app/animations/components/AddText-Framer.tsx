'use client'

import { motion, useMotionValue, useTransform, animate } from 'framer-motion'
import { useEffect } from 'react'

const AddTextFramer = ({ from, to, className }: { from: number; to: number; className: string }) => {
  // 创建一个动画值，初始值为 from 参数
  const count = useMotionValue(from)
  //  将动画值转换为整数，确保显示的数字没有小数点
  const rounded = useTransform(count, (latest) => Math.round(latest))

  useEffect(() => {
    // 创建一个动画，将 count 从 from 动画到 to
    const animation = animate(count, to, {
      duration: 1,
      // 先加速后减速
      ease: 'easeInOut'
    })

    // 清理函数
    return animation.stop
  }, [count, to])

  return (
    <motion.h1 transition={{ duration: 1, ease: 'easeInOut' }} className={className}>
      <motion.span>{rounded}</motion.span>
    </motion.h1>
  )
}

export default AddTextFramer
