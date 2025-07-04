'use client'

import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { X } from 'lucide-react'
import { AnimationSourceStatic } from '@/components/ui/animation-source-static'

// 页面源码
const PAGE_CODE = `'use client'

import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { X } from 'lucide-react'

const Framer = () => {
  const [open, setOpen] = useState(false)

  return (
    <section className="relative min-h-full w-full overflow-x-hidden bg-black text-center text-white/70">
      {}
      
      <h1 className="absolute top-10 left-10 text-white">退出动画 - Framer Motion</h1>
      <Button
        variant="outline"
        className="absolute top-1/2 left-1/2 w-fit -translate-x-1/2 -translate-y-1/2 cursor-pointer text-white/90"
        onClick={() => setOpen(!open)}
      >
        Open Dialog
      </Button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-black/60"
            onClick={() => setOpen(false)}
          >
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.95,
                x: '-50%',
                y: '-48%'
              }}
              animate={{
                opacity: 1,
                scale: 1,
                x: '-50%',
                y: '-50%'
              }}
              exit={{
                opacity: 0,
                scale: 0.95,
                x: '-50%',
                y: '-48%'
              }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              className="fixed top-[50%] left-[50%] z-50 flex h-80 w-full max-w-md flex-col rounded-lg border border-white/30 bg-black shadow-xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setOpen(false)}
                className="absolute top-3 right-3 cursor-pointer p-1 text-white/70 transition-colors duration-200 hover:text-white"
              >
                <X className="h-4 w-4" />
                <span className="sr-only">Close</span>
              </button>

              <div className="flex flex-1 items-center justify-center px-6">
                <h2 className="text-lg font-normal text-white/90">Edit profile</h2>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Framer`

const Framer = () => {
  const [open, setOpen] = useState(false)

  return (
    <section className="relative h-screen w-full overflow-x-hidden bg-black text-center text-white/70">
      {/* 源码查看按钮 */}
      <AnimationSourceStatic pageCode={PAGE_CODE} pageFilename="page.tsx" componentCodes={[]} />
      <h1 className="absolute top-10 left-10 text-white">退出动画 - Framer Motion</h1>
      <Button
        variant="outline"
        className="absolute top-1/2 left-1/2 w-fit -translate-x-1/2 -translate-y-1/2 cursor-pointer text-white/90"
        onClick={() => setOpen(!open)}
      >
        Open Dialog
      </Button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-black/60"
            onClick={() => setOpen(false)}
          >
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.95,
                x: '-50%',
                y: '-48%'
              }}
              animate={{
                opacity: 1,
                scale: 1,
                x: '-50%',
                y: '-50%'
              }}
              exit={{
                opacity: 0,
                scale: 0.95,
                x: '-50%',
                y: '-48%'
              }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              className="fixed top-[50%] left-[50%] z-50 flex h-80 w-full max-w-md flex-col rounded-lg border border-white/30 bg-black shadow-xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setOpen(false)}
                className="absolute top-3 right-3 cursor-pointer p-1 text-white/70 transition-colors duration-200 hover:text-white"
              >
                <X className="h-4 w-4" />
                <span className="sr-only">Close</span>
              </button>

              <div className="flex flex-1 items-center justify-center px-6">
                <h2 className="text-lg font-normal text-white/90">Edit profile</h2>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Framer
