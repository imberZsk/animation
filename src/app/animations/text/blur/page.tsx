import BlurTextFramer from '../../components/BlurText-Framer'
import BlurTextGsap from '../../components/BlurText-Gsap'

const BlurTextPage = () => {
  return (
    <div className="flex h-full flex-col gap-4">
      {/* Framer Motion 卡片 */}
      <div className="relative flex flex-1 flex-col justify-center rounded border border-gray-700 bg-gray-900/50 p-6">
        <h3 className="absolute top-10 left-10 mb-2 text-sm font-medium text-gray-300">Framer Motion</h3>

        <BlurTextFramer
          text="seize the day"
          delay={150}
          animateBy="words"
          direction="top"
          // onAnimationComplete={() => {}}
          className="inline-block text-center text-4xl font-bold"
        />
      </div>

      {/* GSAP 卡片 */}
      <div className="relative flex flex-1 flex-col justify-center rounded border border-gray-700 bg-gray-900/50 p-6">
        <h3 className="absolute top-10 left-10 mb-2 text-sm font-medium text-gray-300">GSAP</h3>

        <BlurTextGsap
          text="seize the day"
          delay={50}
          animateBy="words"
          direction="top"
          ease="none"
          className="text-center text-4xl font-bold"
        />
      </div>
    </div>
  )
}

export default BlurTextPage
