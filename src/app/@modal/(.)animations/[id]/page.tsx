'use client'

import Image from 'next/image'
import { Modal } from './modal'

export default function Page({ params: { id } }: { params: { id: string } }) {
  return (
    <Modal>
      <Image
        src={`/${id}.gif`}
        width={600}
        height={400}
        alt="normal"
        className="h-full w-full object-cover"
        unoptimized
      />
    </Modal>
  )
}
