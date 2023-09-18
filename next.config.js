/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  i18n: {
    "locales": ["default", "en", "ja"],
    "defaultLocale": "default",
    localeDetection: false
  }
}

module.exports = nextConfig
