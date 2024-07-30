if (!/pnpm/.test(process.env.npm_execpath || '')) {
  console.warn(
    `\u001b[33m\n    请使用 pnpm 安装依赖 !!!\n    pnpm 安装指南: https://www.pnpm.cn/installation\u001b[39m\n`
  )
  process.exit(1)
}
