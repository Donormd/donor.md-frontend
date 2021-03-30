/* eslint @typescript-eslint/no-var-requires:0 */
const withPWA = require('next-pwa');
const runtimeCaching = require('next-pwa/cache');

const wrapperPWA = (config) => {
  const isProd = process.env.NODE_ENV === 'production';
  if (isProd) return withPWA(config);
  return config;
};

module.exports = wrapperPWA({
  poweredByHeader: false,
  reactStrictMode: true,
  images: {
    deviceSizes: [576, 768, 992, 1140],
  },
  pwa: {
    dest: 'public',
    runtimeCaching,
  },
});
