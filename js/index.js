import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { getAuth, onAuthStateChanged , signOut } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";
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

const inputBox = document.getElementById("input-box")
const listContainer = document.getElementById("list-container")

function addTask() {
    if (inputBox.value == "") {
        alert("You must write somethig!");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement('span');
        span.innerHTML = '\u00d7';
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}

function saveData(){
    localStorage.setItem("data",listContainer.innerHTML)
}


// LogIn button changes

const LogIn_btn =document.getElementById("login-button")
LogIn_btn.addEventListener("click",function(){
  window.location.href = "login.html"
}); 

// ASK Button
const ask = document.getElementById("ask")
ask.addEventListener("click",function(){
onAuthStateChanged(auth,(user)=>{
  if(user){
    window.location.href = "ask.html"
  }else{
    alert("Please login first")
    LogIn_btn.style.display = 'flex';
    profileDetails.style.display = 'none';
  }
})
});


