import { getAuth, createUserWithEmailAndPassword } from "./firebase.js"
const auth = getAuth();
let emailGet = document.getElementById("emailSignup")
let passwordGet = document.getElementById("passwordSignup")
let signupBtn = document.getElementById("signup")

signupBtn.addEventListener("click",()=>{
    console.log(emailGet.value , passwordGet.value)
    createUserWithEmailAndPassword(auth, emailGet.value, passwordGet.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    console.log(user)
    // ...
    location.href = "login.html"
  })
  .catch((error) => {
    const errorCode = error.code;
    console.log(errorCode)
    const errorMessage = error.message;
    console.log(errorMessage)
    // ..
  });

})



