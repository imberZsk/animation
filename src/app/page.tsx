'use client'
import Link from 'next/link'
import Image from 'next/image'
export default function Page(): JSX.Element {
  return (
    <div className="flex flex-col justify-center pb-10 pt-8 lg:pt-40">
      <div className="mb-8 text-center text-4xl">Demos</div>
      <div className="mx-auto grid w-[90vw] grid-cols-1 gap-4 font-bold lg:grid-cols-3">
        <div className="overflow-hidden rounded-lg border border-gray-400">
          <Link href="/fade-in">
            <div className="h-[45vw] w-full lg:h-[calc((90vw_-_32px_-_6px)/3/2)]">
              <Image src="/fade-in.gif" width={600} height={400} alt="normal" className="h-full w-full object-cover" />
            </div>
            <p className="p-4 text-lg">渐入效果</p>
          </Link>
        </div>

        <div className="overflow-hidden rounded-lg border border-gray-400">
          <Link href="/fade-in2">
            <div className="h-[45vw] w-full lg:h-[calc((90vw_-_32px_-_6px)/3/2)]">
              <Image src="/fade-in2.gif" width={600} height={400} alt="normal" className="h-full w-full object-cover" />
            </div>
            <p className="p-4 text-lg">渐入与滚动动画效果</p>
          </Link>
        </div>

        <div className="overflow-hidden rounded-lg border border-gray-400">
          <Link href="/pin1">
            <div className="h-[45vw] w-full lg:h-[calc((90vw_-_32px_-_6px)/3/2)]">
              <Image src="/pin1.gif" width={600} height={400} alt="normal" className="h-full w-full object-cover" />
            </div>
            <p className="p-4 text-lg">滚动钉住动画效果</p>
          </Link>
        </div>

        <div className="overflow-hidden rounded-lg border border-gray-400">
          <Link href="/pin2">
            <div className="h-[45vw] w-full lg:h-[calc((90vw_-_32px_-_6px)/3/2)]">
              <Image src="/pin2.gif" width={600} height={400} alt="normal" className="h-full w-full object-cover" />
            </div>
            <p className="p-4 text-lg">动态叠层滚动效果</p>
          </Link>
        </div>
      </div>
    </div>
  )
}
