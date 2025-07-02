'use client'

import ShinyText from '../../components/ShinyText'

const ShinyTextPage = () => {
  return (
    <div className="flex h-full flex-col gap-4">
      <div className="relative flex flex-1 flex-col justify-center rounded border border-gray-700 bg-gray-900/50 p-6">
        <h3 className="absolute top-10 left-10 mb-2 text-sm font-medium text-gray-300">CSS</h3>
        <ShinyText text="Just some shiny text!" disabled={false} speed={3} className="mx-auto text-center text-4xl" />
      </div>
    </div>
  )
}

export default ShinyTextPage
