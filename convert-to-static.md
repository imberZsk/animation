# 🔧 转换为静态版本指南

为了在Netlify等静态托管环境中支持源码展示功能，需要将页面转换为静态版本。

## 📋 转换步骤

### 1. 替换导入

```tsx
// 替换前
import { AnimationSource } from '@/components/ui/animation-source'

// 替换后
import { AnimationSourceStatic } from '@/components/ui/animation-source-static'
```

### 2. 添加源码常量

在组件前添加源码字符串：

```tsx
// 页面源码
const PAGE_CODE = `你的页面完整源码内容`

// 组件源码（如果有的话）
const COMPONENT_CODE = `相关组件的完整源码内容`
```

### 3. 替换组件使用

```tsx
// 替换前
<AnimationSource
  currentPagePath="app/animations/your-page/page.tsx"
  componentPaths={['app/animations/components/YourComponent.tsx']}
/>

// 替换后
<AnimationSourceStatic
  pageCode={PAGE_CODE}
  pageFilename="page.tsx"
  componentCodes={[
    {
      content: COMPONENT_CODE,
      filename: 'YourComponent.tsx'
    }
  ]}
/>
```

## 🎯 示例：转换 blur 页面

```tsx
'use client'

import BlurTextFramer from '../components/BlurText-Framer'
import BlurTextGsap from '../components/BlurText-Gsap'
import { AnimationSourceStatic } from '@/components/ui/animation-source-static'

// 页面源码
const PAGE_CODE = `'use client'

import BlurTextFramer from '../components/BlurText-Framer'
import BlurTextGsap from '../components/BlurText-Gsap'

const BlurTextPage = () => {
  return (
    <div className="relative flex h-full flex-col gap-4">
      {/* Framer Motion 卡片 */}
      <div className="relative flex flex-1 flex-col justify-center rounded border border-gray-700 bg-gray-900/50 p-6">
        <h3 className="absolute top-10 left-10 mb-2 text-sm font-medium text-gray-300">Framer Motion</h3>
        <BlurTextFramer
          text="seize the day"
          delay={150}
          animateBy="words"
          direction="top"
          className="inline-block text-center text-4xl font-bold"
        />
      </div>

      {/* GSAP 卡片 */}
      <div className="relative flex flex-1 flex-col justify-center rounded border border-gray-700 bg-gray-900/50 p-6">
        <h3 className="absolute top-10 left-10 mb-2 text-sm font-medium text-gray-300">GSAP</h3>
        <BlurTextGsap
          text="seize the day"
          delay={50}
          animateBy="words"
          direction="top"
          ease="none"
          className="text-center text-4xl font-bold"
        />
      </div>
    </div>
  )
}

export default BlurTextPage`

// 复制BlurText-Framer.tsx和BlurText-Gsap.tsx的完整内容
const FRAMER_CODE = `// BlurText-Framer.tsx 的完整源码...`
const GSAP_CODE = `// BlurText-Gsap.tsx 的完整源码...`

const BlurTextPage = () => {
  return (
    <div className="relative flex h-full flex-col gap-4">
      {/* 源码查看按钮 */}
      <AnimationSourceStatic
        pageCode={PAGE_CODE}
        pageFilename="page.tsx"
        componentCodes={[
          {
            content: FRAMER_CODE,
            filename: 'BlurText-Framer.tsx'
          },
          {
            content: GSAP_CODE,
            filename: 'BlurText-Gsap.tsx'
          }
        ]}
      />

      {/* 原有页面内容... */}
    </div>
  )
}
```

## ✅ 已转换的页面

- ✅ `src/app/animations/split/page.tsx` - 分割文本动画

## 📝 注意事项

1. **源码同步**：修改页面代码时，记得同步更新 `PAGE_CODE` 常量
2. **转义处理**：源码字符串中的反引号需要转义 `` \` ``
3. **文件大小**：嵌入源码会增加文件大小，但对于展示项目来说这是可接受的
4. **静态部署**：转换后的页面在所有静态托管环境中都能正常工作

## 🚀 快速批量转换脚本

你也可以创建一个Node.js脚本来自动化这个过程，读取源文件并生成包含嵌入源码的新文件。
