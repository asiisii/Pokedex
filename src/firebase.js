import firebase from 'firebase/app'
import 'firebase/auth'

const app = firebase.initializeApp({
  apiKey: "AIzaSyCmhBHkWqiO4NAtSk7bIgVSzQ5dSk46xeY",
  authDomain: "pokedex-development-3f7ce.firebaseapp.com",
  projectId: "pokedex-development-3f7ce",
  storageBucket: "pokedex-development-3f7ce.appspot.com",
  messagingSenderId: "381629222597",
  appId: "1:381629222597:web:486b637ba14d45a66caaac"
})

export const auth = app.auth()
export default app
