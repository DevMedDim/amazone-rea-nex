import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDDT7fhcYAQQrSwLwlfIiZQUUM7WVdR_hA",
    authDomain: "mazone-shop.firebaseapp.com",
    projectId: "mazone-shop",
    storageBucket: "mazone-shop.appspot.com",
    messagingSenderId: "323330357164",
    appId: "1:323330357164:web:94ee85977ce1b28286ec09"
  };

  const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig)
  : firebase.app();
  const db = app.firestore();
  export default db;