// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.RENDEZVOUS_CHAT_API_KEY,
  authDomain: process.env.RENDEZVOUS_CHAT_AUTH_DOMAIN,
  databaseURL: process.env.RENDEZVOUS_CHAT_DATABASE_URL,
  projectId: process.env.RENDEZVOUS_CHAT_PROJECT_ID,
  storageBucket: process.env.RENDEZVOUS_CHAT_STORAGE_BUCKET,
  messagingSenderId: process.env.RENDEZVOUS_CHAT_MESSAGING_SENDER_ID,
  appId: process.env.RENDEZVOUS_CHAT_APP_ID,
  // measurementId: 'G-NF6RS125XK',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
