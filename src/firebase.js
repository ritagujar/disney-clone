import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCvQwqBoLtcUKBIfgXqexooQSuNon0m3eg",
  authDomain: "disneyplus-clone-50c98.firebaseapp.com",
  projectId: "disneyplus-clone-50c98",
  storageBucket: "disneyplus-clone-50c98.appspot.com",
  messagingSenderId: "526845452183",
  appId: "1:526845452183:web:a5c1c2e920312ba8c8aed2",
  measurementId: "G-ZEC8REK36H",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.fireStore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
