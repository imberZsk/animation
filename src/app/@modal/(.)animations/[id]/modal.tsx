'use client'

import { Dialog, DialogContent, DialogDescription, DialogHeader } from '@/components/ui/dialog'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export function Modal({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(true)
  const router = useRouter()

  function onDismiss() {
    setIsOpen(false)
    router.back()
  }

  function handleOpenChange(open: boolean) {
    setIsOpen(open)
    if (!open) {
      onDismiss()
    }
  }
  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogDescription>{children}</DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}
