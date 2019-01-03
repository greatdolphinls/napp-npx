importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/0b8d558c3418b0c71273.js",
    "revision": "7a554f870ca26f4c03ce37e5764b8382"
  },
  {
    "url": "/_nuxt/0d577b5f9aa3a2fc8e1e.js",
    "revision": "88d580721cefdfe66673939a699cc85b"
  },
  {
    "url": "/_nuxt/10c463c48056d9715a60.js",
    "revision": "8ad55bd7c3a02e8f67e97af1120c7c21"
  },
  {
    "url": "/_nuxt/2bbf37426a82db17829e.js",
    "revision": "00149601d7601fcab328b29d088cfa69"
  },
  {
    "url": "/_nuxt/36406df6b7dbe745dcfb.js",
    "revision": "eeeb7b6fe6660b8b5f68c65a1ca57bbf"
  },
  {
    "url": "/_nuxt/3fc1ca26ffb151a9e93b.js",
    "revision": "5536ab58239752b65d1039d83be845f2"
  },
  {
    "url": "/_nuxt/47a3e4b13ba0383c87d9.js",
    "revision": "82c15718f95d18db2161c4e3c8f22ac7"
  },
  {
    "url": "/_nuxt/5104c39fbfeae001a936.js",
    "revision": "9d4a063c17afb4106987c389722edf34"
  },
  {
    "url": "/_nuxt/5f6d4809781aa7886378.js",
    "revision": "04acf5a3eea4b03fd72967616cdae6d6"
  },
  {
    "url": "/_nuxt/76f4678a3d9e15f3c544.js",
    "revision": "bbab265452e4c969eebdc7da2e1d25fa"
  },
  {
    "url": "/_nuxt/b4f259facc1a726cc6b2.js",
    "revision": "2084683b57d3d625844dd7f805b12c38"
  },
  {
    "url": "/_nuxt/d1a30b0fc952c111ad34.js",
    "revision": "c2c349455208f36e889c8532d750254e"
  },
  {
    "url": "/_nuxt/eacd06a814f83c09e450.js",
    "revision": "9521af9c88f2708a4fa4ae683e4e7c5d"
  },
  {
    "url": "/_nuxt/ffb2df51defb85aa36a6.js",
    "revision": "6c47388f287371b7b17755fbf721b4aa"
  }
], {
  "cacheId": "napp",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')
