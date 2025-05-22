// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
output: 'export', // Enables static export mode
  images: {
    unoptimized: true, // Allows images from any source without optimization
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', // Allows images from any HTTPS domain
      },
      {
        protocol: 'http',
        hostname: '**', // Allows images from any HTTP domain
      },
    ],
    // Optional: Configure image formats and sizes
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
}

module.exports = nextConfig

// Alternative configuration if you're using ES modules
// export default nextConfig;