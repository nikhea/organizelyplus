// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "organizelyplus.firebaseapp.com",
  projectId: "organizelyplus",
  storageBucket: "organizelyplus.appspot.com",
  messagingSenderId: "383371956224",
  appId: "1:383371956224:web:690ef8e7b42a08a60e48e5",
  measurementId: "G-LJ2S8KSFHL",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default { app };
