self.addEventListener("install", function(event) {
	event.waitUntil(self.skipWaiting());
});

self.addEventListener("activate", function(event) {
	event.waitUntil(clients.claim());
});

self.addEventListener("fetch", function(event) {
});