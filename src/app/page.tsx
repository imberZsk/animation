import Link from 'next/link'

export default function Page(): JSX.Element {
  const arr = [
    { href: '/animations/text', src: '/animations/text.mov', name: '各种文字动画' },
    { href: '/animations/timeline', src: '/animations/timeline.mov', name: '时间轴动画' },
    { href: '/animations/exit', src: '/animations/exit.mov', name: '退出动画' }
  ]

  return (
    <div className="flex flex-col justify-center pt-8 pb-10 lg:pt-20">
      <div className="mb-16 text-center text-4xl">Demos</div>

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
                <p className="p-4 text-lg">{item.name}</p>
              </Link>
            </div>
          )
        })}
      </div>
    </div>
  )
}
