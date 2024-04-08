import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAaHKFYspsPQHtSwJmUlVgL3BHQxvvWXKE",
  authDomain: "devcurso-47029.firebaseapp.com",
  projectId: "devcurso-47029",
  storageBucket: "devcurso-47029.appspot.com",
  messagingSenderId: "326192117352",
  appId: "1:326192117352:web:1a0f874978e8e8bcc46ddd"
}


const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export { db }