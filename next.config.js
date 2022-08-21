/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
      SERVER_API: process.env.SERVER_API_LARAVEL,
      SERVER_FRONT: process.env.LOCAL_FRONT_SERVER,
  },
  i18n: {
      locales: ['en', 'fr'],
      defaultLocale: 'fr'
  },
  images: {
      domains: ['https://i.imgur.com', 'i.imgur.com', '*'],
  },
  swcMinify: true,
  poweredByHeader: false
}

module.exports = nextConfig
