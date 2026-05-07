import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDAaDwxIEOPZBQXbn4gGjKVyxU6r7mbALo",
  authDomain: "task-master-9a663.firebaseapp.com",
  projectId: "task-master-9a663",
  storageBucket: "task-master-9a663.firebasestorage.app",
  messagingSenderId: "787902690507",
  appId: "1:787902690507:web:3b6cef5c92a8bf0c99974e",
  measurementId: "G-CX2VQ5WXSD",
};

const app = initializeApp(firebaseConfig);
getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);
