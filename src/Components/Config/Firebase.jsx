
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
const firebaseConfig = {
  apiKey: "AIzaSyAogc07SYPu4LXbN3Xnt8YjE8g7U52Kl-0",
  authDomain: "olx-clone-7ce68.firebaseapp.com",
  projectId: "olx-clone-7ce68",
  storageBucket: "olx-clone-7ce68.firebasestorage.app",
  messagingSenderId: "81262374507",
  appId: "1:81262374507:web:45e6db5b6e7097d839cb2e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);