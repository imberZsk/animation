'use client'

import React, { useState } from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from './dialog'
import { Button } from './button'
import { Copy, Code, Check } from 'lucide-react'

interface CodeViewerProps {
  code: string
  language?: string
  filename?: string
  triggerButton?: React.ReactNode
  open?: boolean
  onOpenChange?: (open: boolean) => void
}

export function CodeViewer({ code, language = 'tsx', filename, triggerButton, open, onOpenChange }: CodeViewerProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('复制失败:', err)
    }
  }

  const defaultTrigger = (
    <Button
      variant="outline"
      size="sm"
      className="flex items-center gap-2 border-gray-600 bg-gray-900 text-gray-300 hover:bg-gray-800 hover:text-white"
    >
      <Code className="h-4 w-4" />
      查看源码
    </Button>
  )

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogTrigger asChild>{triggerButton || defaultTrigger}</DialogTrigger>
      <DialogContent className="max-h-[80vh] max-w-4xl border-gray-700 bg-gray-900">
        <DialogHeader>
          <div className="flex items-center justify-between">
            <DialogTitle className="flex items-center gap-2 text-gray-200">
              <Code className="h-5 w-5" />
              {filename ? `源码 - ${filename}` : '源码'}
            </DialogTitle>
            <Button
              onClick={handleCopy}
              variant="outline"
              size="sm"
              className="border-gray-600 bg-gray-800 text-gray-300 hover:bg-gray-700"
            >
              {copied ? (
                <>
                  <Check className="mr-2 h-4 w-4" />
                  已复制
                </>
              ) : (
                <>
                  <Copy className="mr-2 h-4 w-4" />
                  复制代码
                </>
              )}
            </Button>
          </div>
        </DialogHeader>

        <div className="mt-4 max-h-[60vh] overflow-auto rounded-lg border border-gray-700">
          <SyntaxHighlighter
            language={language}
            style={vscDarkPlus}
            customStyle={{
              margin: 0,
              padding: '16px',
              background: '#1e1e1e',
              fontSize: '14px',
              lineHeight: '1.5'
            }}
            showLineNumbers
            wrapLines
          >
            {code}
          </SyntaxHighlighter>
        </div>
      </DialogContent>
    </Dialog>
  )
}
