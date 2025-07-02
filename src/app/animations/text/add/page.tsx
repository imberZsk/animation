import AddTextFramer from '@/app/animations/components/AddText-Framer'
import AddTextGsap from '@/app/animations/components/AddText-Gsap'

const AddTextPage = () => {
  return (
    <div className="flex h-full flex-col gap-4">
      {/* Framer Motion 卡片 */}
      <div className="relative flex flex-1 flex-col justify-center rounded border border-gray-700 bg-gray-900/50 p-6">
        <h3 className="absolute top-10 left-10 mb-2 text-sm font-medium text-gray-300">Framer Motion</h3>
        <AddTextFramer from={0} to={100} className="text-center text-4xl" />
      </div>

      {/* GSAP 卡片 */}
      <div className="relative flex flex-1 flex-col justify-center rounded border border-gray-700 bg-gray-900/50 p-6">
        <h3 className="absolute top-10 left-10 mb-2 text-sm font-medium text-gray-300">GSAP</h3>
        <AddTextGsap from={0} to={100} className="text-center text-4xl" />
      </div>
    </div>
  )
}

export default AddTextPage
