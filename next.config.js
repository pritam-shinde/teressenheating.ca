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
    ];
  },
  reactStrictMode: true,
  trailingSlash: true,
  images: {
    formats: ['image/avif', 'image/webp']
  }
}
