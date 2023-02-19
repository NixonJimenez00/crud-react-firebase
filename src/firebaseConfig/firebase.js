import { initializeApp } from "firebase/app";

import { getFirestore } from '@firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyD07xBBHevhzcvj8-a4NEYVDPLexlxA42c",
    authDomain: "tareapw.firebaseapp.com",
    projectId: "tareapw",
    storageBucket: "tareapw.appspot.com",
    messagingSenderId: "729338244266",
    appId: "1:729338244266:web:4b8997651a1b89acafb4d3"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)