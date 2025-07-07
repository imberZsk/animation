/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'store.res.meizu.com',
        port: '',
        pathname: '/www/**'
      },
      {
        protocol: 'https',
        hostname: 'fms.res.meizu.com',
        port: '',
        pathname: '/dms/**'
      },
      {
        protocol: 'https',
        hostname: 'openfile.meizu.com',
        port: '',
        pathname: '/**'
      },
      {
        protocol: 'https',
        hostname: 'cimg2.res.meizu.com',
        port: '',
        pathname: '/www/**'
      },
      {
        protocol: 'https',
        hostname: 'ssm.res.meizu.com',
        port: '',
        pathname: '/**'
      },
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com',
        port: '',
        pathname: '/**'
      }
    ]
  },
  webpack: (config, { isServer }) => {
    // 忽略 fm 文件夹
    config.watchOptions = {
      ...config.watchOptions,
      ignored: ['**/fm/**']
    }

    // 添加 fm 文件夹到 externals
    config.externals = [...(config.externals || []), 'fm']

    return config
  },
  // 忽略 fm 文件夹的类型检查
  typescript: {
    ignoreBuildErrors: true
  }
}

export default nextConfig
