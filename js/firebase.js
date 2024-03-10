import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyBAQZroTU2fu0UvnNAxsRjEKO7WQtboP7I",
  authDomain: "askblog-85776.firebaseapp.com",
  projectId: "askblog-85776",
  storageBucket: "askblog-85776.appspot.com",
  messagingSenderId: "1005328476647",
  appId: "1:1005328476647:web:2e095d3a4797a188a67542"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app)
auth.languageCode = 'en';
const provider = new GoogleAuthProvider();

const googleLogin = document.getElementById("google-login-btn")
googleLogin.addEventListener("click",function(){
  signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    window.location.href = "index.html"
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });

})

// const loginButton = document.getElementById('login');
// const logoutButton = document.getElementById('logout-button');
// const profileDetails = document.getElementById('profile-details');
// const userDisplayName = document.getElementById('user-display-name');

//----- Login code start	  
document.getElementById("login").addEventListener("click", function() {
  var email =  document.getElementById("input-email").value;
  var password = document.getElementById("input-password").value;

  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // console.log(user);
    alert(user.email+" Login successfully!!!");
    window.location.href = "index.html"
    document.getElementById('logout').style.display = 'block';
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // console.log(errorMessage);
    alert(errorMessage);
  });		  		  
});
//----- End

// Checking login function

// Login event listener

// loginButton.addEventListener('click', (e) => {
//   const provider = new firebase.auth.GoogleAuthProvider();
//   firebase.auth().signInWithPopup(provider);
// });
// logoutButton.addEventListener('click', () => {
//   firebase.auth().signOut();
// });

// Authentication state change listener


// firebase.auth().onAuthStateChanged(user => {
//   if (user) {
//     // User is signed in
//     loginButton.style.display = 'none';
//     profileDetails.style.display = 'block';
//     userDisplayName.textContent = `Welcome, ${user.displayName}`;
//   } else {
    // User is signed out
//     loginButton.style.display = 'block';
//     profileDetails.style.display = 'none';
//   }
// });



//----- Logout code start	  

// document.getElementById("logout").addEventListener("click", function() {
//   signOut(auth).then(() => {
//     // Sign-out successful.
//     console.log('Sign-out successful.');
//     alert('Sign-out successful.');
//     document.getElementById('logout').style.display = 'none';
//   }).catch((error) => {
//     // An error happened.
//     console.log('An error happened.');
//   });		  		  
// });
//----- End
