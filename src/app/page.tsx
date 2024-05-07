import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <h2>Projects</h2>
      <div className="grid">
        <Link href={'/codesandbox'}>codesandbox</Link>
      </div>
    </main>
  )
}
