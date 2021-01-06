import { firebase } from '@firebase/app'
import '@firebase/auth'
import '@firebase/firestore'

// firebase init - add your own config here
const firebaseConfig = {
  apiKey: "AIzaSyAIovHAisXJwH9krupiOmKM5ju_Hd9wPbY",
  authDomain: "petsapp-bfaf7.firebaseapp.com",
  projectId: "petsapp-bfaf7",
  storageBucket: "petsapp-bfaf7.appspot.com",
  messagingSenderId: "396258099325",
  appId: "1:396258099325:web:bd22ab20dc346916db3114",
  measurementId: "G-V24GFN52CV"
};
firebase.initializeApp(firebaseConfig)

// utils
const db = firebase.firestore()
const auth = firebase.auth()

// collection references
const usersCollection = db.collection('users')
const adsCollection = db.collection('ads')

// export utils/refs
export {
  db,
  auth,
  usersCollection,
  adsCollection,
}