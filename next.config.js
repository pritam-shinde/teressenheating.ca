/** @type {import('next').NextConfig} */
module.exports = {
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'teressenheating.ca',
          },
        ],
        destination: 'https://airlinxheating.ca/:path*',
        permanent: true,
      },
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'www.teressenheating.ca',
          },
        ],
        destination: 'https://airlinxheating.ca/:path*',
        permanent: true,
      },
      {
        source: '/furnace-inspection/',
        destination: '/furnace/',
        permanent: true,
      },
      {
        source: '/boilers/',
        destination: '/boilers-service/',
        permanent: true,
      },
    ];
  },
  reactStrictMode: true,
  trailingSlash: true,
  images: {
    formats: ['image/avif', 'image/webp']
  }
}
