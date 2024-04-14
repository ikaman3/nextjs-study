/** @type {import('next').NextConfig} */
const nextConfig = {
  //   assetPrefix: '/nextjs-app',
  images: {
    loader: 'custom',
    loaderFile: './ImageLoader.js',
  },
}

module.exports = nextConfig
