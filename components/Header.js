import { signIn, signOut } from 'auth'
import { auth } from 'auth'
import Link from 'next/link'

function SignIn({ provider, ...props }) {
  return (
    <form
      action={async () => {
        'use server'
        await signIn(provider)
      }}
    >
      <button {...props}>Sign In</button>
    </form>
  )
}

function SignOut(props) {
  return (
    <form
      action={async () => {
        'use server'
        await signOut()
      }}
    >
      <button {...props}>Sign Out</button>
    </form>
  )
}

export default async function Header() {
  const session = await auth()
  return (
    <header style={{ display: 'flex', justifyContent: 'space-around' }}>
      <Link href="/client">Client Side Component</Link>
      {!session?.user ? (
        <SignIn />
      ) : (
        <span style={{ display: 'flex', alignItems: 'center' }}>
          {session?.user.name} <SignOut />
        </span>
      )}
    </header>
  )
}

// 客户端组件可以这样，服务端组件可以走中间件
// "use client"

// import { useSession } from "next-auth/react"

// export default function Page() {
//   const { data: session, status } = useSession()

//   if (status === "loading") {
//     return <p>Loading...</p>
//   }

//   if (status === "unauthenticated") {
//     return <p>Access Denied</p>
//   }

//   return (
//     <pre>{JSON.stringify(session, null, 2)}</pre>
//   )
// }
