/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  // basePath: `${process.env.NEXT_PUBLIC_BASE_PATH}`,
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ["es"],
    defaultLocale: "es",
  }
}

const withNextra = require('nextra')({
  theme: 'nextra-theme-blog',
  themeConfig: './theme.config.tsx'
})

module.exports = withNextra(nextConfig)
