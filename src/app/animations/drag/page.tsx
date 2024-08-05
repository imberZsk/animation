'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'

const Page = () => {
  const [imageUrls, setImageUrls] = useState([
    'https://ssm.res.meizu.com/admin/2023/01/09/1321171803/7hxuYnFhzU.png?x-oss-process=image/resize,w_828/format,webp',
    'https://ssm.res.meizu.com/admin/2023/01/09/1321171803/gRXIs7v4Mj.png?x-oss-process=image/resize,w_378/format,webp'
  ])

  const [draggingIndex, setDraggingIndex] = useState<number | null>(null)
  const [hoveringIndex, setHoveringIndex] = useState<number | null>(null)

  const handleDragStart = (event: React.DragEvent<HTMLDivElement>, index: number) => {
    event.dataTransfer.setData('text/plain', index.toString())
    setDraggingIndex(index)
  }

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault()
  }

  const handleDragEnter = (event: React.DragEvent<HTMLDivElement>, index: number) => {
    if (draggingIndex !== null && index !== draggingIndex) {
      setHoveringIndex(index)
    }
  }

  const handleDragLeave = (event: React.DragEvent<HTMLDivElement>) => {
    setHoveringIndex(null)
  }

  const handleDrop = (event: React.DragEvent<HTMLDivElement>, index: number) => {
    event.preventDefault()
    if (draggingIndex !== null && index !== draggingIndex) {
      const newImageUrls = [...imageUrls]
      const [removed] = newImageUrls.splice(draggingIndex, 1)
      newImageUrls.splice(index, 0, removed)
      setImageUrls(newImageUrls)
    }
    setDraggingIndex(null)
    setHoveringIndex(null)
  }

  const handleDragEnd = () => {
    setDraggingIndex(null)
    setHoveringIndex(null)
  }

  // Update the order of images when hovering over another image
  useEffect(() => {
    if (draggingIndex !== null && hoveringIndex !== null) {
      const newImageUrls = [...imageUrls]
      const [removed] = newImageUrls.splice(draggingIndex, 1)
      newImageUrls.splice(hoveringIndex, 0, removed)
      setImageUrls(newImageUrls)
    }
  }, [draggingIndex, hoveringIndex, imageUrls])

  return (
    <div>
      <div className="flex gap-4">
        {imageUrls.map((url, index) => (
          <div
            key={index}
            draggable
            onDragStart={(e) => handleDragStart(e, index)}
            onDragEnter={(e) => handleDragEnter(e, index)}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={(e) => handleDrop(e, index)}
            onDragEnd={handleDragEnd}
            className={`cursor-move border p-2 ${draggingIndex === index ? 'bg-blue-500' : ''}`}
          >
            <Image src={url} width={80} height={80} alt="" />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Page
