import { getAuth, createUserWithEmailAndPassword} from "./firebase.js";
getAuth()
const auth = getAuth();
let signUpBtn = document.getElementById('signUp')
let emailValue = document.getElementById('emailSignup')
let passwordValue = document.getElementById('passwordSignup')
let nameValue = document.getElementById('nameSignup')


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

