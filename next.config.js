/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '',
  reactStrictMode: true,
  swcMinify: false,
  experimental: {},
  productionBrowserSourceMaps: false,
  devIndicators: {
    buildActivityPosition: 'bottom-right'
  }
};

const withPlugins = require('next-compose-plugins');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
  openAnalyzer: true
});

module.exports = withPlugins([
  [withBundleAnalyzer]
], nextConfig);
