'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function TimelinePage() {
  const router = useRouter()

  useEffect(() => {
    // 重定向到默认的framer页面
    router.replace('/timeline/framer')
  }, [router])

  return (
    <div className="flex h-full items-center justify-center">
      <div className="text-gray-400">Loading...</div>
    </div>
  )
}
