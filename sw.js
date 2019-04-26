/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["/404.html","f6aaa2c6971f61bcae00b6fd9a27afd9"],["/about/index.html","9dab585f0d2bc253fe647fe2eb78188d"],["/assets/css/main.css","ece10e1ac7d9e87242a8df741a3016dd"],["/assets/img/icons/android-chrome-192x192.png","9a1a85db394cb3ca9cd9b792e2d3013b"],["/assets/img/icons/android-chrome-256x256.png","5d9ae8b01940d6e8723fa8f1e1cd1ba1"],["/assets/img/icons/apple-touch-icon.png","3bb68b826388f4a5e829fa87ef088ab2"],["/assets/img/icons/favicon-16x16.png","c504d55dea027a65292ffde2359e22b2"],["/assets/img/icons/favicon-32x32.png","5ebe885050f143c1f58a5e8fed7c5bfa"],["/assets/img/icons/icon-github.svg","4e06335104a29f91e08d4ef420da7679"],["/assets/img/icons/icon-instagram.svg","1e1119e2628235ee4c8771bff15eb2ca"],["/assets/img/icons/icon-twitter.svg","30551913d5399d6520e8a74b6f1e23f0"],["/assets/img/icons/mstile-150x150.png","f8ea8d18fc4e87d0118c3ea30f99e837"],["/assets/img/posts/WannaCry-ransom.jpg","7a499e7d34b0f3fa42e066df426fb928"],["/assets/img/posts/WannaCry-ransom_lg.jpg","7a499e7d34b0f3fa42e066df426fb928"],["/assets/img/posts/WannaCry-ransom_md.jpg","7a499e7d34b0f3fa42e066df426fb928"],["/assets/img/posts/WannaCry-ransom_placehold.jpg","ce9622a39c96344029bd60cb66c9860c"],["/assets/img/posts/WannaCry-ransom_sm.jpg","efc2ff931e8c68caa23191ce3e6fbbd2"],["/assets/img/posts/WannaCry-ransom_thumb.jpg","6f92d2a6bf14a82d024f67e97a99e243"],["/assets/img/posts/WannaCry-ransom_thumb@2x.jpg","7a499e7d34b0f3fa42e066df426fb928"],["/assets/img/posts/WannaCry-ransom_xs.jpg","a4d07ad5d5d108ff6965a1061949bd08"],["/assets/img/posts/emile-perron-190221.jpg","4705474281b975b7a213b96e71f772e7"],["/assets/img/posts/emile-perron-190221_lg.jpg","aafe35b1dc6d9dc9293c8c2ef4121046"],["/assets/img/posts/emile-perron-190221_md.jpg","03ed35ed656429599daba312f0990a0f"],["/assets/img/posts/emile-perron-190221_placehold.jpg","67f40708f69ab671cee04d624258b85c"],["/assets/img/posts/emile-perron-190221_sm.jpg","4ce4178a62d5a456e90e7bc47bde50f5"],["/assets/img/posts/emile-perron-190221_thumb.jpg","f20085dfe2e36854f8a12f1fd6c50425"],["/assets/img/posts/emile-perron-190221_thumb@2x.jpg","b8fa22c3237de529316037f093b9cb4d"],["/assets/img/posts/emile-perron-190221_xs.jpg","ac32cbd525d72e932499668af5647d03"],["/assets/img/posts/modern.jpg","8ee0f2fb25c24576702888970d6133fe"],["/assets/img/posts/modern_lg.jpg","e7fb3399fe7405e17275b7df7e6e2bb6"],["/assets/img/posts/modern_md.jpg","a0e07040b6f2d47f32dfa64a8f335663"],["/assets/img/posts/modern_placehold.jpg","b0dd8fd959da3ab207d236373f8b47f8"],["/assets/img/posts/modern_sm.jpg","ed4c7acd0cdb33c7045ff240f65b0768"],["/assets/img/posts/modern_thumb.jpg","d5a53f2c2f424b2012052935d4372c4d"],["/assets/img/posts/modern_thumb@2x.jpg","91fd00d37c39afc64567ec174829e3a2"],["/assets/img/posts/modern_xs.jpg","9fad842c5fb0cbc0df2601389a9a2447"],["/assets/img/posts/psscreenVagrant.jpg","302b9bf8d6203c3bab7c1b150eca15f1"],["/assets/img/posts/psscreenVagrant_lg.jpg","302b9bf8d6203c3bab7c1b150eca15f1"],["/assets/img/posts/psscreenVagrant_md.jpg","726428442fd142e2aa1fbb7cca707565"],["/assets/img/posts/psscreenVagrant_placehold.jpg","345692e27c5bf56aa2d558a0fe1d7e03"],["/assets/img/posts/psscreenVagrant_sm.jpg","9ab9736763c2ddbbf33164e362cc3a7f"],["/assets/img/posts/psscreenVagrant_thumb.jpg","b0df31fa99c243822ab2e158d0377380"],["/assets/img/posts/psscreenVagrant_thumb@2x.jpg","406864e2c94b1491f2b2a75571826663"],["/assets/img/posts/psscreenVagrant_xs.jpg","7fca13fb3b910a8c663ffcb0d7b05afc"],["/assets/img/posts/shane-rounce-205187.jpg","bb774d6e05b2b55ffdabe11a8aac7c56"],["/assets/img/posts/shane-rounce-205187_lg.jpg","83cd838024fff9c3faec59fa1da97872"],["/assets/img/posts/shane-rounce-205187_md.jpg","628cf27bf658cf6de9df79ab9bf2cb2d"],["/assets/img/posts/shane-rounce-205187_placehold.jpg","249fc4a09bcfcbd7d5764f14c14ae82e"],["/assets/img/posts/shane-rounce-205187_sm.jpg","a2400a468e10d7d64528ac9c6bc3b6f0"],["/assets/img/posts/shane-rounce-205187_thumb.jpg","c3b2dd0d95a6d3a44d7702f8c06b1e78"],["/assets/img/posts/shane-rounce-205187_thumb@2x.jpg","b0722b63a92c92a44cd92c0201fc92a4"],["/assets/img/posts/shane-rounce-205187_xs.jpg","cd58fd23f3b3c1de2183beb9ed08327b"],["/assets/img/posts/sleek.jpg","a32252a618ffe8ae57c9ce9ab157a01b"],["/assets/img/posts/sleek_lg.jpg","95a1338aa524727f34950f269133e904"],["/assets/img/posts/sleek_md.jpg","4e35ceb2f5fffd3d758fade699b0b85a"],["/assets/img/posts/sleek_placehold.jpg","0f48050cd7776895b98c6ce21597ff39"],["/assets/img/posts/sleek_sm.jpg","f30af3d30b7df905d962e494750f5da0"],["/assets/img/posts/sleek_thumb.jpg","f7b8a94ac9da8e5ea36bb9e459872400"],["/assets/img/posts/sleek_thumb@2x.jpg","e67e2129dc58a100b98a5e027c964dbc"],["/assets/img/posts/sleek_xs.jpg","c8212cace6d446950556a3bf6efe4520"],["/assets/img/posts/vmwarewscreen.jpg","2961a83e3f4a14b0ff0643ac47bf975a"],["/assets/img/posts/vmwarewscreen_lg.jpg","2961a83e3f4a14b0ff0643ac47bf975a"],["/assets/img/posts/vmwarewscreen_md.jpg","72b817e076597974a86b39f7e0f0c854"],["/assets/img/posts/vmwarewscreen_placehold.jpg","a74ee5ab136c4c445c3ffa56492c84eb"],["/assets/img/posts/vmwarewscreen_sm.jpg","cdcc744cd8588f95ec27ded696b970f2"],["/assets/img/posts/vmwarewscreen_thumb.jpg","d2cf0193965f50b9e69367937228e0a9"],["/assets/img/posts/vmwarewscreen_thumb@2x.jpg","3ea39e69676a3817c4f397d3a92bf4bf"],["/assets/img/posts/vmwarewscreen_xs.jpg","a112e99dfa1bf56a067378fc96ac8bea"],["/assets/img/victoria.jpg","63b83f7da0329d40255ead33d5cc8f4e"],["/assets/js/bundle.js","df854a763d7d3fd95381b95081eb822f"],["/assets/metasploitable3/VirtualBoxScreen.png","2adcc380608152f8d4fd7570dce19026"],["/assets/metasploitable3/VirtualBoxScreen2.png","7108581755507a8697a32792ed6be118"],["/assets/metasploitable3/VirtualBoxScreen3.png","75efc07a9c773ff65dcf821361bae4f5"],["/assets/metasploitable3/completed.png","450d16a097ce4ff634846dd7ea782cb1"],["/assets/metasploitable3/importprocess.png","367b8f68994e7154b2f6a4b7f86b3d7a"],["/assets/metasploitable3/vagrantfilescreen.png","689d03071fb1a1873e44cce74d31fbae"],["/assets/nmap/WannaCry-ransom.jpg","7a5055b04cc4c9684a0989a7d163daf6"],["/assets/nmap/creds_msvcrash.png","cc6cf32257c8b386041c8d2bdb985f3a"],["/assets/nmap/credskiwi.png","c1a319daad8ee02d3536b34258a894e3"],["/assets/nmap/disconnect.jpg","7dd2fe0c8f0372629a51b77fea28510b"],["/assets/nmap/disconnect.png","21c2c491611c21b201381fa012e04a36"],["/assets/nmap/msfconsole.jpg","3bedb1a116abdbd83bf92e5b645b18b5"],["/assets/nmap/nmap1.jpg","c1ae53061cfbadc3f54e8f9e72be448a"],["/assets/nmap/shell.png","bc5d9a96509eb7f469de512d131e5956"],["/assets/nmap/smart_hashdump.jpg","e6c8bcc0f2408005d8df26ab270dd8a6"],["/assets/nmap/smart_hashdump.png","b7831549ddc00887f707da6aa2d89e47"],["/assets/nmap/smbms17010.jpg","c184f495ec48b033b20b54f888ae8141"],["/assets/nmap/smbms17010.png","5260acfa6f228dcbfe7959d785825b78"],["/categories/index.html","e858082fc6cd5ed4bf0f3aac642a888c"],["/contact/index.html","eed9ce7c0aa50137a03935d2a5f30d90"],["/gulpfile.babel.js","499ef2edde6e9b4fbafcb7c6f0cbc725"],["/index.html","9de1dc427146f753ce801ca52e9969b0"],["/metasploitable-3/index.html","71d5e209b7a277d76bee10315898e00e"],["/nmap-smb-scan/index.html","0b516f01f4fa988ca0789aefa404912a"],["/sw.js","f7848e80dee3c2015c2e88bb898ab780"],["/vmware-workstation-fixes/index.html","d5c1d6e653822f6366bdbdc0edccb96f"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function (originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function (originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







