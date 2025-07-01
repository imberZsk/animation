'use client'

import { Modal } from './modal'

export default function Page({ params: { id } }: { params: { id: string } }) {
  return (
    <Modal>
      <video
        src={`/animations/${id}.mov`}
        width={600}
        height={400}
        className="h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        controls
      />
    </Modal>
  )
}
