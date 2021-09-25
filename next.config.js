const withPlugins = require('next-compose-plugins');
// const withPWA = require('next-pwa');
// const runtimeCaching = require('next-pwa/cache');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});
const { i18n } = require('./next-i18next.config');

const wrapperPWA = (config) => {
  // const isProd = process.env.NODE_ENV === 'production';
  // if (isProd) return withPWA(config);
  return config;
};

const plugins = [withBundleAnalyzer, wrapperPWA];

const config = {
  compress: false,
  poweredByHeader: false,
  reactStrictMode: true,
  images: {
    deviceSizes: [320, 375, 414, 480, 540, 576, 600, 720, 768, 800, 992, 1200],
  },
  // pwa: {
  //   dest: 'public',
  //   runtimeCaching,
  // },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
};

module.exports = withPlugins(plugins, config);
