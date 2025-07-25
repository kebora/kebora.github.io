'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "482d1ff8f120ce79bd75e65829113daf",
"assets/AssetManifest.bin.json": "99a6da428f53fcf7a82be9bfd239ab57",
"assets/AssetManifest.json": "1f42d145545b8b2819b44357e8adcb51",
"assets/assets/fonts/Montserrat-Black.ttf": "976649f5b0b109bfc06c008372d90094",
"assets/assets/fonts/Montserrat-Bold.ttf": "c4bd22ebfc4d76f100ebefd2cf916227",
"assets/assets/fonts/Montserrat-ExtraBold.ttf": "bf087000dc560f8f2a318d4ddad4720f",
"assets/assets/fonts/Montserrat-ExtraLight.ttf": "324a0e0cec3a73b38b58703bc5747b17",
"assets/assets/fonts/Montserrat-Italic.ttf": "2e79685963d89831a0878b5fe44ce9b5",
"assets/assets/fonts/Montserrat-Light.ttf": "bcf14e7123e6a0a873151c78e5c316c6",
"assets/assets/fonts/Montserrat-Medium.ttf": "128c3c68ca7303b88442a347292291fa",
"assets/assets/fonts/Montserrat-Regular.ttf": "430be0dd245faf1cc788fac6680c2d71",
"assets/assets/fonts/NovaOval-Regular.ttf": "9d34fd08d90b4d6b47c34937a27dcf0c",
"assets/assets/fonts/PermanentMarker-Regular.ttf": "a7d455d6ad24caf420a0693f5fe28fa7",
"assets/assets/images/api1.png": "e9c7ccfa4d6a91c2b7a8dd0c6c75f1b0",
"assets/assets/images/hpadesktop.png": "5c242396fe214bf2b4914c9e9d1796d2",
"assets/assets/images/ishara_portrait.png": "3cb7b888768b9747c8c1aa3ded5f7824",
"assets/assets/images/islogo/kg.png": "609e7e991cb291ad130c1366a407cb9a",
"assets/assets/images/islogo/sanslogo.png": "3ca3bd155b1bec5e4379d9104234eea4",
"assets/assets/images/loading_clock.riv": "0e85b11b2c7b151325032084677a340e",
"assets/assets/images/mav_ft.png": "0a6cbf2fcec510f06f1bee6f639fa066",
"assets/assets/images/mav_gsd.png": "0f0fd57fe77297141507a9149a536940",
"assets/assets/images/mav_news.png": "71e01e41af370b16945026f6e5d149ed",
"assets/assets/images/mav_news2.png": "29e11b2c682b8812d06d7e0eab2ceab9",
"assets/assets/images/portrait.svg": "cdebcb9d0944cffdc15a2f1e963b2f09",
"assets/assets/images/sesc.png": "acc93b742ecad69affdaaebbe5aff522",
"assets/assets/images/wav_dentcreatives.png": "6367f7b1470a7b32076f9dbe1343e01d",
"assets/assets/images/wav_portfolio.png": "2df7424b89f6c7830ba02f001ca793fc",
"assets/FontManifest.json": "ec50abcdcc754de8126fb95773d473b7",
"assets/fonts/MaterialIcons-Regular.otf": "192f3df70b50da5d9c7bb73249b73552",
"assets/NOTICES": "b69cc4394d7ae07bb3f627b694fc8c0a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "c5d737d8de5ff3f196adb52824fdf532",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "3ca5dc7621921b901d513cc1ce23788c",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "1c8a1a0ff20bdace3f344b850c2ac15b",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/packages/youtube_player_flutter/assets/speedometer.webp": "50448630e948b5b3998ae5a5d112622b",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"favicon.png": "a827c0461a07fb09db17cee715a33eff",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"flutter_bootstrap.js": "140e339d576b1db23b015c97496f891f",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "dd4ede9126731abc8dcafa17a0fb4092",
"/": "dd4ede9126731abc8dcafa17a0fb4092",
"main.dart.js": "5dddc89a8eb7a62231f080ab6ca70ba2",
"manifest.json": "cc2e96c3da56a63cd75ff248335d5cf7",
"version.json": "62011b3cf4966769a962204fcd839f68"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
