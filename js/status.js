import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { getAuth, onAuthStateChanged , signOut } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";
// import { getDatabase } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-database.js";

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
// const database = getDatabase(app)

const loginButton = document.getElementById('login-button');
// const logoutButton = document.getElementById('logout');
const profileDetails = document.getElementById('profile-details');
const userDisplayName = document.getElementById('user-display-name');


onAuthStateChanged(auth,(user)=>{
  if(user){
    loginButton.style.display = 'none';
    profileDetails.style.display = 'flex';
    userDisplayName.textContent = `Welcome, ${user.displayName}`;
  }else{
    loginButton.style.display = 'block';
    profileDetails.style.display = 'none';
  }
});

// ----- Logout code start	  

const sign_out = document.querySelector("#logout");
sign_out.addEventListener("click",()=>{
  signOut(auth).then(()=>{
    alert("Successfully signed out")
    loginButton.style.display = 'flex';
    profileDetails.style.display = 'none';
  }).catch((error)=>{
    console.log(error);
  })
});