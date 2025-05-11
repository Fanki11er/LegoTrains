import { initializeApp } from "firebase/app";
import { getFirestore, connectFirestoreEmulator } from "firebase/firestore";
import { getAuth, connectAuthEmulator } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDP_TztJs6U7lnGP78UcbreW3jrM7P0NRI",
  authDomain: "lego-trains.firebaseapp.com",
  databaseURL:
    "https://lego-trains-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "lego-trains",
  storageBucket: "lego-trains.appspot.com",
  messagingSenderId: "84338623840",
  appId: "1:84338623840:web:c0812b98549557ff2f4a05",
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

if (location.hostname === "localhost") {
  connectFirestoreEmulator(db, "127.0.0.1", 8080);
  connectAuthEmulator(auth, "http://127.0.0.1:9099");
}

//const app = initializeApp(firebaseConfig);
