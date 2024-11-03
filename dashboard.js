import{getAuth, onAuthStateChanged,updateProfile,signOut } from "./firebase.js";

const auth = getAuth();
let emailGet = document.getElementById('getEmail')
let signOutBtn = document.getElementById('signOut')
let nameUpdate = document.getElementById("Name")
let nameUpdate2 = document.getElementById("Name2")
let professionUpdate = document.getElementById("profession")
let professionUpdate2 = document.getElementById("profession2")
onAuthStateChanged(auth, (user) => {
  if (user) {
    const uid = user.uid;
    console.log(user)
    console.log(uid)

    emailGet.innerHTML = user.email
    signOutBtn.addEventListener("click",()=>{
        const auth = getAuth();
signOut(auth).then(() => {
  alert("Logged out!")
  location.href= "login.html"
}).catch((error) => {
  // An error happened.
});
    })

    document.getElementById('editBtn').addEventListener("click",()=>{
     const name = prompt("Name")
     const profession = prompt("profession")
 


    updateProfile(auth.currentUser, {
        displayName: name, photoURL: "https://example.com/jane-q-user/profile.jpg"
      }).then(() => {
        console.log("profilecreated")
        professionUpdate.innerHTML = profession
        professionUpdate2.innerHTML = profession
        nameUpdate.innerHTML = name
        nameUpdate2.innerHTML = name

        // ...
      }).catch((error) => {
        // An error occurred
        // ...
      });
    })

    // ...
  } else {
console.log("signout!")
  }
});