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
    }
  }
  
  module.exports = nextConfig