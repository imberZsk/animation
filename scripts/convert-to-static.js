const fs = require('fs')
const path = require('path')

// 需要转换的页面配置
const PAGES_TO_CONVERT = [
  {
    pagePath: 'src/app/animations/blur/page.tsx',
    componentPaths: [
      'src/app/animations/components/BlurText-Framer.tsx',
      'src/app/animations/components/BlurText-Gsap.tsx'
    ]
  },
  {
    pagePath: 'src/app/animations/add/page.tsx',
    componentPaths: [
      'src/app/animations/components/AddText-Framer.tsx',
      'src/app/animations/components/AddText-Gsap.tsx'
    ]
  },
  {
    pagePath: 'src/app/animations/shiny/page.tsx',
    componentPaths: ['src/app/animations/components/ShinyText.tsx']
  },
  {
    pagePath: 'src/app/animations/tab/page.tsx',
    componentPaths: []
  },
  {
    pagePath: 'src/app/animations/layout/page.tsx',
    componentPaths: []
  },
  {
    pagePath: 'src/app/animations/stagger/framer/page.tsx',
    componentPaths: ['src/app/animations/stagger/const.ts']
  },
  {
    pagePath: 'src/app/animations/stagger/gsap/page.tsx',
    componentPaths: ['src/app/animations/stagger/const.ts']
  },
  {
    pagePath: 'src/app/animations/exit/framer/page.tsx',
    componentPaths: []
  },
  {
    pagePath: 'src/app/animations/exit/gsap/page.tsx',
    componentPaths: []
  },
  {
    pagePath: 'src/app/animations/timeline/framer/page.tsx',
    componentPaths: []
  },
  {
    pagePath: 'src/app/animations/timeline/gsap/page.tsx',
    componentPaths: []
  },
  {
    pagePath: 'src/app/animations/scroll/gsap/page.tsx',
    componentPaths: []
  },
  {
    pagePath: 'src/app/animations/scrub/gsap/page.tsx',
    componentPaths: []
  },
  {
    pagePath: 'src/app/animations/pin/gsap/page.tsx',
    componentPaths: []
  }
]

// 转义字符串中的特殊字符
function escapeCode(code) {
  return code.replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\${/g, '\\${')
}

// 读取文件内容
function readFileContent(filePath) {
  try {
    return fs.readFileSync(filePath, 'utf-8')
  } catch (error) {
    console.warn(`Warning: Could not read file ${filePath}`)
    return null
  }
}

// 转换单个页面
function convertPage(config) {
  const { pagePath, componentPaths } = config

  console.log(`Converting ${pagePath}...`)

  // 读取页面内容
  const pageContent = readFileContent(pagePath)
  if (!pageContent) {
    console.error(`Failed to read ${pagePath}`)
    return
  }

  // 检查是否已经转换过
  if (pageContent.includes('AnimationSourceStatic') && pageContent.includes('const PAGE_CODE')) {
    console.log(`⏭️  ${pagePath} already converted, skipping...`)
    return
  }

  // 读取组件内容
  const componentCodes = componentPaths
    .map((componentPath) => {
      const content = readFileContent(componentPath)
      if (content) {
        return {
          content: escapeCode(content),
          filename: path.basename(componentPath)
        }
      }
      return null
    })
    .filter(Boolean)

  // 生成页面源码常量（移除AnimationSource相关内容）
  const cleanPageContent = pageContent
    .replace(/import { AnimationSource } from '@\/components\/ui\/animation-source'\n/g, '')
    .replace(/import { AnimationSourceStatic } from '@\/components\/ui\/animation-source-static'\n/g, '')
    .replace(/<AnimationSource[\s\S]*?\/>/g, '')
    .replace(/<AnimationSourceStatic[\s\S]*?\/>/g, '')
    .replace(/\/\* 源码查看按钮 \*\/\s*/g, '')
    .replace(/\/\/ 页面源码[\s\S]*?const PAGE_CODE = `[\s\S]*?`\n\n/g, '')
    .replace(/\/\/ .*?源码[\s\S]*?const COMPONENT_CODE_\d+ = `[\s\S]*?`\n\n/g, '')
    .replace(/^\s*\/\*[\s\S]*?\*\/\s*$/gm, '') // 移除注释块
    .trim()

  const escapedPageContent = escapeCode(cleanPageContent)

  // 生成新的页面内容
  let newContent = pageContent

  // 替换导入
  newContent = newContent.replace(
    /import { AnimationSource } from '@\/components\/ui\/animation-source'/g,
    "import { AnimationSourceStatic } from '@/components/ui/animation-source-static'"
  )

  // 清理现有的源码常量
  newContent = newContent.replace(/\/\/ 页面源码[\s\S]*?const PAGE_CODE = `[\s\S]*?`\n\n/g, '')
  newContent = newContent.replace(/\/\/ .*?源码[\s\S]*?const COMPONENT_CODE_\d+ = `[\s\S]*?`\n\n/g, '')

  // 在第一个 const 或函数声明前添加源码常量
  const insertMatch = newContent.match(/^(const |function |export |class )/m)
  if (insertMatch) {
    const insertIndex = newContent.indexOf(insertMatch[0])

    let sourceCodeConstants = `// 页面源码\nconst PAGE_CODE = \`${escapedPageContent}\`\n\n`

    if (componentCodes.length > 0) {
      componentCodes.forEach((comp, index) => {
        sourceCodeConstants += `// ${comp.filename} 源码\nconst COMPONENT_CODE_${index} = \`${comp.content}\`\n\n`
      })
    }

    newContent = newContent.slice(0, insertIndex) + sourceCodeConstants + newContent.slice(insertIndex)
  }

  // 替换 AnimationSource 使用
  const animationSourceRegex = /<AnimationSource[\s\S]*?\/>/g
  const animationSourceStaticRegex = /<AnimationSourceStatic[\s\S]*?\/>/g

  let componentCodesArray = '[]'

  if (componentCodes.length > 0) {
    const componentItems = componentCodes
      .map(
        (comp, index) =>
          `          {\n            content: COMPONENT_CODE_${index},\n            filename: '${comp.filename}'\n          }`
      )
      .join(',\n')
    componentCodesArray = `[\n${componentItems}\n        ]`
  }

  const staticSourceComponent = `<AnimationSourceStatic
        pageCode={PAGE_CODE}
        pageFilename="${path.basename(pagePath)}"
        componentCodes={${componentCodesArray}}
      />`

  newContent = newContent.replace(animationSourceRegex, staticSourceComponent)
  newContent = newContent.replace(animationSourceStaticRegex, staticSourceComponent)

  // 写入新文件
  fs.writeFileSync(pagePath, newContent, 'utf-8')
  console.log(`✅ Converted ${pagePath}`)
}

// 主函数
function main() {
  console.log('🚀 Starting conversion to static version...\n')

  // 检查是否存在必要的组件
  const staticComponentPath = 'src/components/ui/animation-source-static.tsx'
  if (!fs.existsSync(staticComponentPath)) {
    console.error(`❌ Error: ${staticComponentPath} does not exist`)
    console.error('Please make sure the AnimationSourceStatic component is created first.')
    process.exit(1)
  }

  // 转换所有页面
  PAGES_TO_CONVERT.forEach(convertPage)

  console.log('\n🎉 Conversion completed!')
  console.log('\n📝 Next steps:')
  console.log('1. Review the converted files')
  console.log('2. Test locally with `pnpm dev`')
  console.log('3. Build and deploy to Netlify')
  console.log('\n💡 Note: The original AnimationSource component is still available for local development')
}

// 运行脚本
if (require.main === module) {
  main()
}

module.exports = { convertPage, escapeCode, readFileContent }
