// 'use client'

// import React, { Suspense } from 'react'
// import { useRouter } from 'next/navigation'
// import { useTransition } from 'react'
// export default function SidebarImport() {
//   const router = useRouter()

//   const [isPending, startTransition] = useTransition()

//   const onChange = async (e) => {
//     const fileInput = e.target

//     if (!fileInput.files || fileInput.files.length === 0) {
//       console.warn('files list is empty')
//       return
//     }

//     const file = fileInput.files[0]

//     const formData = new FormData()
//     formData.append('file', file)

//     try {
//       const response = await fetch('/api/upload', {
//         method: 'POST',
//         body: formData
//       })

//       if (!response.ok) {
//         console.error('something went wrong')
//         return
//       }

//       const data = await response.json()
//       startTransition(() => router.push(`/note/${data.uid}`))
//       startTransition(() => router.refresh())
//     } catch (error) {
//       console.error('something went wrong')
//     }

//     // 重置 file input
//     e.target.type = 'text'
//     e.target.type = 'file'
//   }

//   return (
//     <div style={{ textAlign: 'center' }}>
//       <label htmlFor="file" style={{ cursor: 'pointer' }}>
//         Import .md File
//       </label>
//       <input
//         type="file"
//         id="file"
//         name="file"
//         style={{ position: 'absolute', clip: 'rect(0 0 0 0)' }}
//         onChange={onChange}
//         accept=".md"
//       />
//     </div>
//   )
// }

// 'use client'

// import React from 'react'
// import { useRouter } from 'next/navigation'
// import { importNote } from '@/actions'

// export default function SidebarImport() {
//   const router = useRouter()

//   const onChange = async (e) => {
//     const fileInput = e.target

//     if (!fileInput.files || fileInput.files.length === 0) {
//       console.warn('files list is empty')
//       return
//     }

//     const file = fileInput.files[0]

//     const formData = new FormData()
//     formData.append('file', file)

//     try {
//       const data = await importNote(formData)
//       router.push(`/note/${data.uid}`)
//     } catch (error) {
//       console.error('something went wrong')
//     }

//     // 重置 file input
//     e.target.type = 'text'
//     e.target.type = 'file'
//   }

//   return (
//     <div style={{ textAlign: 'center' }}>
//       <label htmlFor="file" style={{ cursor: 'pointer' }}>
//         Import .md File
//       </label>
//       <input
//         type="file"
//         id="file"
//         name="file"
//         style={{ position: 'absolute', clip: 'rect(0 0 0 0)' }}
//         onChange={onChange}
//         accept=".md"
//       />
//     </div>
//   )
// }

'use client'

import { useRef } from 'react'
import { useFormStatus } from 'react-dom'
import { useRouter } from 'next/navigation'
import { importNote } from '@/actions'

function Submit() {
  const { pending } = useFormStatus()
  return <button disabled={pending}>{pending ? 'Submitting' : 'Submit'}</button>
}

export default function SidebarImport() {
  const router = useRouter()
  const formRef = useRef(null)

  async function upload(formData) {
    const file = formData.get('file')
    if (!file) {
      console.warn('files list is empty')
      return
    }

    try {
      const data = await importNote(formData)
      router.push(`/note/${data.uid}`)
    } catch (error) {
      console.error('something went wrong')
    }

    // 重置 file input
    formRef.current?.reset()
  }

  return (
    <form style={{ textAlign: 'center' }} action={upload} ref={formRef}>
      <label htmlFor="file" style={{ cursor: 'pointer' }}>
        Import .md File
      </label>
      <input type="file" id="file" name="file" accept=".md" />
      <div>
        <Submit />
      </div>
    </form>
  )
}
