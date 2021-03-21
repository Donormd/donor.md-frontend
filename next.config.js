const withPWA = require('next-pwa');
const runtimeCaching = require('next-pwa/cache');

module.exports = {
  poweredByHeader: false,
  reactStrictMode: true,
  images: {
    deviceSizes: [576, 768, 992, 1140],
  },
  pwa: {
    dest: 'public',
    runtimeCaching,
  },
};
