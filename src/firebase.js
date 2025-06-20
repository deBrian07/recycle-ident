import { initializeApp } from "firebase/app";
import { getAuth, signOut as firebaseSignOut, connectAuthEmulator } from "firebase/auth";

const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

// Configure auth for better CORS handling
if (import.meta.env.DEV) {
  // Only in development - you might want to use auth emulator
  // Uncomment the line below if you want to use Firebase Auth Emulator
  // connectAuthEmulator(auth, "http://localhost:9099");
}

export const signOut = () => firebaseSignOut(auth);