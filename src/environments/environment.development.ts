import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

export const environment = {
  firebaseConfig: {
    apiKey: "AIzaSyDjbfLmAdTqhychgiVIz-n_02YoHf1maRY",
    authDomain: "tournament-tracker-gto.firebaseapp.com",
    projectId: "tournament-tracker-gto",
    storageBucket: "tournament-tracker-gto.appspot.com",
    messagingSenderId: "600990292754",
    appId: "1:600990292754:web:ce7ed3827df188e536f1cb",
    measurementId: "G-VBFE3NKDDN"
  }
};

// Initialize Firebase
const app = initializeApp(environment.firebaseConfig);
const analytics = getAnalytics(app);