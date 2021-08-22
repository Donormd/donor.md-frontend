if (!self.define) {
  const e = (e) => {
      'require' !== e && (e += '.js');
      let s = Promise.resolve();
      return (
        i[e] ||
          (s = new Promise(async (s) => {
            if ('document' in self) {
              const i = document.createElement('script');
              (i.src = e), document.head.appendChild(i), (i.onload = s);
            } else importScripts(e), s();
          })),
        s.then(() => {
          if (!i[e]) throw new Error(`Module ${e} didn’t register its module`);
          return i[e];
        })
      );
    },
    s = (s, i) => {
      Promise.all(s.map(e)).then((e) => i(1 === e.length ? e[0] : e));
    },
    i = { require: Promise.resolve(s) };
  self.define = (s, a, c) => {
    i[s] ||
      (i[s] = Promise.resolve().then(() => {
        let i = {};
        const r = { uri: location.origin + s.slice(1) };
        return Promise.all(
          a.map((s) => {
            switch (s) {
              case 'exports':
                return i;
              case 'module':
                return r;
              default:
                return e(s);
            }
          }),
        ).then((e) => {
          const s = c(...e);
          return i.default || (i.default = s), i;
        });
      }));
  };
}
define('./sw.js', ['./workbox-030153e1'], function (e) {
  'use strict';
  importScripts(),
    self.skipWaiting(),
    e.clientsClaim(),
    e.precacheAndRoute(
      [
        { url: '/_error', revision: 'Kq-owiusuOQe5XXwiyic8' },
        {
          url: '/_next/static/Kq-owiusuOQe5XXwiyic8/_buildManifest.js',
          revision: 'Kq-owiusuOQe5XXwiyic8',
        },
        {
          url: '/_next/static/Kq-owiusuOQe5XXwiyic8/_ssgManifest.js',
          revision: 'Kq-owiusuOQe5XXwiyic8',
        },
        {
          url:
            '/_next/static/chunks/01ce56f8ce1c5d27e76189942ee1b98c9b150809.711a085e0fc64669e78e.js',
          revision: 'Kq-owiusuOQe5XXwiyic8',
        },
        {
          url:
            '/_next/static/chunks/0265feb85496f2a37375034cc94530149fde49bb.3e49f28a4ebb8a270d8a.js',
          revision: 'Kq-owiusuOQe5XXwiyic8',
        },
        {
          url:
            '/_next/static/chunks/29d6c67bd6bb448dc602bfd073b3344e9f9ef061.3856597b62ba55b89b64.js',
          revision: 'Kq-owiusuOQe5XXwiyic8',
        },
        {
          url:
            '/_next/static/chunks/2adcea914c69283f1076d983b042ea69cbba9991.aa039e14170c60f90bd3.js',
          revision: 'Kq-owiusuOQe5XXwiyic8',
        },
        {
          url:
            '/_next/static/chunks/2bb27e1b28134815661cb90d54979a269ff39642.95cca43c4d4ab9683807.js',
          revision: 'Kq-owiusuOQe5XXwiyic8',
        },
        {
          url:
            '/_next/static/chunks/49e5663c7ccc1a8b90ada3c22412f94a860e3638.7ca4f2f5b59c911c74e9.js',
          revision: 'Kq-owiusuOQe5XXwiyic8',
        },
        {
          url:
            '/_next/static/chunks/65a938e47bc96bbae06947233e5aeb2d5d34ef93.bb43cae950eb13edf05c.js',
          revision: 'Kq-owiusuOQe5XXwiyic8',
        },
        {
          url:
            '/_next/static/chunks/74ece7d08a12930595c5b5dd03315b594af8552d.13c50238cc7a56212b62.js',
          revision: 'Kq-owiusuOQe5XXwiyic8',
        },
        {
          url:
            '/_next/static/chunks/77d010a37db0eb0bc725180b984c431079ff263a.a38a9982afa772a1a911.js',
          revision: 'Kq-owiusuOQe5XXwiyic8',
        },
        {
          url:
            '/_next/static/chunks/7f23d6e10eb2652a11e7d3aebc1ab4c93c48f036.27e28f77f3d70e722ca8.js',
          revision: 'Kq-owiusuOQe5XXwiyic8',
        },
        {
          url:
            '/_next/static/chunks/ca4c1ef1ed95b44ec06aa66b6affd2c3ab009150.d1a6fdc4af89e9be8ace.js',
          revision: 'Kq-owiusuOQe5XXwiyic8',
        },
        {
          url: '/_next/static/chunks/commons.f14731b27e2f3e896ac9.js',
          revision: 'Kq-owiusuOQe5XXwiyic8',
        },
        {
          url: '/_next/static/chunks/d90ce74f.b49a158ac8e0abf8851b.js',
          revision: 'Kq-owiusuOQe5XXwiyic8',
        },
        {
          url:
            '/_next/static/chunks/ec4dd5cb3240a4c06d6f8f4bd9fee35ebc2575ff.78eb73daf7f32d5ef3ef.js',
          revision: 'Kq-owiusuOQe5XXwiyic8',
        },
        {
          url:
            '/_next/static/chunks/f1bd3cb8055efd14ad015987a185a9002f2aaad5.81e0a2341dc4b034b7a0.js',
          revision: 'Kq-owiusuOQe5XXwiyic8',
        },
        {
          url: '/_next/static/chunks/framework.de2efbee652401e3d726.js',
          revision: 'Kq-owiusuOQe5XXwiyic8',
        },
        {
          url: '/_next/static/chunks/main-05f1e86af31028bb284d.js',
          revision: 'Kq-owiusuOQe5XXwiyic8',
        },
        {
          url: '/_next/static/chunks/pages/404-a8f99614076276ee70b9.js',
          revision: 'Kq-owiusuOQe5XXwiyic8',
        },
        {
          url: '/_next/static/chunks/pages/_app-6e497ff5433d7ce88683.js',
          revision: 'Kq-owiusuOQe5XXwiyic8',
        },
        {
          url: '/_next/static/chunks/pages/_error-09b6eaa76b4abe9e790a.js',
          revision: 'Kq-owiusuOQe5XXwiyic8',
        },
        {
          url: '/_next/static/chunks/pages/articles/about-donation-2573943ef77d2d9fbb5b.js',
          revision: 'Kq-owiusuOQe5XXwiyic8',
        },
        {
          url: '/_next/static/chunks/pages/articles/become-volunteer-4fdfec36f086030e951b.js',
          revision: 'Kq-owiusuOQe5XXwiyic8',
        },
        {
          url:
            '/_next/static/chunks/pages/articles/benefits-and-privileges-7a40d3ca6e94f1e8f8c1.js',
          revision: 'Kq-owiusuOQe5XXwiyic8',
        },
        {
          url: '/_next/static/chunks/pages/articles/bonus-program-41d0e3e5e9043a7b52c8.js',
          revision: 'Kq-owiusuOQe5XXwiyic8',
        },
        {
          url: '/_next/static/chunks/pages/articles/corporate-donation-6311408f196ac2ed0525.js',
          revision: 'Kq-owiusuOQe5XXwiyic8',
        },
        {
          url: '/_next/static/chunks/pages/articles/donor-and-work-9d44b4e2cd993c06e49b.js',
          revision: 'Kq-owiusuOQe5XXwiyic8',
        },
        {
          url:
            '/_next/static/chunks/pages/articles/how-to-prepare-for-donation-33d9f68f65d68686ea9a.js',
          revision: 'Kq-owiusuOQe5XXwiyic8',
        },
        {
          url:
            '/_next/static/chunks/pages/articles/minimum-requirements-for-donor-aa6fb3e49b793d8601ef.js',
          revision: 'Kq-owiusuOQe5XXwiyic8',
        },
        {
          url: '/_next/static/chunks/pages/articles/plasma-donors-1cb7de0de432662c06d0.js',
          revision: 'Kq-owiusuOQe5XXwiyic8',
        },
        {
          url: '/_next/static/chunks/pages/articles/privacy-policy-52acf961acfb3c1419e7.js',
          revision: 'Kq-owiusuOQe5XXwiyic8',
        },
        {
          url: '/_next/static/chunks/pages/articles/procedural-documents-151bc79852c0375f23db.js',
          revision: 'Kq-owiusuOQe5XXwiyic8',
        },
        {
          url: '/_next/static/chunks/pages/articles/recovery-from-donation-f755bd7c92d8450fdd34.js',
          revision: 'Kq-owiusuOQe5XXwiyic8',
        },
        {
          url: '/_next/static/chunks/pages/articles/support-project-1323cb0fefbd89f74c51.js',
          revision: 'Kq-owiusuOQe5XXwiyic8',
        },
        {
          url: '/_next/static/chunks/pages/articles/user-agreement-d3379b2281a61fe75526.js',
          revision: 'Kq-owiusuOQe5XXwiyic8',
        },
        {
          url: '/_next/static/chunks/pages/articles/who-needs-blood-88efcc7410de81872e04.js',
          revision: 'Kq-owiusuOQe5XXwiyic8',
        },
        {
          url: '/_next/static/chunks/pages/auth-3e15ad471f88f13cbd66.js',
          revision: 'Kq-owiusuOQe5XXwiyic8',
        },
        {
          url: '/_next/static/chunks/pages/dashboard-af7ea8f6e0e2d3de5e01.js',
          revision: 'Kq-owiusuOQe5XXwiyic8',
        },
        {
          url: '/_next/static/chunks/pages/dashboard/archive-aa460fcfe2a50b973bfd.js',
          revision: 'Kq-owiusuOQe5XXwiyic8',
        },
        {
          url: '/_next/static/chunks/pages/dashboard/bonuses-04a10fefd809aedffa1b.js',
          revision: 'Kq-owiusuOQe5XXwiyic8',
        },
        {
          url: '/_next/static/chunks/pages/dashboard/details-4b54942575bf8c911714.js',
          revision: 'Kq-owiusuOQe5XXwiyic8',
        },
        {
          url: '/_next/static/chunks/pages/dashboard/donations-86beda1df50b5883501a.js',
          revision: 'Kq-owiusuOQe5XXwiyic8',
        },
        {
          url: '/_next/static/chunks/pages/dashboard/logout-14aaf541f95bcdd9cd91.js',
          revision: 'Kq-owiusuOQe5XXwiyic8',
        },
        {
          url: '/_next/static/chunks/pages/dashboard/planning-d1b0159a8e796dcfa728.js',
          revision: 'Kq-owiusuOQe5XXwiyic8',
        },
        {
          url: '/_next/static/chunks/pages/dashboard/questionnaire-1fbb8bbcba2ff96c230b.js',
          revision: 'Kq-owiusuOQe5XXwiyic8',
        },
        {
          url: '/_next/static/chunks/pages/dashboard/recipients-a97a457be4f796aa77ce.js',
          revision: 'Kq-owiusuOQe5XXwiyic8',
        },
        {
          url: '/_next/static/chunks/pages/dashboard/reviews-c92251c8488b338d1386.js',
          revision: 'Kq-owiusuOQe5XXwiyic8',
        },
        {
          url: '/_next/static/chunks/pages/dashboard/settings-e2d91b52cb4cc41a1050.js',
          revision: 'Kq-owiusuOQe5XXwiyic8',
        },
        {
          url: '/_next/static/chunks/pages/donor-search-047153ad64f05652dea7.js',
          revision: 'Kq-owiusuOQe5XXwiyic8',
        },
        {
          url: '/_next/static/chunks/pages/donor-stories-80fd7738641f829c50cf.js',
          revision: 'Kq-owiusuOQe5XXwiyic8',
        },
        {
          url: '/_next/static/chunks/pages/index-4bb4b7f6e981a54076d7.js',
          revision: 'Kq-owiusuOQe5XXwiyic8',
        },
        {
          url: '/_next/static/chunks/pages/monitoring-692128bc3c07b8bb5a1e.js',
          revision: 'Kq-owiusuOQe5XXwiyic8',
        },
        {
          url: '/_next/static/chunks/pages/top-donors-9760c775b544c7dbaf62.js',
          revision: 'Kq-owiusuOQe5XXwiyic8',
        },
        {
          url: '/_next/static/chunks/polyfills-b11c1fb6b732584812ef.js',
          revision: 'Kq-owiusuOQe5XXwiyic8',
        },
        {
          url: '/_next/static/chunks/webpack-eb080e3f091731f228fb.js',
          revision: 'Kq-owiusuOQe5XXwiyic8',
        },
        { url: '/_next/static/css/28c57f715760a4d6e6ab.css', revision: 'Kq-owiusuOQe5XXwiyic8' },
        { url: '/_next/static/css/679831fc89b69737c4c0.css', revision: 'Kq-owiusuOQe5XXwiyic8' },
        { url: '/app-icons/128x128.png', revision: '0488af03c47d1ad8dde145dda8bbf351' },
        { url: '/app-icons/144x144.png', revision: 'f55cff57b3c0622dbc7e09798e6f86b7' },
        { url: '/app-icons/192x192.png', revision: 'a152185562d9bc6c46847691a2b02269' },
        { url: '/app-icons/512x512.png', revision: 'd5d98b1f531e41e477d68902970cc4ed' },
        { url: '/app-icons/72x72.png', revision: '2a2e79688c00ff7bd4e9ad22b3f77a58' },
        { url: '/app-icons/96x96.png', revision: '1aafcc6bb12c4c878569bc5daa579e2b' },
        { url: '/app-icons/apple-touch-icon.png', revision: 'bca102c35fea4acc8ac14e1488fcb7e1' },
        { url: '/app-icons/icon.ico', revision: 'bbff5910e749ae41dbed45ac5d7e5950' },
        { url: '/app-icons/icon.svg', revision: '9f9ea5f2e8b2436cb9492cbe61a182fc' },
        { url: '/images/Frame.svg', revision: '9af995b64c58e5d3fbaa63b0f9ea0b5c' },
        { url: '/images/arrow-right.svg', revision: '2e62f16e6167e6ad9b6fdd03363a3aa9' },
        { url: '/images/auth.png', revision: '9f0576a8e3c33ea88c997b4a414e37dd' },
        { url: '/images/avatars/man.png', revision: '80d0c56f4111b7dab3c39dc3adbe6f84' },
        { url: '/images/avatars/women.png', revision: 'f53293bb1319fb42ff07166d7e4e8816' },
        { url: '/images/carousel/next.svg', revision: 'e76fa99737d9db8b4cb55cf9a9678b7f' },
        { url: '/images/carousel/prev.svg', revision: '74eaf3d9a53d2ed7d8434be1e457989a' },
        { url: '/images/clip.svg', revision: '070fd462c6fed7b83b82d3b5a92d22ce' },
        { url: '/images/eu-flag.png', revision: '21c41f10f5a2ae85f270aefcab6d8e53' },
        { url: '/images/feedback.svg', revision: '132be38d53970d58ba484515e08d16a0' },
        { url: '/images/icons/checkbox/check.svg', revision: '4b6518583e9d0ebefc31f3619a3cece4' },
        { url: '/images/icons/checkbox/disable.svg', revision: '739fddab9117aab05259a64ccb112eaf' },
        { url: '/images/icons/checkbox/uncheck.svg', revision: '2db196b38a5ed82866f9e0551705c2ac' },
        { url: '/images/icons/heart+.svg', revision: 'e3933e51ccd08025f17e5baffdf2bddf' },
        { url: '/images/icons/input/paperclip.svg', revision: 'e08cc7d23c1ea7f78fc84e7029c34209' },
        { url: '/images/icons/planning-button.svg', revision: '2c536932a4846fb1a911973fb5f95592' },
        { url: '/images/logo/heart.svg', revision: '9f9ea5f2e8b2436cb9492cbe61a182fc' },
        { url: '/images/pages/404.svg', revision: 'fefc01ca9f3d50a0fe93c45f0aa6af74' },
        { url: '/images/pages/Cool pic.svg', revision: 'dfeac24c1ffaa4697d521e77b732c942' },
        {
          url: '/images/pages/articles/about-donation/Benefits and privileges.svg',
          revision: '84850c8ff788c659f12517a0dc4fae85',
        },
        {
          url: '/images/pages/articles/about-donation/Donor and work.svg',
          revision: '2bf8bcb9d43ec9b4e3f40d4e11c73a3e',
        },
        {
          url: '/images/pages/articles/about-donation/Regulatory documents.svg',
          revision: '7741cb49d6533d96725f9125bc822b13',
        },
        {
          url: '/images/pages/articles/about-donation/donation-questions.svg',
          revision: '96d23d8837c0ff725e4d94c2612a0f7f',
        },
        {
          url: '/images/pages/articles/about-donation/preparation-blood-donation.svg',
          revision: '2615977acce049200fe1c18463c79a3d',
        },
        {
          url: '/images/pages/articles/logo__active.png',
          revision: '4d6ac87ce82f9da1b64858a5c4b9dc58',
        },
        { url: '/images/pages/articles/op.png', revision: '58fa48789075fb85a6e45f2b18c4ebc3' },
        {
          url: '/images/pages/dashboard/left-aside/bonuses.svg',
          revision: '141a97a4195455bd2acd0ba6d2a64fb3',
        },
        {
          url: '/images/pages/dashboard/left-aside/details.svg',
          revision: 'ee6b68667e5000a0fbb0af5f15198b80',
        },
        {
          url: '/images/pages/dashboard/left-aside/donations.svg',
          revision: 'e957134a0d6e5fcb18a8c7c03fe80ac3',
        },
        {
          url: '/images/pages/dashboard/left-aside/logout.svg',
          revision: 'e8318bcfa262f35bdbcf063c0c508ca1',
        },
        {
          url: '/images/pages/dashboard/left-aside/recipients.svg',
          revision: '2e53ce682966d9df83d7a3fc48912563',
        },
        {
          url: '/images/pages/dashboard/left-aside/reviews.svg',
          revision: '663605657dc7d519e8117eded46b80c0',
        },
        {
          url: '/images/pages/dashboard/left-aside/settings.svg',
          revision: '20a0baf42b0486e5facbdebcfb0c5b38',
        },
        {
          url: '/images/pages/dashboard/right-aside/add-donation.svg',
          revision: 'a2afcf80686a884d1fcd00df4c434c76',
        },
        {
          url: '/images/pages/dashboard/right-aside/question.svg',
          revision: '76679af9a2b4b3b5119fcf09b3806376',
        },
        {
          url: '/images/pages/dashboard/right-aside/schedule-donation.svg',
          revision: '876f005e29cd36e7e5268f8b7546f521',
        },
        {
          url: '/images/pages/dashboard/right-aside/support-project.svg',
          revision: '1654c1a9d5b5bfc30d62fc08a988d426',
        },
        { url: '/images/pages/donations.svg', revision: 'dfeac24c1ffaa4697d521e77b732c942' },
        {
          url: '/images/pages/home/about-donations/donation-going.svg',
          revision: '574a4424507fef726f0bc30dbcda47e6',
        },
        {
          url: '/images/pages/home/about-donations/donor-requirements.svg',
          revision: 'b6aadda7eacd4a699156567f9f1651b1',
        },
        {
          url: '/images/pages/home/about-donations/hover-md.svg',
          revision: '424e8d85666a9c699d0045cda91fc7f5',
        },
        {
          url: '/images/pages/home/about-donations/hover.svg',
          revision: '74336dda4227b830ceffa12f66d21e9c',
        },
        {
          url: '/images/pages/home/about-donations/preparation-donation.svg',
          revision: '67a88c712867bd68bee9e9995bd58e9b',
        },
        {
          url: '/images/pages/home/hearts/enough.svg',
          revision: '07644230705b6eb7c8495557c92e9693',
        },
        { url: '/images/pages/home/hearts/few.svg', revision: 'acb7efd92d429a6324aea77cb60bbfd5' },
        { url: '/images/pages/home/hearts/lot.svg', revision: '19e5b442e9f02bbd4e9279449125b840' },
        { url: '/images/pages/home/love.svg', revision: '2dffd0dc39a869f8ea2aab3668f59536' },
        { url: '/images/pages/home/top-donors.png', revision: 'a9332f37a706f4bba39c6a2b250f5e32' },
        {
          url: '/images/pages/home/we-are-in-social.png',
          revision: '198dcaa7504a54f7306fd51bbf2b8a66',
        },
        { url: '/images/pages/love-pic.png', revision: '0e7e2b07019c66bd6c8ccb2ec8e5d686' },
        { url: '/images/pages/recipients.svg', revision: '034d2f33069361fd3cbfdd310cd3758f' },
        { url: '/images/pages/settings.svg', revision: '55f56426f5a21f6ed61c61f3fb050140' },
        { url: '/images/pages/welcome.png', revision: 'e2765564ece1ca215d4839d2350bd33f' },
        { url: '/images/rate/filled.svg', revision: 'a75f21fa0343d703ed97c74f767ef825' },
        { url: '/images/rate/outlined.svg', revision: '5503a5bd298117c13b21a2f522df0f84' },
        { url: '/images/social-icons/fb.svg', revision: '2c67ad956b9a2785241e426236764a3a' },
        { url: '/images/social-icons/google.svg', revision: '4aefe9d87b7e120b51eec089625e725f' },
        { url: '/images/social-icons/instagram.svg', revision: 'deff5eeb24c23dc4d77ab8a346387b9f' },
        { url: '/images/social-icons/ok.svg', revision: '4b45a9f1cbc877df49e6cefe58a32bbc' },
        { url: '/images/social-icons/vk.svg', revision: '613b9d89817d60261030bc7fed0076fd' },
        { url: '/manifest.json', revision: '5500ec0d6c5335f8f9b5a2bdcc636de7' },
        { url: '/stub.svg', revision: '931e05a7291ddd48c77dc6689655cbef' },
      ],
      { ignoreURLParametersMatching: [] },
    ),
    e.cleanupOutdatedCaches(),
    e.registerRoute(
      '/',
      new e.NetworkFirst({
        cacheName: 'start-url',
        networkTimeoutSeconds: 10,
        plugins: [
          { requestWillFetch: async ({ request: e }) => (Request(), e) },
          new e.ExpirationPlugin({ maxEntries: 1, maxAgeSeconds: 86400, purgeOnQuotaError: !0 }),
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,
      new e.CacheFirst({
        cacheName: 'google-fonts',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 31536e3, purgeOnQuotaError: !0 }),
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      /\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-font-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800, purgeOnQuotaError: !0 }),
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      /\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-image-assets',
        plugins: [
          {
            handlerDidError: async ({ request: e, event: s, error: i, state: a }) =>
              caches.match('/offline.jpg', { ignoreSearch: !0 }),
          },
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400, purgeOnQuotaError: !0 }),
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      /\.(?:mp3|mp4)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-media-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400, purgeOnQuotaError: !0 }),
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      /\.(?:js)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-js-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400, purgeOnQuotaError: !0 }),
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      /\.(?:css|less)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-style-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400, purgeOnQuotaError: !0 }),
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      /\.(?:json|xml|csv)$/i,
      new e.NetworkFirst({
        cacheName: 'static-data-assets',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400, purgeOnQuotaError: !0 }),
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      /\/api\/.*$/i,
      new e.NetworkFirst({
        cacheName: 'apis',
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 16, maxAgeSeconds: 86400, purgeOnQuotaError: !0 }),
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      /.*/i,
      new e.NetworkFirst({
        cacheName: 'others',
        networkTimeoutSeconds: 10,
        plugins: [
          {
            handlerDidError: async ({ request: e, event: s, error: i, state: a }) =>
              caches.match('/_error', { ignoreSearch: !0 }),
          },
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400, purgeOnQuotaError: !0 }),
        ],
      }),
      'GET',
    );
});
