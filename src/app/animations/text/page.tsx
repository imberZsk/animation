'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

const TextAnimationsPage = () => {
  const router = useRouter()

  useEffect(() => {
    // 重定向到默认的split页面
    router.replace('/animations/text/split')
  }, [router])

  return (
    <div className="flex h-full items-center justify-center">
      <div className="text-gray-400">Loading...</div>
    </div>
  )
}

export default TextAnimationsPage
