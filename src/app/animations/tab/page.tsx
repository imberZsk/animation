'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import { AnimationSourceStatic } from '@/components/ui/animation-source-static'

/**
 * ==============   Data   ================
 */

// 页面源码
const PAGE_CODE = `'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'

const allIngredients = [
  { icon: '🍅', label: 'Tomato' },
  { icon: '🥬', label: 'Lettuce' },
  { icon: '🧀', label: 'Cheese' },
  { icon: '🥕', label: 'Carrot' },
  { icon: '🍌', label: 'Banana' },
  { icon: '🫐', label: 'Blueberries' },
  { icon: '🥂', label: 'Champers?' }
]

const [tomato, lettuce, cheese] = allIngredients
const tabs = [tomato, lettuce, cheese]

export default function TabAnimation() {
  const [selectedTab, setSelectedTab] = useState(tabs[0])

  return (
    <div className="relative flex h-full items-center justify-center">
      {}
      
      <div className="flex h-[60vh] max-h-[360px] w-[480px] flex-col overflow-hidden rounded-xl bg-white">
        <nav className="h-11 rounded-t-xl border-b border-gray-200 bg-[#fdfdfd] p-[5px] px-[5px] pt-[5px] pb-0">
          <ul className="m-0 flex w-full list-none p-0 text-sm font-medium">
            {tabs.map((item) => (
              <motion.li
                key={item.label}
                initial={false}
                animate={{
                  backgroundColor: item === selectedTab ? '#eee' : '#eee0'
                }}
                className="relative flex h-full w-full min-w-0 flex-1 cursor-pointer items-center justify-between rounded-t-[5px] bg-white px-4 py-2.5 text-[#0f1115] select-none"
                onClick={() => setSelectedTab(item)}
              >
                {\`\${item.icon} \${item.label}\`}
                {item === selectedTab ? (
                  <motion.div
                    className="absolute right-0 -bottom-0.5 left-0 h-0.5 bg-[#ff4132]"
                    layoutId="underline"
                    id="underline"
                  />
                ) : null}
              </motion.li>
            ))}
          </ul>
        </nav>
        <main className="flex flex-1 items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedTab ? selectedTab.label : 'empty'}
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="text-[128px]"
            >
              {selectedTab ? selectedTab.icon : '😋'}
            </motion.div>
          </AnimatePresence>
        </main>
      </div>
    </div>
  )
}`

const allIngredients = [
  { icon: '🍅', label: 'Tomato' },
  { icon: '🥬', label: 'Lettuce' },
  { icon: '🧀', label: 'Cheese' },
  { icon: '🥕', label: 'Carrot' },
  { icon: '🍌', label: 'Banana' },
  { icon: '🫐', label: 'Blueberries' },
  { icon: '🥂', label: 'Champers?' }
]

const [tomato, lettuce, cheese] = allIngredients
const tabs = [tomato, lettuce, cheese]

export default function TabAnimation() {
  const [selectedTab, setSelectedTab] = useState(tabs[0])

  return (
    <div className="relative flex h-full items-center justify-center">
      {/* 源码查看按钮 */}
      <AnimationSourceStatic
        pageCode={PAGE_CODE}
        pageFilename="page.tsx"
        componentCodes={[]}
      />
      <div className="flex h-[60vh] max-h-[360px] w-[480px] flex-col overflow-hidden rounded-xl bg-white">
        <nav className="h-11 rounded-t-xl border-b border-gray-200 bg-[#fdfdfd] p-[5px] px-[5px] pt-[5px] pb-0">
          <ul className="m-0 flex w-full list-none p-0 text-sm font-medium">
            {tabs.map((item) => (
              <motion.li
                key={item.label}
                initial={false}
                animate={{
                  backgroundColor: item === selectedTab ? '#eee' : '#eee0'
                }}
                className="relative flex h-full w-full min-w-0 flex-1 cursor-pointer items-center justify-between rounded-t-[5px] bg-white px-4 py-2.5 text-[#0f1115] select-none"
                onClick={() => setSelectedTab(item)}
              >
                {`${item.icon} ${item.label}`}
                {item === selectedTab ? (
                  <motion.div
                    className="absolute right-0 -bottom-0.5 left-0 h-0.5 bg-[#ff4132]"
                    layoutId="underline"
                    id="underline"
                  />
                ) : null}
              </motion.li>
            ))}
          </ul>
        </nav>
        <main className="flex flex-1 items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedTab ? selectedTab.label : 'empty'}
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="text-[128px]"
            >
              {selectedTab ? selectedTab.icon : '😋'}
            </motion.div>
          </AnimatePresence>
        </main>
      </div>
    </div>
  )
}
