/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    SERVER_API: process.env.SERVER_API_LARAVEL,
    SERVER_FRONT: process.env.LOCAL_FRONT_SERVER
  },
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['https://i.imgur.com', 'i.imgur.com', '*'],
  },
  i18n: {
    locales: ["en", "fr"],
    defaultLocale: "fr"
  },
  poweredByHeader: false
}

module.exports = nextConfig
