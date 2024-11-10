import { getAuth, createUserWithEmailAndPassword,signInWithPopup, GoogleAuthProvider} from "./firebase.js";
getAuth()
const auth = getAuth();
let signUpBtn = document.getElementById('signUp')
let emailValue = document.getElementById('emailSignup')
let passwordValue = document.getElementById('passwordSignup')
let nameValue = document.getElementById('nameSignup')
let google = document.getElementById('google')
let facebook = document.getElementById('facebook')
let github = document.getElementById('github')
// google login 
const provider = new GoogleAuthProvider();
google.addEventListener("click",()=>{
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

})


signUpBtn.addEventListener("click",()=>{
createUserWithEmailAndPassword(auth, emailValue.value, passwordValue.value)
  .then((userCredential) => {
    
    const user = userCredential.user;
    console.log(user)
    alert("Account created successfully!")
    setTimeout(()=>{
        location.href = "login.html"
    },2000)


  })
//   errors
  .catch((error) => {
    const errorCode = error.code;
    switch(errorCode){
        case "auth/email-already-in-use":
        alert("Email already in use!")
        break;
        case "auth/invalid-email":
        alert("Invalid Email")
        break;
        case "auth/weak-password":
            alert("Password should be atleast 6 character")
            break;
        default:
            console.log("hi")
    }
    const errorMessage = error.message;
    console.log(errorCode)
    console.log(errorMessage)
  });
  emailValue.value =""
  passwordValue.value=""
  nameValue.value = ""
})
let loginBtn = document.getElementById('loginBtn')
loginBtn.addEventListener("click",()=>{
  location.href = "login.html"
})

export{signUpBtn,emailValue,passwordValue,nameValue}

