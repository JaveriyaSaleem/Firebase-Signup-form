import { getAuth, signInWithEmailAndPassword,sendPasswordResetEmail,signInWithPopup, GoogleAuthProvider} from "./firebase.js";

getAuth()
let emailLogin = document.getElementById('emailSignin')
let passwordLogin = document.getElementById('passwordSignin')
let btnLogin = document.getElementById('signInBtn')
let forgotPass = document.getElementById('forgetPass')
const auth = getAuth();
// google login 
const provider = new GoogleAuthProvider();
document.getElementById('googleBtn').addEventListener('click',(()=>{
  signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    console.log(credential)
    console.log(token)
    // The signed-in user info.
    const user = result.user;
    console.log(user)
    alert("account created!")
    setTimeout(()=>{
      location.href = "dashboard.html"
  },2000)

    // IdP data available using getAdditionalUserInfo(result)
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    console.log(errorCode)
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    console.log(credential)
    // ...
  });
}))
// end google 

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
        let promptInput = prompt("Enter your email")
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

