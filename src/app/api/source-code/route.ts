import { NextRequest, NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const filePath = searchParams.get('file')

  if (!filePath) {
    return NextResponse.json({ error: '未提供文件路径' }, { status: 400 })
  }

  try {
    // 安全检查：确保文件路径在项目目录内
    const safePath = path.join(process.cwd(), 'src', filePath)
    const normalizedPath = path.normalize(safePath)

    if (!normalizedPath.startsWith(path.join(process.cwd(), 'src'))) {
      return NextResponse.json({ error: '无效的文件路径' }, { status: 403 })
    }

    // 检查文件是否存在
    if (!fs.existsSync(normalizedPath)) {
      return NextResponse.json({ error: '文件不存在' }, { status: 404 })
    }

    // 读取文件内容
    const content = fs.readFileSync(normalizedPath, 'utf-8')
    const filename = path.basename(normalizedPath)

    return NextResponse.json({
      content,
      filename,
      path: filePath
    })
  } catch (error) {
    console.error('读取文件失败:', error)
    return NextResponse.json({ error: '读取文件失败' }, { status: 500 })
  }
}
