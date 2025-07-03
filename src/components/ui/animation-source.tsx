'use client'

import React, { useState } from 'react'
import { CodeViewer } from './code-viewer'
import { Button } from './button'
import { Code, Loader2 } from 'lucide-react'

interface AnimationSourceProps {
  /** 当前页面的文件路径（相对于src目录） */
  currentPagePath: string
  /** 相关组件文件路径（可选） */
  componentPaths?: string[]
  /** 自定义触发按钮 */
  triggerButton?: React.ReactNode
  /** 是否显示在右上角 */
  showInCorner?: boolean
}

interface SourceFile {
  content: string
  filename: string
  path: string
}

export function AnimationSource({
  currentPagePath,
  componentPaths = [],
  triggerButton,
  showInCorner = true
}: AnimationSourceProps) {
  const [sourceFiles, setSourceFiles] = useState<SourceFile[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [dialogOpen, setDialogOpen] = useState(false)

  const fetchSourceCode = async () => {
    if (sourceFiles.length > 0) {
      // 如果已有源码，直接打开Dialog
      setDialogOpen(true)
      return
    }

    setIsLoading(true)
    try {
      const allPaths = [currentPagePath, ...componentPaths]
      const promises = allPaths.map(async (filePath) => {
        const response = await fetch(`/api/source-code?file=${encodeURIComponent(filePath)}`)
        if (response.ok) {
          return await response.json()
        }
        return null
      })

      const results = await Promise.all(promises)
      const validFiles = results.filter(Boolean)
      setSourceFiles(validFiles)
      // 加载完成后自动打开Dialog
      setDialogOpen(true)
    } catch (error) {
      console.error('获取源码失败:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const combinedCode = sourceFiles
    .map((file) => `// ${file.filename}\n${file.content}`)
    .join('\n\n' + '//'.repeat(50) + '\n\n')

  const defaultTrigger = (
    <Button
      onClick={fetchSourceCode}
      disabled={isLoading}
      variant="outline"
      size="sm"
      className={`flex cursor-pointer items-center gap-2 border-gray-600 bg-gray-900 text-gray-300 hover:bg-gray-800 hover:text-white ${
        showInCorner ? 'absolute top-4 right-4 z-10' : ''
      }`}
    >
      {isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Code className="h-4 w-4" />}
      查看源码
    </Button>
  )

  const customTrigger = triggerButton ? <div onClick={fetchSourceCode}>{triggerButton}</div> : null

  // 如果还没有源码，显示加载按钮
  if (sourceFiles.length === 0) {
    return customTrigger || defaultTrigger
  }

  // 有源码后，显示CodeViewer并控制Dialog状态
  return (
    <CodeViewer
      code={combinedCode}
      language="tsx"
      filename={sourceFiles.length === 1 ? sourceFiles[0].filename : `${sourceFiles.length} 个文件`}
      triggerButton={customTrigger || defaultTrigger}
      open={dialogOpen}
      onOpenChange={setDialogOpen}
    />
  )
}
