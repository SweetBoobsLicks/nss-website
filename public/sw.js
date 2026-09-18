self.addEventListener("push", (event) => {
  const payload = event.data
    ? event.data.json()
    : {
        title: "NSS PGGC-46",
        body: "New update from NSS portal",
        data: { url: "/" },
      };

  const options = {
    body: payload.body,
    icon: "/icon-192.png",
    badge: "/icon-192.png",
    data: payload.data || { url: "/" },
    vibrate: [100, 50, 100],
  };

  event.waitUntil(self.registration.showNotification(payload.title, options));
});

self.addEventListener("notificationclick", (event) => {
  event.notification.close();

  const url = event.notification.data?.url || "/";
  event.waitUntil(clients.openWindow(url));
});
