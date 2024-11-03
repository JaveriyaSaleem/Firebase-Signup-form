import { getAuth, signInWithEmailAndPassword,sendPasswordResetEmail} from "./firebase.js";

getAuth()
let emailLogin = document.getElementById('emailSignin')
let passwordLogin = document.getElementById('passwordSignin')
let btnLogin = document.getElementById('signInBtn')
let forgotPass = document.getElementById('forgetPass')
const auth = getAuth();

btnLogin.addEventListener('click',()=>{
    signInWithEmailAndPassword(auth, emailLogin.value, passwordLogin.value)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user)
    })
    .catch((error) => {
      const errorCode = error.code;
      console.log(errorCode)
      const errorMessage = error.message;
      switch (errorCode){
        case "auth/invalid-credential":
            alert("Invalid Credentials")
      }
    });
})
forgotPass.addEventListener('click',()=>{
    sendPasswordResetEmail(auth, emailLogin.value)
  .then(() => {
   alert("Email Sent!Check your mailbox")
  })
  .catch((error) => {
    const errorCode = error.code;
    switch (errorCode){
        case "auth/missing-email":
        alert("Please enter email")
        break;
        case "auth/invalid-email":
        alert("Invalid Email")
        break;
        default:
        console.log("hi")
    }
    console.log(errorCode)
    const errorMessage = error.message;
    // ..
  });
})
let signUpBtn = document.getElementById('signupBtn')
signUpBtn.addEventListener("click",()=>{
    location.href = "index.html"
})

