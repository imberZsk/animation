'use client'
import Link from 'next/link'
import Image from 'next/image'
export default function Page(): JSX.Element {
  return (
    <div className="flex justify-center flex-col lg:pt-40 pt-8 pb-10">
      <div className="text-4xl text-center mb-8">Demos</div>
      <div className="mx-auto grid grid-cols-1 font-bold w-[90vw] gap-4 lg:grid-cols-3">
        <div className="border border-gray-400 rounded-lg overflow-hidden">
          <Link href="/fade-in">
            <div className="w-full h-[45vw] lg:h-[calc((100vw_-_20px)/3/2)]">
              <Image
                src="/fade-in.gif"
                width={600}
                height={400}
                alt="normal"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="p-4 text-lg">基础效果</p>
          </Link>
        </div>

        <div className="border border-gray-400 rounded-lg overflow-hidden">
          <Link href="/fade-in">
            <div className="w-full h-[45vw] lg:h-[calc((100vw_-_20px)/3/2)]">
              <Image
                src="/fade-in.gif"
                width={600}
                height={400}
                alt="normal"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="p-4 text-lg">基础效果</p>
          </Link>
        </div>

        <div className="border border-gray-400 rounded-lg overflow-hidden">
          <Link href="/fade-in">
            <div className="w-full h-[45vw] lg:h-[calc((100vw_-_20px)/3/2)]">
              <Image
                src="/fade-in.gif"
                width={600}
                height={400}
                alt="normal"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="p-4 text-lg">基础效果</p>
          </Link>
        </div>
      </div>
    </div>
  )
}
