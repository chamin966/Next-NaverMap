/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ['search.pstatic.net'],
  },
  i18n: {
    locales: ['ko', 'en'],
    defaultLocale: 'ko',
  },
};

module.exports = nextConfig;
