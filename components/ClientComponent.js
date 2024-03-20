'use client'

import { useSession } from 'next-auth/react'

export default function ClientExample() {
  const { data: session, status } = useSession()
  return (
    <div>
      {status === 'loading' ? (
        <div>Loading...</div>
      ) : (
        <pre>{JSON.stringify(session, null, 2)}</pre>
      )}
    </div>
  )
}
