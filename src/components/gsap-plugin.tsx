'use client'

import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger, useGSAP)

export default function GsapPlugin() {
  return null
}
