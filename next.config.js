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
      {
        source: '/ac-maintainance/',
        destination: '/air-conditioning-maintenance/',
        permanent: true,
      },
    ];
  },
  reactStrictMode: true,
  trailingSlash: true,
  staticPageGenerationTimeout: 180,
  images: {
    formats: ['image/avif', 'image/webp']
  }
}
