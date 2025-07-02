'use client'

import { useState, useEffect } from 'react'
import BlurText from './blur-text'
import SplitText from './split-text'
import AddText from './add-text'

type TabType = 'blur' | 'split' | 'add'

const Page = () => {
  const [activeTab, setActiveTab] = useState<TabType>('split')
  const [isHydrated, setIsHydrated] = useState(false)

  const tabs = [
    { id: 'split' as TabType, name: 'Split Text' },
    { id: 'blur' as TabType, name: 'Blur Text' },
    { id: 'add' as TabType, name: 'Add Text' }
  ]

  // 在客户端 hydration 完成后立即读取URL参数
  useEffect(() => {
    setIsHydrated(true)

    const urlParams = new URLSearchParams(window.location.search)
    const tabFromUrl = urlParams.get('tab') as TabType
    if (tabFromUrl && ['blur', 'split', 'add'].includes(tabFromUrl)) {
      setActiveTab(tabFromUrl)
    }

    // 监听浏览器前进后退
    const handlePopState = () => {
      const urlParams = new URLSearchParams(window.location.search)
      const tabFromUrl = urlParams.get('tab') as TabType
      if (tabFromUrl && ['blur', 'split', 'add'].includes(tabFromUrl)) {
        setActiveTab(tabFromUrl)
      } else {
        setActiveTab('split')
      }
    }

    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [])

  // 切换tab时更新URL
  const handleTabChange = (tabId: TabType) => {
    setActiveTab(tabId)
    const url = new URL(window.location.href)
    url.searchParams.set('tab', tabId)
    window.history.pushState({}, '', url.toString())
  }

  const renderContent = () => {
    switch (activeTab) {
      case 'split':
        return <SplitText />
      case 'blur':
        return <BlurText />
      case 'add':
        return <AddText />
      default:
        return <SplitText />
    }
  }

  // 在 hydration 完成前显示加载状态或默认内容
  if (!isHydrated) {
    return (
      <div className="flex h-screen bg-black/80">
        {/* 左侧菜单栏 */}
        <div className="w-60 border-r border-gray-700 bg-black/80 p-3 pt-8">
          <h2 className="mb-6 text-sm font-medium text-gray-200">Text Animations</h2>
          <nav className="space-y-1.5">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className="w-full cursor-pointer rounded px-3 py-1.5 text-left text-sm text-gray-400 transition-colors"
              >
                {tab.name}
              </button>
            ))}
          </nav>
        </div>

        {/* 右侧内容区域 - 加载状态 */}
        <div className="flex flex-1 items-center justify-center bg-black/80 p-6">
          <div className="text-gray-400">Loading...</div>
        </div>
      </div>
    )
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
              onClick={() => handleTabChange(tab.id)}
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
