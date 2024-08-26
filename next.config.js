const path = require('path');

module.exports = {
  serverRuntimeConfig: {
    port: process.env.PORT || 3000,
  },
  publicRuntimeConfig: {
    apiUrl: process.env.API_URL_WEB,
  },
  // distDir: "dist",
  reactStrictMode: false,
  images: {
    formats: [
      'image/avif',
      'image/webp',
    ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'assets.vercel.com',
        port: '',
        pathname: 'image/upload/**',
      }
    ],
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    domains: ['placehold.co'],
    unoptimized: true,
  },
  async headers() {
    return [
      {
        source: '/api/:path*',
        // destination: `${process.env.NEXT_PUBLIC_API_URL_WEB}/api/:path*`,
        headers: [
          { key: 'Access-Control-Allow-Credentials', value: 'true' },
          { key: 'Access-Control-Allow-Origin', value: '*' },
          { key: 'Access-Control-Allow-Methods', value: 'GET,OPTIONS,PATCH,DELETE,POST,PUT' },
          { key: 'Access-Control-Allow-Headers', value: 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version' },
        ],
      },
    ]
  },
}