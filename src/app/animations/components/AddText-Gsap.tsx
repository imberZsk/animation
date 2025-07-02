'use client'

import React, { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

const AddTextGsap = ({ from, to, className }: { from: number; to: number; className: string }) => {
  const ref = useRef<HTMLHeadingElement>(null)
  useGSAP(() => {
    gsap.to(ref.current, {
      textContent: to,
      duration: 1,
      ease: 'power2.inOut',
      roundProps: 'textContent'
    })
  })

  return (
    <h1 ref={ref} className={className}>
      {from}
    </h1>
  )
}

export default AddTextGsap
