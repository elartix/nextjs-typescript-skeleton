/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '',
  reactStrictMode: true,
  swcMinify: false,
  experimental: {},
  productionBrowserSourceMaps: false,
  devIndicators: {
    buildActivityPosition: 'bottom-right'
  },
  images: {
    domains: ['tailwindui.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.tailwindui.com'
      }
    ]
  }
};

const withPlugins = require('next-compose-plugins');
const { withSuperjson } = require('next-superjson');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
  openAnalyzer: true
});

module.exports = withPlugins([
  [withBundleAnalyzer],
  [withSuperjson]
], nextConfig);
