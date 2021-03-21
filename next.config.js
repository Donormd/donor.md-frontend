import withPWA from 'next-pwa';
import runtimeCaching from 'next-pwa/cache';

module.exports = withPWA({
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
