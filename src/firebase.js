import firebase from "firebase/app";
import "firebase/firestore";
// import "firebase/analytics";
// import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBoXn9dsM2ybjw-729darndACzrtJoS3YM",
  authDomain: "skinhub-16e75.firebaseapp.com",
  projectId: "skinhub-16e75",
  storageBucket: "skinhub-16e75.appspot.com",
  messagingSenderId: "373229863278",
  appId: "1:373229863278:web:348bced67e7e43b6a7817f",
};

// Hace que firebase quede conectado a la app de la consola
const app = firebase.initializeApp(firebaseConfig);

export const getFirestore = () => {
  //retorna el acceso al servicio de firestore
  return firebase.firestore(app);
};
