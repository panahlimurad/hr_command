import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBbB0qRwOMPQGEfIm01sXUfR4zFNiVG2t4",
  authDomain: "hrcommand-1a24b.firebaseapp.com",
  databaseURL:
    "https://hrcommand-1a24b-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "hrcommand-1a24b",
  storageBucket: "hrcommand-1a24b.appspot.com",
  messagingSenderId: "327679558547",
  appId: "1:327679558547:web:da7b0266bfacbe41965e66",
  measurementId: "G-5GEX5JJ525",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider()

export { auth, analytics, db, provider};
