import React, { forwardRef } from 'react'
import { motion, HTMLMotionProps } from 'framer-motion'
import Image, { ImageProps } from 'next/image'

type MotionImageProps = Omit<ImageProps, 'onLoad' | 'onError'> &
  Omit<HTMLMotionProps<'div'>, 'children'> & {
    containerClassName?: string
  }

const MotionImage = forwardRef<HTMLDivElement, MotionImageProps>(({ containerClassName, className, ...props }, ref) => {
  const {
    src,
    alt,
    width,
    height,
    priority,
    placeholder,
    blurDataURL,
    quality,
    sizes,
    fill,
    style: imageStyle,
    ...motionProps
  } = props

  const imageProps: ImageProps = {
    src,
    alt,
    width,
    height,
    priority,
    placeholder,
    blurDataURL,
    quality,
    sizes,
    fill,
    className,
    style: imageStyle
  }

  return (
    <motion.div ref={ref} className={containerClassName} {...motionProps}>
      <Image {...imageProps} alt={alt} />
    </motion.div>
  )
})

MotionImage.displayName = 'MotionImage'

export default MotionImage
