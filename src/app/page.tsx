import Link from 'next/link'

// export const metadata = {
//   metadataBase: new URL(`${process.env.REAL_WEBSITE_URL}`),
//   openGraph: {
//     type: 'website',
//     images: '/opengraph-image.jpeg'
//   }
// }

export default function Page(): JSX.Element {
  const arr = [
    { href: '/animations/timeline', src: '/animations/timeline.mov', name: '时间轴动画' }
    // { href: '/animations/fade-in2', src: '/animations/fade-in2.png', name: '渐入与滚动动画效果' },
    // { href: '/animations/pin1', src: '/animations/pin1.png', name: '滚动钉住动画效果' },
    // { href: '/animations/pin2', src: '/animations/pin2.png', name: '动态叠层滚动效果' }
  ]

  return (
    <div className="flex flex-col justify-center pb-10 pt-8 lg:pt-40">
      <div className="mb-8 text-center text-4xl">Demos</div>

      <div className="mx-auto grid w-[90vw] grid-cols-1 gap-4 font-bold lg:grid-cols-3">
        {arr.map((item, index) => {
          return (
            <div className="overflow-hidden rounded-lg border border-gray-400" key={index}>
              <Link href={item.href}>
                <div className="h-[45vw] w-full lg:h-[calc((90vw_-_32px_-_6px)/3/2)]">
                  <video
                    src={item.src}
                    width={600}
                    height={400}
                    className="h-full w-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                  />
                </div>
                {/* <p className="p-4 text-lg">{item.name}</p> */}
              </Link>
            </div>
          )
        })}
      </div>
    </div>
  )
}
