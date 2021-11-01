// Scripts for firebase and firebase messaging
importScripts('https://www.gstatic.com/firebasejs/8.6.2/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.6.2/firebase-messaging.js');
importScripts('https://cdnjs.cloudflare.com/ajax/libs/platform/1.3.6/platform.min.js');

console.log("from service-worker", platform.name);

// Initialize the Firebase app in the service worker by passing the generated config
const firebaseConfig = {
  apiKey: "AIzaSyAUcFi6lzuw6AC6_OjaDZpLARzf5fjmH8E",
  authDomain: "notificationtest-4477f.firebaseapp.com",
  projectId: "notificationtest-4477f",
  storageBucket: "notificationtest-4477f.appspot.com",
  messagingSenderId: "416489889948",
  appId: "1:416489889948:web:ecc5902c3dbba150fc4d59"
};

firebase.initializeApp(firebaseConfig);

// if ("serviceWorker" in navigator) {
//   navigator.serviceWorker
//     .register("/firebase-messaging-sw.js")
//     .then(function (registration) {
//       console.log("Registration successful, scope is:", registration.scope);
//     })
//     .catch(function (err) {
//       console.log("Service worker registration failed, error:", err);
//     });
// }

if (platform.name !== "IE" && platform.name !== "Safari") {
  // Retrieve firebase messaging
  const messaging = firebase.messaging();
  
  messaging.onBackgroundMessage(function(payload) {
    console.log('Received background message ', payload);

    // const notificationTitle = payload.notification.title;
    // const notificationOptions = {
    //   body: payload.notification.body,
    // };
  
    // self.registration.showNotification(notificationTitle,
    //   notificationOptions);
  });
  messaging.onMessage(function(payload){
    console.log("fronthead",payload)
  })
}
