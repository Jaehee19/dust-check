import firebase from 'firebase/app'
import 'firebase/auth'

const config = {
  apiKey: 'AIzaSyAEM9WeV-qpYwE_4PlHe0s_fz087IJEcE8',
  authDomain: 'dust-check.firebaseapp.com',
  databaseURL: 'https://dust-check.firebaseio.com',
  projectId: 'dust-check',
  storageBucket: '',
  messagingSenderId: '602215183762'
}

const fb = firebase.initializeApp(config)

export default fb
