import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCLFgi0QMfm52Ll0z7rziYvnALCmw4bdeU",
    authDomain: "loginregisterrn.firebaseapp.com",
    databaseURL: "https://loginregisterrn.firebaseio.com",
    projectId: "loginregisterrn",
    storageBucket: "loginregisterrn.appspot.com",
    messagingSenderId: "334950735140",
    appId: "1:334950735140:web:644ac2f3b781a3a05067b1",
    measurementId: "G-RZ9Y06FFX7"
}

// Initialize Firebase
const Firebase = firebase.initializeApp(firebaseConfig)

export default Firebase