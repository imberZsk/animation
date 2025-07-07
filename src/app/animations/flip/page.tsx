'use client'

import { useRef, useState } from 'react'
import gsap from 'gsap'
import { Flip } from 'gsap/Flip'

gsap.registerPlugin(Flip)

const FlipDemo = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const buttonContainerRef = useRef<HTMLDivElement>(null)
  const [isToggled, setIsToggled] = useState(false)

  const handleFlip = () => {
    if (!containerRef.current || !buttonContainerRef.current) return

    // 获取按钮和网格的状态
    const buttonState = Flip.getState('.flip-button')
    const gridState = Flip.getState('.flip-item')

    // 切换按钮容器的布局
    const buttonContainer = buttonContainerRef.current
    if (buttonContainer.classList.contains('justify-start')) {
      buttonContainer.classList.remove('justify-start')
      buttonContainer.classList.add('justify-end')
    } else {
      buttonContainer.classList.remove('justify-end')
      buttonContainer.classList.add('justify-start')
    }

    // 切换网格布局
    const container = containerRef.current
    if (container.classList.contains('grid-cols-3')) {
      container.classList.remove('grid-cols-3')
      container.classList.add('grid-cols-2')
    } else {
      container.classList.remove('grid-cols-2')
      container.classList.add('grid-cols-3')
    }

    setIsToggled(!isToggled)

    // 分别执行Flip动画
    Flip.from(buttonState, {
      duration: 0.8
    })

    Flip.from(gridState, {
      duration: 0.8
    })
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-8">
      <h1 className="mb-8 text-3xl font-bold">GSAP Flip 演示</h1>

      {/* 切换开关样式的按钮 */}
      <div
        ref={buttonContainerRef}
        className="mb-8 flex h-16 w-32 cursor-pointer justify-start rounded-full bg-gray-200 p-2 transition-colors duration-300"
        onClick={handleFlip}
      >
        <div
          className={`flip-button flex h-12 w-12 items-center justify-center rounded-full font-bold text-white transition-colors duration-300 ${
            isToggled ? 'bg-green-500' : 'bg-blue-500'
          }`}
        >
          {isToggled ? '2' : '3'}
        </div>
      </div>

      {/* 固定高度的容器包装器 */}
      <div className="flex h-80 items-center justify-center">
        <div ref={containerRef} className="grid w-80 grid-cols-3 gap-4">
          <div className="flip-item flex h-20 items-center justify-center rounded-lg bg-red-500 font-bold text-white">
            1
          </div>
          <div className="flip-item flex h-20 items-center justify-center rounded-lg bg-green-500 font-bold text-white">
            2
          </div>
          <div className="flip-item flex h-20 items-center justify-center rounded-lg bg-blue-500 font-bold text-white">
            3
          </div>
          <div className="flip-item flex h-20 items-center justify-center rounded-lg bg-yellow-500 font-bold text-white">
            4
          </div>
          <div className="flip-item flex h-20 items-center justify-center rounded-lg bg-purple-500 font-bold text-white">
            5
          </div>
          <div className="flip-item flex h-20 items-center justify-center rounded-lg bg-pink-500 font-bold text-white">
            6
          </div>
        </div>
      </div>
    </div>
  )
}

export default FlipDemo
