'use client'
import { useSearchParams } from 'next/navigation'
import Gsap from './Gsap'
import Framer from './Framer'

export default function ExitAnimation() {
  const searchParams = useSearchParams()
  const type = searchParams.get('type')

  if (type === 'gsap') {
    return <Gsap />
  }

  return <Framer />
}
