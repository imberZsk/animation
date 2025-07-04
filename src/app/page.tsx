'use client'

import Link from 'next/link'
import { useRef, useEffect, useState } from 'react'
import { navigationSections } from './const'

export default function Page(): JSX.Element {
  return (
    <div className="flex flex-col justify-center pt-8 pb-10 lg:py-20">
      <div className="mb-20 text-center text-4xl">Animations</div>

      <div className="mx-auto grid w-[90vw] grid-cols-1 gap-4 font-bold lg:grid-cols-3">
        {navigationSections.map((item, index) => {
          return <VideoCard key={index} item={item} />
        })}
      </div>
    </div>
  )
}

interface VideoCardProps {
  item: {
    name: string
    path: string
    src: string
  }
}

function VideoCard({ item }: VideoCardProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  // 懒加载实现
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => observer.disconnect()
  }, [])

  // hover播放控制
  useEffect(() => {
    const video = videoRef.current
    if (!video || !isVisible) return

    if (isHovered) {
      video.play().catch(() => {
        // 忽略播放错误
      })
    } else {
      video.pause()
      video.currentTime = 0 // 重置到开始
    }
  }, [isHovered, isVisible])

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
  }

  return (
    <div
      ref={containerRef}
      className="overflow-hidden rounded-lg border border-gray-400"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Link href={item.path}>
        <div className="h-[45vw] w-full lg:h-[calc((90vw_-_32px_-_6px)/3/2)]">
          {isVisible ? (
            <video
              ref={videoRef}
              src={item.src}
              width={600}
              height={400}
              className="h-full w-full object-cover"
              muted
              loop
              playsInline
              preload="metadata"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-black">
              <div className="text-gray-500">Loading...</div>
            </div>
          )}
        </div>
        <p className="p-4 text-lg">{item.name}</p>
      </Link>
    </div>
  )
}
