'use client'
import Link from 'next/link'
import Image from 'next/image'
export default function Page(): JSX.Element {
  return (
    <div className="flex justify-center flex-col lg:pt-40 pt-8 pb-10">
      <div className="text-4xl text-center mb-10">Demos</div>
      <div className="mx-auto grid grid-cols-1 font-bold px-7 lg:px-20 gap-4 lg:grid-cols-3">
        <div className="border border-gray-400 rounded-lg overflow-hidden">
          <Link href="/normal">
            <div className="w-full">
              <Image
                src="/fadein.gif"
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
          <Link href="/scene">
            <div className="w-full">
              <Image
                src="/fadein.gif"
                width={600}
                height={400}
                alt="normal"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="p-4 text-lg">场景贴图</p>
          </Link>
        </div>

        <div className="border border-gray-400 rounded-lg overflow-hidden">
          <Link href="/skybox">
            <div className="w-full">
              <Image
                src="/fadein.gif"
                width={600}
                height={400}
                alt="normal"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="p-4 text-lg">天空盒效果</p>
          </Link>
        </div>

        <div className="border border-gray-400 rounded-lg overflow-hidden">
          <Link href="/circleTexture">
            <div className="w-full">
              <Image
                src="/fadein.gif"
                width={600}
                height={400}
                alt="normal"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="p-4 text-lg">全景贴图效果</p>
          </Link>
        </div>

        <div className="border border-gray-400 rounded-lg overflow-hidden">
          <Link href="/earth" prefetch={false}>
            <div className="w-full">
              <Image
                src="/fadein.gif"
                width={600}
                height={400}
                alt="normal"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="p-4 text-lg">3D地球</p>
          </Link>
        </div>
      </div>
    </div>
  )
}
