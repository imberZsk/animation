'use client'

import { useState } from 'react'
import BlurText from './blur-text'
import SplitText from './split-text'
import AddText from './add-text'

type TabType = 'blur' | 'spring' | 'add'

const Page = () => {
  const [activeTab, setActiveTab] = useState<TabType>('spring')

  const tabs = [
    { id: 'spring' as TabType, name: 'Spring Text' },
    { id: 'blur' as TabType, name: 'Blur Text' },
    { id: 'add' as TabType, name: 'Add Text' }
  ]

  const renderContent = () => {
    switch (activeTab) {
      case 'spring':
        return <SplitText />
      case 'blur':
        return <BlurText />
      case 'add':
        return <AddText />
      default:
        return <SplitText />
    }
  }

  return (
    <div className="flex h-screen bg-black/80">
      {/* 左侧菜单栏 */}
      <div className="w-60 border-r border-gray-700 bg-black/80 p-3 pt-8">
        <h2 className="mb-6 text-sm font-medium text-gray-200">Text Animations</h2>
        <nav className="space-y-1.5">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`w-full cursor-pointer rounded px-3 py-1.5 text-left text-sm transition-colors ${
                activeTab === tab.id
                  ? 'bg-gray-200 font-medium text-black'
                  : 'text-gray-400 hover:bg-gray-800 hover:text-gray-200'
              }`}
            >
              {tab.name}
            </button>
          ))}
        </nav>
      </div>

      {/* 右侧内容区域 */}
      <div className="flex-1 bg-black/80 p-6">{renderContent()}</div>
    </div>
  )
}

export default Page
