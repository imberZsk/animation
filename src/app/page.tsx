import Link from 'next/link'
import { navigationSections } from './const'

export default function Page(): JSX.Element {
  return (
    <div className="flex flex-col justify-center pt-8 pb-10 lg:py-20">
      <div className="mb-20 text-center text-4xl">Animations</div>

      <div className="mx-auto grid w-[90vw] grid-cols-1 gap-4 font-bold lg:grid-cols-3">
        {navigationSections.map((item, index) => {
          return (
            <div className="overflow-hidden rounded-lg border border-gray-400" key={index}>
              <Link href={item.path}>
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
