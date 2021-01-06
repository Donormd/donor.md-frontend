// eslint-disable-next-line
const path = require('path');

module.exports = {
  poweredByHeader: false,
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
};
