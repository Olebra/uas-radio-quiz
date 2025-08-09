
self.addEventListener("install", function(e) {
    e.waitUntil(
        caches.open("uas-quiz").then(function(cache) {
            return cache.addAll(["uas_radio_quiz_pwa.html", "manifest.json", "icon.png"]);
        })
    );
});
self.addEventListener("fetch", function(e) {
    e.respondWith(
        caches.match(e.request).then(function(response) {
            return response || fetch(e.request);
        })
    );
});
