import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';


const firebase = {
  apiKey: "AIzaSyDNDT8dwkhcjXa6FFsN1yw1jkx7J-qTOGQ",
  authDomain: "klimatkoll-app.firebaseapp.com",
  databaseURL: "https://klimatkoll-app-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "klimatkoll-app",
  storageBucket: "klimatkoll-app.appspot.com",
  messagingSenderId: "988857972089",
  appId: "1:988857972089:web:c21a04e3e4556ae5c3eba8",
  measurementId: "G-K8GV0NYYJK"
};

const app = initializeApp(firebase);
const analytics = getAnalytics(app);
const auth = getAuth(app);
export { analytics, app, auth };

