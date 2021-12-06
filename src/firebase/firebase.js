import firebase from "firebase";
import 'firebase/auth';
import 'firebase/firebase-firestore';
import config from './config';

firebase.initializeApp(config);

const auth = firebase.auth();
const db = firebase.firestore();

export {auth, db};