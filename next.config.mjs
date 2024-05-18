/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
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
      }
    ]
  }
}

export default nextConfig
