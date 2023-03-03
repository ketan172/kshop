import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

export const environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyAjLnxQn7JSCG4Y0gzvyLYOBxkWKvTUw0Q",
        authDomain: "kshop-65ea9.firebaseapp.com",
        projectId: "kshop-65ea9",
        storageBucket: "kshop-65ea9.appspot.com",
        messagingSenderId: "1038655688322",
        appId: "1:1038655688322:web:7c4a8f2b062e9a114fae9b",
        measurementId: "G-5NDHPZH9H0"
    }
 
}

// // Use this to initialize the firebase App
// const firebaseApp = firebase.initializeApp(firebase);

// // Use these for db & auth
// const db = firebaseApp.firestore();
// const auth = firebase.auth();

// export { auth, db };

