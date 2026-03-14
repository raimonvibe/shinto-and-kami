/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: '/favicon.ico',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=86400, immutable' },
          { key: 'Content-Type', value: 'image/x-icon' },
        ],
      },
    ]
  },
}

module.exports = nextConfig
