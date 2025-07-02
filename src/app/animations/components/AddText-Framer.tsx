'use client'

import { motion, useMotionValue, useTransform, animate } from 'framer-motion'
import { useEffect } from 'react'

const AddTextFramer = ({ from, to, className }: { from: number; to: number; className: string }) => {
  const count = useMotionValue(from)
  const rounded = useTransform(count, (latest) => Math.round(latest))

  useEffect(() => {
    const animation = animate(count, to, {
      duration: 1,
      ease: 'easeInOut'
    })

    return animation.stop
  }, [count, to])

  return (
    <motion.h1 transition={{ duration: 1, ease: 'easeInOut' }} className={className}>
      <motion.span>{rounded}</motion.span>
    </motion.h1>
  )
}

export default AddTextFramer
