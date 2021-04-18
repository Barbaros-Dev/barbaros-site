import firebase from "firebase/app";
import 'firebase/database';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCVWjR0b8U_nhSuK-BiMz7_Yw-ibRu5QxM",
    authDomain: "barbaros-s-site.firebaseapp.com",
    databaseURL: "https://barbaros-s-site-default-rtdb.firebaseio.com",
    projectId: "barbaros-s-site",
    storageBucket: "barbaros-s-site.appspot.com",
    messagingSenderId: "510154374684",
    appId: "1:510154374684:web:9888b48bce3550065d69d9",
    measurementId: "G-5SVMBD2EEK"
}

if(!firebase.apps.length){
    firebase.initializeApp(config)
}

const database = firebase.database();
const auth = firebase.auth();

export { firebase, database, auth };