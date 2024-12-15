// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FB_apiKey,
  authDomain: import.meta.env.VITE_FB_authDomain,
  projectId: import.meta.env.VITE_FB_projectId,
  storageBucket: import.meta.env.VITE_FB_storageBucket,
  messagingSenderId: import.meta.env.VITE_FB_messagingSenderId,
  appId: import.meta.env.VITE_FB_appId,
  databaseURL: import.meta.env.VITE_FB_DATABASE_URL
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;