'use client'
import { motion } from 'framer-motion'

const Page = () => {
  return (
    <div>
      <div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        ></motion.div>
      </div>
    </div>
  )
}

export default Page
