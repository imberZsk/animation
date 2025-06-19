import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const Framer = () => {
  const [open, setOpen] = useState(false)

  return (
    <section className="min-h-screen w-screen overflow-x-hidden bg-black text-center text-white">
      <button
        className="absolute left-1/2 top-10 z-10 mx-auto -translate-x-1/2 rounded-sm border border-white px-4"
        onClick={() => setOpen(!open)}
      >
        toggle
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex-center fixed inset-0 w-full bg-black/80"
          >
            <div className="h-[60vh] w-[80%] max-w-2xl rounded-sm bg-white"></div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Framer
