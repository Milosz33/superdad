import firebase from 'firebase';

// Your web app's Firebase configuration
const firebaseApp = firebase.initializeApp({
    // Your web app's Firebase configuration
        apiKey: "AIzaSyDj1mpMSLuB2iIB8fzZNp1j884mjWVSwuA",
        authDomain: "superdad-contact-form.firebaseapp.com",
        projectId: "superdad-contact-form",
        storageBucket: "superdad-contact-form.appspot.com",
        messagingSenderId: "142030653534",
        appId: "1:142030653534:web:a33deb4cd8b234f02acccf"

});

const db = firebaseApp.firestore();

export { db };
