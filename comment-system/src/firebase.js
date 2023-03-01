import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const config = {
    apiKey: "AIzaSyAh51gbXxa9f9z1MuYsLGnqsqc8IFfgN24",
    authDomain: "comment-system-b850b.firebaseapp.com",
    projectId: "comment-system-b850b",
    storageBucket: "comment-system-b850b.appspot.com",
    messagingSenderId: "680671680406",
    appId: "1:680671680406:web:1782ffd88da669cfa92fb7",
    measurementId: "G-Q9Y15SJ08V"
}

const firebaseApp = firebase.initializeApp(config); 

const db = firebaseApp.firestore();
const postsCollection = db.collection('posts');

export const createPost = post => {
    postsCollection.add(post);
}

export const getPosts = async () => {
    return postsCollection.get();
}

