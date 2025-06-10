
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyATDa3t3gcPQrGxOuMk3gOvbEPO-fH_stg",
  authDomain: "prepflow-9a628.firebaseapp.com",
  projectId: "prepflow-9a628",
  storageBucket: "prepflow-9a628.firebasestorage.app",
  messagingSenderId: "166588360039",
  appId: "1:166588360039:web:b8f06ae26b2ed65c6efbc2",
  measurementId: "G-YYK6GET3VD"
};

const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);