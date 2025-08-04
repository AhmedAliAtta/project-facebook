import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBzOHvecxpQrNe_oAQcPXgkJgAp-v3Whp0",
  authDomain: "facebook-f28ff.firebaseapp.com",
  projectId: "facebook-f28ff",
  storageBucket: "facebook-f28ff.appspot.com",
  messagingSenderId: "204169075906",
  appId: "1:204169075906:web:476e29c4b18d5f14d92f5b",
  measurementId: "G-ZCEQXC02ET"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };
