/** @type {import('next').NextConfig} */
const dns = require('dns')
if (dns.setDefaultResultOrder) {
  dns.setDefaultResultOrder('ipv4first')
}

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
        destination: '/boiler-services/',
        permanent: true,
      },
      {
        source: '/boilers-service/',
        destination: '/boiler-services/',
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
