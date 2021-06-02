import firebase from 'firebase/app'
import 'firebase/auth'

const app = firebase.initializeApp({
  apiKey: process.env.REACT_APP_FIREVASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREVASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREVASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREVASE_STORAGE_BUCKET, 
  messagingSenderId: process.env.REACT_APP_FIREVASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREVASE_APP_ID,
})

export const auth = app.auth()
export default app
