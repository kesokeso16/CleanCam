self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open('clean-cam').then(function(cache) {
      return cache.addAll([
        'index.html',
        'manifest.json'
      ]);
    })
  );
});

self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});
const imageURL = canvas.toDataURL("image/png");
const downloadBtn = document.getElementById('downloadBtn');
downloadBtn.href = imageURL;
downloadBtn.style.display = "inline-block";
document.getElementById('saveNote').style.display = "block";
