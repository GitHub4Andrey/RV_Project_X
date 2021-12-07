import firebase from 'firebase/compat/app';
import "firebase/compat/auth";

const firebaseConfig = {
    apiKey: "AIzaSyChjJMfeHR-lFI-vCZXuNbTGJtTCi8z9pY",
    authDomain: "calendar-cf013.firebaseapp.com",
    projectId: "calendar-cf013",
    storageBucket: "calendar-cf013.appspot.com",
    messagingSenderId: "6181965926",
    appId: "1:6181965926:web:423336ff99105509895da7"
};

const app = firebase.initializeApp(firebaseConfig);

export default app;