import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword  } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyAZi9QOzSTGsNmNjsiGgEaXwNcDaUd3WE4",
    authDomain: "fir-signup-form.firebaseapp.com",
    projectId: "fir-signup-form",
    storageBucket: "fir-signup-form.appspot.com",
    messagingSenderId: "6481384555",
    appId: "1:6481384555:web:c2fa04d60c3e535e114d2e"
  };


const app = initializeApp(firebaseConfig);

// const auth = getAuth(app);
export {getAuth, createUserWithEmailAndPassword}

  


  

