import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCGvD4CvgYSzYdxM8uhYKrlZPeWjnp09sM",
    authDomain: "linkedin-clone-d09d6.firebaseapp.com",
    projectId: "linkedin-clone-d09d6",
    storageBucket: "linkedin-clone-d09d6.appspot.com",
    messagingSenderId: "765404697275",
    appId: "1:765404697275:web:013187b829d1acc6098f9e",
    measurementId: "G-8TMQ111NE3"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()

export {db , auth}
export default db