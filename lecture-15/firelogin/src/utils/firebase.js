import firebase from 'firebase';

// Configure Firebase.
const config = {
    apiKey: "AIzaSyCUPoGr6wl0x70G8Q0E1QTs84PTfJ9-U8w",
    authDomain: "specialbatch-d91c0.firebaseapp.com",
    projectId: "specialbatch-d91c0",
    storageBucket: "specialbatch-d91c0.appspot.com",
    messagingSenderId: "721845903855",
    appId: "1:721845903855:web:a589215cbce948e85e961a"
};

firebase.initializeApp(config);

export { firebase }