'use client'

import { useGSAP } from '@gsap/react'
import React, { useState, useRef } from 'react'
import { gsap } from 'gsap'
import { Button } from '@/components/ui/button'
import { X } from 'lucide-react'
import { AnimationSourceStatic } from '@/components/ui/animation-source-static'

// 页面源码
const PAGE_CODE = `'use client'

import { useGSAP } from '@gsap/react'
import React, { useState, useRef } from 'react'
import { gsap } from 'gsap'
import { Button } from '@/components/ui/button'
import { X } from 'lucide-react'

const Gsap = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [shouldRender, setShouldRender] = useState(false)
  const modalRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  const { contextSafe } = useGSAP()

  const toggleModal = contextSafe(() => {
    if (!isVisible) {
      // 显示模态框
      setShouldRender(true)
      setIsVisible(true)

      requestAnimationFrame(() => {
        if (!modalRef.current || !contentRef.current) return

        // 设置初始状态
        gsap.set([modalRef.current, contentRef.current], {
          opacity: 0
        })
        gsap.set(contentRef.current, {
          scale: 0.95,
          x: '-50%',
          y: '-48%'
        })

        // 进入动画
        gsap
          .timeline()
          .to(modalRef.current, {
            duration: 0.2,
            opacity: 1,
            ease: 'power2.out'
          })
          .to(
            contentRef.current,
            {
              duration: 0.2,
              scale: 1,
              x: '-50%',
              y: '-50%',
              opacity: 1,
              ease: 'power2.out'
            },
            0
          )
      })
    } else {
      // 隐藏模态框
      setIsVisible(false)

      if (!modalRef.current || !contentRef.current) return

      // 退出动画
      gsap
        .timeline({
          onComplete: () => setShouldRender(false)
        })
        .to([modalRef.current, contentRef.current], {
          duration: 0.2,
          opacity: 0,
          ease: 'power2.out'
        })
        .to(
          contentRef.current,
          {
            duration: 0.2,
            scale: 0.95,
            x: '-50%',
            y: '-48%',
            ease: 'power2.out'
          },
          0
        )
    }
  })

  return (
    <section className="relative min-h-full w-full overflow-x-hidden bg-black text-center text-white/70">
      {}
      
      <h1 className="absolute top-10 left-10 text-white">退出动画 - GSAP</h1>

      <Button
        variant="outline"
        className="absolute top-1/2 left-1/2 w-fit -translate-x-1/2 -translate-y-1/2 cursor-pointer text-white/90"
        onClick={toggleModal}
      >
        Open Dialog
      </Button>

      {shouldRender && (
        <div ref={modalRef} className="fixed inset-0 z-50 bg-black/60" onClick={toggleModal}>
          <div
            ref={contentRef}
            className="fixed top-[50%] left-[50%] z-50 flex h-80 w-full max-w-md flex-col rounded-lg border border-white/30 bg-black shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={toggleModal}
              className="absolute top-3 right-3 cursor-pointer p-1 text-white/70 transition-colors duration-200 hover:text-white"
            >
              <X className="h-4 w-4" />
              <span className="sr-only">Close</span>
            </button>

            <div className="flex flex-1 items-center justify-center px-6">
              <h2 className="text-lg font-normal text-white/90">Edit profile</h2>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Gsap`

const Gsap = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [shouldRender, setShouldRender] = useState(false)
  const modalRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  const { contextSafe } = useGSAP()

  const toggleModal = contextSafe(() => {
    if (!isVisible) {
      // 显示模态框
      setShouldRender(true)
      setIsVisible(true)

      requestAnimationFrame(() => {
        if (!modalRef.current || !contentRef.current) return

        // 设置初始状态
        gsap.set([modalRef.current, contentRef.current], {
          opacity: 0
        })
        gsap.set(contentRef.current, {
          scale: 0.95,
          x: '-50%',
          y: '-48%'
        })

        // 进入动画
        gsap
          .timeline()
          .to(modalRef.current, {
            duration: 0.2,
            opacity: 1,
            ease: 'power2.out'
          })
          .to(
            contentRef.current,
            {
              duration: 0.2,
              scale: 1,
              x: '-50%',
              y: '-50%',
              opacity: 1,
              ease: 'power2.out'
            },
            0
          )
      })
    } else {
      // 隐藏模态框
      setIsVisible(false)

      if (!modalRef.current || !contentRef.current) return

      // 退出动画
      gsap
        .timeline({
          onComplete: () => setShouldRender(false)
        })
        .to([modalRef.current, contentRef.current], {
          duration: 0.2,
          opacity: 0,
          ease: 'power2.out'
        })
        .to(
          contentRef.current,
          {
            duration: 0.2,
            scale: 0.95,
            x: '-50%',
            y: '-48%',
            ease: 'power2.out'
          },
          0
        )
    }
  })

  return (
    <section className="relative h-screen w-full overflow-x-hidden bg-black text-center text-white/70">
      {/* 源码查看按钮 */}
      <AnimationSourceStatic pageCode={PAGE_CODE} pageFilename="page.tsx" componentCodes={[]} />
      <h1 className="absolute top-10 left-10 text-white">退出动画 - GSAP</h1>

      <Button
        variant="outline"
        className="absolute top-1/2 left-1/2 w-fit -translate-x-1/2 -translate-y-1/2 cursor-pointer text-white/90"
        onClick={toggleModal}
      >
        Open Dialog
      </Button>

      {shouldRender && (
        <div ref={modalRef} className="fixed inset-0 z-50 bg-black/60" onClick={toggleModal}>
          <div
            ref={contentRef}
            className="fixed top-[50%] left-[50%] z-50 flex h-80 w-full max-w-md flex-col rounded-lg border border-white/30 bg-black shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={toggleModal}
              className="absolute top-3 right-3 cursor-pointer p-1 text-white/70 transition-colors duration-200 hover:text-white"
            >
              <X className="h-4 w-4" />
              <span className="sr-only">Close</span>
            </button>

            <div className="flex flex-1 items-center justify-center px-6">
              <h2 className="text-lg font-normal text-white/90">Edit profile</h2>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Gsap
