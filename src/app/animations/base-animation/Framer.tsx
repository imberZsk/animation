import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import MotionImage from '@/components/ui/motion-image'

const Framer = () => {
  return (
    <section className="min-h-screen overflow-x-hidden bg-black pt-52 text-center text-white">
      <div className="absolute left-1/2 top-32 z-10 -translate-x-1/2">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="z-10 mx-auto mb-10"
        >
          <Image
            src="https://fms.res.meizu.com/dms/2023/03/29/221febae-e651-410a-903f-29e0bd051ac7.png"
            alt="framer motion"
            width={437}
            height={30}
            className="title1 mx-auto"
          />
        </motion.div>

        <MotionImage
          src="https://fms.res.meizu.com/dms/2023/03/29/399cc024-ff70-4cf2-8011-5b86e6313b1f.png"
          alt="framer motion"
          width={548}
          height={80}
          className="title2"
          containerClassName="z-10"
          initial={{ scale: 5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
        />
      </div>

      <motion.div
        initial={{ x: '10%', opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 1.3 }}
      >
        <Image
          src="https://fms.res.meizu.com/dms/2023/05/24/a8ee0203-5636-4b61-b6bf-7e66b5f671b5.jpg"
          alt="background"
          width={2560}
          height={1111}
          className="bg1"
        />
      </motion.div>
    </section>
  )
}

export default Framer
