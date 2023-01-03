import firebase from 'firebase/app'
import 'firebase/database'

const config = {
  apiKey: 'AIzaSyC62rsKg8c3KhBRbcPutMhOW2OiSMp1qao',
  authDomain: 'foodthrift-4ad15.firebaseapp.com',
  projectId: 'foodthrift-4ad15',
  storageBucket: 'foodthrift-4ad15.appspot.com',
  messagingSenderId: '665845356427',
  appId: '1:665845356427:web:706e2173a4659e830cc18e',
  measurementId: 'G-H2VV3HMJSB'
}

if (!firebase.apps.length) {
  firebase.initializeApp(config)
}

export default firebase
