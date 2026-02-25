
// Replace with your Firebase config
const firebaseConfig = {
    apiKey: "AIzaSyBPfvV9uw5i_TQjONqXdL__ZPpidSdnVAU",
    authDomain: "stylekart-26639.firebaseapp.com",
    projectId: "stylekart-26639",
    storageBucket: "stylekart-26639.firebasestorage.app",
    messagingSenderId: "752821082150",
    appId: "1:752821082150:web:a73c7f5113c9b5c7a4aee7",
    measurementId: "G-ESQ2LDCRG0"
  };
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
