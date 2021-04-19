'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "24a7c6f2138c59c388d11d38d3959b6b",
"index.html": "a40771517bf4ec1ba1250e85a27e185b",
"/": "a40771517bf4ec1ba1250e85a27e185b",
"main.dart.js": "38a498de357f4b170586734cfb69b8da",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "6fa4771f0b031fbfb8884d63a0cb7b1e",
"assets/AssetManifest.json": "63e4efd1b9fd24cabd7cf3e821069d62",
"assets/NOTICES": "a384f75009075729741ca0bc7adaeb7b",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/assets/ico_stop.png": "3fab1a10aca8349a7dd71d0546de06c1",
"assets/assets/ico_wrong.png": "760de56079f5bca9d6cfb03c680b8cc1",
"assets/assets/ico_w.arrow_nor.png": "4e1151ecb0cdcaca47a218657dc0ff79",
"assets/assets/ico_lock.png": "363acf7c49e180f93dcf63005d8aa042",
"assets/assets/img_splash.png": "0d1953c957cd3e15d2d31705018f546a",
"assets/assets/ico_rotate.png": "e67cae907a2b4478b02dbaf4517f9309",
"assets/assets/ico_restart.png": "fdaaefd196a49f814349c944da116b22",
"assets/assets/switch_sel.png": "90096c905f1bcf66ab2104a3126267bb",
"assets/assets/ico_b.arrow_nor.png": "525188eefdec424c198f8674bdac5c2b",
"assets/assets/ico_mic.png": "c9fd2f3a75ed0b8f7906527baf2d87c9",
"assets/assets/ico_library_sel.png": "4108bfaba1dda71af62c3747e9a5b290",
"assets/assets/ico_correct.png": "253285efe00dea9d55b1fe8cf3cfd7db",
"assets/assets/ico_w.arrow_nor-1.png": "619f84c3862ce22fc7dd57fa27057fd0",
"assets/assets/ico_vocab_nor.png": "d16d6cc706be0734f7ed96082659d1a2",
"assets/assets/ico_bulb.png": "f8176aa614120fd223244d8679245fd4",
"assets/assets/ico_learning_nor.png": "9743ca7f7496eac01186509c1a80dd09",
"assets/assets/ico_mypage_sel.png": "98d3ef0ac457b98b35ce399b3c437d65",
"assets/assets/ico_w.arrow_sel.png": "84ef1694a5499eb4e8efdc604e05db79",
"assets/assets/ico_pause.png": "abdd9b5e3e98cb3eb29ebe1b5913becc",
"assets/assets/ico_b.arrow_sel.png": "5c7839df891673f6463b85f5234b7821",
"assets/assets/switch_nor.png": "e0d99b8f525c2dfcf2e2d7ccb3e83424",
"assets/assets/ico_apple.png": "96f06b9d2e983c8b543247ea973cd6d3",
"assets/assets/ico_w.apple.png": "4a3f76e1e6cb2fcdec9fe6f3a068b668",
"assets/assets/ico_speaker.png": "d491cc2494a794fe1ecf9174930c0a27",
"assets/assets/ico_setting.png": "3479bc159359f0a41792daf15de4d9aa",
"assets/assets/ico_google.png": "0175c8e90fde7d52214435a41a900917",
"assets/assets/ico_learning_sel.png": "a28b94312e298f19b2f40dc8712cb30a",
"assets/assets/ico_mypage_nor.png": "a0e18e06fc3bb2b90abf92b25bbc19c2",
"assets/assets/ico_listen.png": "63868fdf31a0c2e6aa3b338771e01dd5",
"assets/assets/ico_next.png": "f977d99fefeb02137b69d547b6e61e52",
"assets/assets/ico_arrow_sel.png": "47d23c042396736222b0c507201c6b37",
"assets/assets/ico_edit.png": "7ad2c75ee7fd67d4a0b9c94efd602257",
"assets/assets/ico_delete.png": "0727715ea57d67be63b70e873b7923d6",
"assets/assets/ico_navi_back.png": "3256039867ae45be565c2a3398a2fcc4",
"assets/assets/ico_library_nor.png": "26096ea5fbb43d55bdb118befb57cb74",
"assets/assets/ico_w.lock.png": "b30ece16ec0a11b38fffa490c816fb60",
"assets/assets/ico_save.png": "409e66eab5d5def99fc4319d4e091d72",
"assets/assets/ico_close.png": "29eb8909cf7b7ae826d66462598ca0bf",
"assets/assets/ico_play.png": "5662daf12fdba22d01c036cc2577140d",
"assets/assets/ico_back.png": "a01b41c221699afb021ddfa2c9fb722e",
"assets/assets/ico_vocab_sel.png": "0471882360030dba64bfd37666055d59"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
