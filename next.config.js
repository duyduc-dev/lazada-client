/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['lzd-img-global.slatic.net',
      'down-vn.img.susercontent.com', 'localhost']
  }
}

module.exports = nextConfig
