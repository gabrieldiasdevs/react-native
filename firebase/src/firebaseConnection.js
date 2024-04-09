import { initializeApp } from "firebase/app"
import { getFirestore } from 'firebase/firestore'
import { initializeAuth, getReactNativePersistence } from 'firebase/auth'
import AsyncStorage from '@react-native-async-storage/async-storage'

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

const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage)
})

export { db, auth }