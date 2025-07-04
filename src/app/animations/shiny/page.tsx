'use client'

import ShinyText from '../components/ShinyText'
import { AnimationSourceStatic } from '@/components/ui/animation-source-static'

// 页面源码
const PAGE_CODE = `'use client'

import ShinyText from '../components/ShinyText'

const ShinyTextPage = () => {
  return (
    <div className="relative flex h-full flex-col gap-4">
      {}
      

      <div className="relative flex flex-1 flex-col justify-center rounded border border-gray-700 bg-gray-900/50 p-6">
        <h3 className="absolute top-10 left-10 mb-2 text-sm font-medium text-gray-300">CSS</h3>
        <ShinyText text="Just some shiny text!" disabled={false} speed={3} className="mx-auto text-center text-4xl" />
      </div>
    </div>
  )
}

export default ShinyTextPage`

// ShinyText.tsx 源码
const COMPONENT_CODE_0 = `import './ShinyText.css'

interface ShinyTextProps {
  text: string
  disabled?: boolean
  speed?: number
  className?: string
}

const ShinyText = ({ text, disabled = false, speed = 5, className = '' }: ShinyTextProps) => {
  const animationDuration = \`\${speed}s\`

  return (
    <div className={\`shiny-text w-fit \${disabled ? 'disabled' : ''} \${className}\`} style={{ animationDuration }}>
      {text}
    </div>
  )
}

export default ShinyText
`

const ShinyTextPage = () => {
  return (
    <div className="relative flex h-screen flex-col gap-4">
      {/* 源码查看按钮 */}
      <AnimationSourceStatic
        pageCode={PAGE_CODE}
        pageFilename="page.tsx"
        componentCodes={[
          {
            content: COMPONENT_CODE_0,
            filename: 'ShinyText.tsx'
          }
        ]}
      />

      <div className="relative flex flex-1 flex-col justify-center rounded border border-gray-700 bg-gray-900/50 p-6">
        <h3 className="absolute top-10 left-10 mb-2 text-sm font-medium text-gray-300">CSS</h3>
        <ShinyText text="Just some shiny text!" disabled={false} speed={3} className="mx-auto text-center text-4xl" />
      </div>
    </div>
  )
}

export default ShinyTextPage
