/** @type {import('next-sitemap').IConfig} */

module.exports = {
    siteUrl: 'http://teressenheating.ca/',
    generateRobotsTxt: true,
    exclude: ['/server.xml'], // <= exclude her
  }