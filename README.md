# 🎬 Animation Gallery

一个基于 **Framer Motion** 和 **GSAP** 的现代动画效果展示库，提供丰富的动画示例和实现方案。

## ✨ 特性

- 🎯 **双技术栈支持** - 同时展示 Framer Motion 和 GSAP 实现方案
- 📱 **响应式设计** - 支持桌面端和移动端完美展示
- 🎥 **实时预览** - 每个动画都有对应的视频预览
- ⚡ **性能优化** - 基于 Next.js 14 构建，支持现代化的 React 特性
- 🎨 **现代 UI** - 使用 Tailwind CSS 和 Radix UI 组件
- 🌙 **主题切换** - 支持深色/浅色主题切换

## 🚀 动画类型

### 📝 文本动画

- **Split Text** - 字符分割动画 (GSAP)
- **Blur Text** - 模糊文本效果
- **Add Text** - 文本添加动画
- **Shiny Text** - 闪光文本效果 (纯 CSS)

### 🎭 交互动画

- **Stagger** - 错落动画 (Framer Motion & GSAP)
- **Timeline** - 时间轴动画 (Framer Motion & GSAP)
- **Exit** - 退出动画 (Framer Motion & GSAP)
- **Tab** - 标签切换动画 (Framer Motion)

### 📐 布局动画

- **Layout** - 布局变换动画 (Framer Motion)
- **Scroll** - 滚动触发动画 (Framer Motion & GSAP)
- **Pin** - 固定元素动画 (Framer Motion & GSAP)
- **Parallax** - 视差滚动效果 (Framer Motion & GSAP)

### 🎨 图形动画

- **SVG** - SVG 路径动画 (Framer Motion & GSAP)

## 🛠️ 技术栈

- **框架**: Next.js 14
- **动画库**:
  - Framer Motion ^12.22.0
  - GSAP ^3.13.0 (with @gsap/react ^2.1.2)
- **样式**: Tailwind CSS ^4
- **UI 组件**: Radix UI
- **开发语言**: TypeScript
- **包管理**: pnpm

## 📦 安装与运行

### 环境要求

- Node.js >= 20.9.0
- pnpm (推荐)

### 克隆项目

```bash
git clone https://github.com/your-username/animation-gallery.git
cd animation-gallery
```

### 安装依赖

```bash
pnpm install
```

### 启动开发服务器

```bash
pnpm dev
```

在浏览器中访问 [http://localhost:3000](http://localhost:3000) 查看效果。

### 构建生产版本

```bash
pnpm build
pnpm start
```

## 📁 项目结构

```
src/
├── app/
│   ├── animations/          # 动画页面
│   │   ├── text/           # 文本动画
│   │   ├── stagger/        # 错落动画
│   │   ├── timeline/       # 时间轴动画
│   │   ├── exit/           # 退出动画
│   │   ├── layout/         # 布局动画
│   │   ├── scroll/         # 滚动动画
│   │   ├── pin/            # 固定动画
│   │   ├── parallax/       # 视差效果
│   │   ├── svg/            # SVG动画
│   │   └── tab/            # 标签动画
│   ├── const.ts            # 动画配置
│   └── page.tsx            # 首页
├── components/
│   ├── animations-sidebar.tsx
│   ├── gsap-plugin.tsx
│   └── ui/                 # UI 组件
└── hooks/                  # 自定义 Hooks
```

## 🎯 使用说明

1. **浏览动画**: 在首页网格中点击任意动画预览卡片
2. **查看实现**: 每个动画页面都包含完整的代码实现
3. **技术对比**: 大部分动画都提供 Framer Motion 和 GSAP 两种实现方式
4. **学习参考**: 可以直接复制代码到你的项目中使用

## 📖 动画实现对比

| 动画类型 | Framer Motion | GSAP             | 推荐场景                         |
| -------- | ------------- | ---------------- | -------------------------------- |
| 基础动画 | ✅ 简单易用   | ✅ 性能更佳      | FM: React 项目<br>GSAP: 复杂动画 |
| 滚动动画 | ✅ 内置支持   | ✅ ScrollTrigger | FM: 简单滚动<br>GSAP: 复杂滚动   |
| 时间轴   | ✅ 声明式     | ✅ 精确控制      | FM: React 生态<br>GSAP: 精密控制 |
| SVG 动画 | ✅ 组件化     | ✅ 路径动画      | FM: 组件动画<br>GSAP: 复杂路径   |

## 🤝 贡献

欢迎提交 Issues 和 Pull Requests！

1. Fork 项目
2. 创建功能分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 创建 Pull Request

## 📄 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情。

## 🙏 致谢

- [Framer Motion](https://www.framer.com/motion/) - React 动画库
- [GSAP](https://greensock.com/gsap/) - 高性能动画库
- [Next.js](https://nextjs.org/) - React 全栈框架
- [Tailwind CSS](https://tailwindcss.com/) - CSS 框架
