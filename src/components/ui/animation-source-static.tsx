'use client'

import React, { useState } from 'react'
import { CodeViewer } from './code-viewer'
import { Button } from './button'
import { Code, Loader2 } from 'lucide-react'

interface AnimationSourceStaticProps {
  /** 当前页面的源码内容 */
  pageCode: string
  /** 当前页面文件名 */
  pageFilename: string
  /** 相关组件的源码内容（可选） */
  componentCodes?: Array<{
    content: string
    filename: string
  }>
  /** 自定义触发按钮 */
  triggerButton?: React.ReactNode
  /** 是否显示在右上角 */
  showInCorner?: boolean
}

export function AnimationSourceStatic({
  pageCode,
  pageFilename,
  componentCodes = [],
  triggerButton,
  showInCorner = true
}: AnimationSourceStaticProps) {
  const [dialogOpen, setDialogOpen] = useState(false)

  const handleClick = () => {
    setDialogOpen(true)
  }

  // 合并所有源码
  const allCodes = [{ content: pageCode, filename: pageFilename }, ...componentCodes]

  const combinedCode = allCodes
    .map((file) => `// ${file.filename}\n${file.content}`)
    .join('\n\n' + '//'.repeat(50) + '\n\n')

  const defaultTrigger = (
    <Button
      onClick={handleClick}
      variant="outline"
      size="sm"
      className={`flex cursor-pointer items-center gap-2 border-gray-600 bg-gray-900 text-gray-300 hover:bg-gray-800 hover:text-white ${
        showInCorner ? 'absolute top-4 right-4 z-10' : ''
      }`}
    >
      <Code className="h-4 w-4" />
      查看源码
    </Button>
  )

  const customTrigger = triggerButton ? <div onClick={handleClick}>{triggerButton}</div> : null

  return (
    <CodeViewer
      code={combinedCode}
      language="tsx"
      filename={allCodes.length === 1 ? allCodes[0].filename : `${allCodes.length} 个文件`}
      triggerButton={customTrigger || defaultTrigger}
      open={dialogOpen}
      onOpenChange={setDialogOpen}
    />
  )
}
