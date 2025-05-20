/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
      domains: [
        'images.squarespace-cdn.com',
        'images.unsplash.com',
        'plus.unsplash.com',
        'i.ibb.co'
      ],
      formats: ['image/avif', 'image/webp'],
    },
    eslint: {
        // Warning: This allows production deployment with ESLint errors
        ignoreDuringBuilds: true,
      },
  }
  
  module.exports = nextConfig