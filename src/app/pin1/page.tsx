'use client'

import Image from 'next/image'
import { useGSAP } from '@gsap/react'
import { useRef } from 'react'
import { gsap } from 'gsap'

export default function Pin() {
  const imgRef = useRef<HTMLImageElement>(null)

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.section15',
        start: 'center center',
        end: '+=2000',
        scrub: 1,
        pin: true,
        toggleActions: 'play none reverse none'
      }
    })

    tl.from('.section15_img_wrapper', {
      width: `${window.innerWidth}px`,
      height: `${window.innerHeight}px`,
      x:
        window.innerWidth -
        document
          .querySelector('.section15_img_wrapper')!
          .getBoundingClientRect().right,
      borderRadius: 0
    })

    tl.from(
      '.section15_block2',
      {
        x: '1000px'
      },
      'spin'
    )

    tl.to('.section15_block', {
      right: 0
    })
  })

  return (
    <article className="bg-stone-900 text-white w-screen overflow-x-hidden text-center">
      <section className="text-6xl font-bold flex justify-center items-center h-screen title1">
        pin效果（1）
      </section>
      <section className="section15 relative flex h-screen items-center bg-white text-center">
        <div className="relative mx-auto w-[1280px]">
          <div className="section15_block absolute top-[50%] flex w-fit translate-y-[-50%] items-center">
            <div className="section15_img_wrapper relative mr-[10px] h-[550px] w-[980px] overflow-hidden rounded-[10px] pt-[100px]">
              <Image
                alt=""
                className="absolute left-0 top-0 z-0 h-full w-full rounded-[2px] object-cover"
                height={1800}
                ref={imgRef}
                src="https://fms.res.meizu.com/dms/2024/05/15/d9f4e662-da49-4421-9e53-a32ee2a89b69.jpg?w=3840&q=75"
                width={3840}
              ></Image>
            </div>
            <div className="section15_block2 flex">
              <div className="flex h-[550px] w-[1325px] flex-wrap text-[20px]">
                <div className="mb-[10px] mr-[10px] h-[320px] w-[395px]">
                  <Image
                    alt=""
                    className="rounded-[10px]"
                    height={320}
                    src="https://fms.res.meizu.com/dms/2024/05/10/0fa66296-f58f-481a-9ad6-5493b90b7300.png?w=640&q=75"
                    width={395}
                  ></Image>
                </div>
                <div className="mr-[10px] h-[320px] w-[270px]">
                  <Image
                    alt=""
                    className="rounded-[10px]"
                    height={320}
                    src="https://fms.res.meizu.com/dms/2024/05/10/4eb8bd4a-79e7-432b-a1ed-a40aa1e6b381.png?w=384&q=75"
                    width={270}
                  ></Image>
                </div>
                <div className="h-[320px] w-[640px]">
                  <Image
                    alt=""
                    className="rounded-[10px]"
                    height={320}
                    src="https://fms.res.meizu.com/dms/2024/05/10/95d6555b-e8c0-4cd0-9a34-6f73b566d86e.png?w=640&q=75"
                    width={640}
                  ></Image>
                </div>
                <div className="mr-[10px] h-[220px] w-[675px]">
                  <Image
                    alt=""
                    className="rounded-[10px]"
                    height={220}
                    src="https://fms.res.meizu.com/dms/2024/05/10/4df80190-d77d-41b4-b2ca-04b8b6c42b8b.png?w=750&q=75"
                    width={675}
                  ></Image>
                </div>
                <div className="mr-[10px] h-[220px] w-[315px]">
                  <Image
                    alt=""
                    className="rounded-[10px]"
                    height={220}
                    src="https://fms.res.meizu.com/dms/2024/05/10/113f6d40-8445-451e-bf25-26a47ad977d4.png?w=384&q=75"
                    width={315}
                  ></Image>
                </div>
                <div className="h-[220px] w-[315px]">
                  <Image
                    alt=""
                    className="rounded-[10px]"
                    height={220}
                    src="https://fms.res.meizu.com/dms/2024/05/15/1c352b09-3bfc-4ecf-8f4f-3115517dcb35.jpg?w=384&q=75"
                    width={315}
                  ></Image>
                </div>
              </div>
              <div className="flex text-[20px]">
                <div className="mx-[10px] h-[550px] w-[540px]">
                  <Image
                    alt=""
                    className="rounded-[10px]"
                    height={550}
                    src="https://fms.res.meizu.com/dms/2024/05/10/9de4d12a-cd14-48a6-8433-935753d49e4b.png?w=640&q=75"
                    width={540}
                  ></Image>
                </div>
                <div className="h-[550px] w-[400px]">
                  <Image
                    alt=""
                    className="rounded-[10px]"
                    height={550}
                    src="https://fms.res.meizu.com/dms/2024/05/15/ba9d76a5-9d0e-4453-86b3-886fbb729bc6.png?w=640&q=75"
                    width={400}
                  ></Image>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="h-screen"></section>
    </article>
  )
}
