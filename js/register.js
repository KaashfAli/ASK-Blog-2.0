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
// auth.languageCode = 'en';
const provider = new GoogleAuthProvider();


//----- New Registration code start	  
const signup = document.getElementById("Sign-up")
signup.addEventListener("click", function () {
    const email = document.getElementById("reg-username").value;
    const password = document.getElementById("reg-password").value;
    //For new registration
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed Up
            const user = userCredential.user;
            // console.log(user);
            alert("Registration successfull!!");
            window.location.href = "login.html";
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
            console.log(errorMessage);
            alert(error);
        });
});
//----- End