import { getAuth, signInWithEmailAndPassword,sendPasswordResetEmail} from "./firebase.js";

getAuth()
let emailLogin = document.getElementById('emailSignin')
let passwordLogin = document.getElementById('passwordSignin')
let btnLogin = document.getElementById('signInBtn')
let forgotPass = document.getElementById('forgetPass')
const auth = getAuth();

if(btnLogin){
    btnLogin.addEventListener('click',()=>{
        signInWithEmailAndPassword(auth, emailLogin.value, passwordLogin.value)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user)
          setTimeout(()=>{
            location.href = "dashboard.html"
        },2000)
        })
        .catch((error) => {
          const errorCode = error.code;
          console.log(errorCode)
          const errorMessage = error.message;
          switch (errorCode){
            case "auth/invalid-credential":
                alert("Invalid Credentials")
                break;
            case "auth/missing-password":
            alert("Kindly Add your password to continue")
            break;
            
          }
        });
    })
}
if(forgotPass){
    forgotPass.addEventListener('click',()=>{
        let promptInput = prompt("Enter Value")
        sendPasswordResetEmail(auth, promptInput)
      .then(() => {
        setTimeout(()=>{
            alert("Email sent!check your mailbox")
        },1000)        
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
}

let signUpBtn = document.getElementById('signupBtn')
signUpBtn.addEventListener("click",()=>{
    location.href = "index.html"
})

