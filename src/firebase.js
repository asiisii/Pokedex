import firebase from 'firebase/app'
import 'firebase/auth'

const app = firebase.initializeApp({
  apiKey: 'AIzaSyAwA1Il0oVP0qgEhinAs2tKzVIZDhXh16s',
  authDomain: 'pokedex-development.firebaseapp.com',
  projectId: 'pokedex-development',
  storageBucket: 'pokedex-development.appspot.com', 
  messagingSenderId: '592485036172',
  appId: '1:592485036172:web:9e4e57895ad242e557cba9',
})

const auth = app.auth()
export { app, auth }

