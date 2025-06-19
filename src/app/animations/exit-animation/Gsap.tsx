import { useGSAP } from '@gsap/react'
import React, { useState, useRef } from 'react'
import { gsap } from 'gsap'

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
          scale: 0.7,
          y: 80,
          rotationX: -15
        })

        // 进入动画
        gsap
          .timeline()
          .to(modalRef.current, {
            duration: 0.4,
            opacity: 1,
            ease: 'power2.out'
          })
          .to(
            contentRef.current,
            {
              duration: 0.6,
              scale: 1,
              y: 0,
              opacity: 1,
              rotationX: 0,
              ease: 'back.out(1.4)',
              transformOrigin: 'center center'
            },
            '-=0.2'
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
        .to(contentRef.current, {
          duration: 0.3,
          scale: 0.8,
          y: 30,
          opacity: 0,
          rotationX: 10,
          ease: 'power2.in',
          transformOrigin: 'center center'
        })
        .to(
          modalRef.current,
          {
            duration: 0.4,
            opacity: 0,
            ease: 'power2.out'
          },
          '-=0.15'
        )
    }
  })

  return (
    <section className="min-h-screen w-screen overflow-x-hidden bg-white text-center text-white">
      <button
        className="absolute left-1/2 top-10 z-10 mx-auto -translate-x-1/2 rounded-sm border border-white bg-black px-4 py-2 transition-colors"
        onClick={toggleModal}
      >
        {isVisible ? 'Close' : 'Open'} Modal
      </button>

      {shouldRender && (
        <div ref={modalRef} className="fixed inset-0 flex items-center justify-center bg-black/60 backdrop-blur-sm">
          <div ref={contentRef} className="h-[60vh] w-[80%] max-w-2xl overflow-hidden rounded-lg bg-white shadow-2xl">
            <div className="flex h-full flex-col justify-center p-8 text-black">
              <h2 className="mb-6 text-center text-3xl font-bold">Modal Content</h2>
              <p className="text-center leading-relaxed text-gray-600">
                这是一个使用 GSAP 实现的模态框，具有丰富的 3D 进入和退出动画效果。
              </p>
              <p className="mt-4 text-center text-sm text-gray-500">包含缩放、位移、透明度和 3D 旋转效果</p>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Gsap
