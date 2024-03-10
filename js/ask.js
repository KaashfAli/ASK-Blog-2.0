import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { getAuth, onAuthStateChanged , signOut } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";
import { getDatabase,set, ref, get, remove, update } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-database.js";

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
const db = getDatabase(app)

// const ask = document.getElementById("ask")
// ask.addEventListener("click",function(){
// onAuthStateChanged(auth,(user)=>{
//   if(user){
//     window.location.href = "ask.html"
//   }else{
//     loginButton.style.display = 'block';
//     profileDetails.style.display = 'none';
//   }
// })
// });


// ----- Logout code start	  

const sign_out = document.querySelector("#logout");
sign_out.addEventListener("click",()=>{
  signOut(auth).then(()=>{
    alert("Successfully signed out")
    window.location.href = "index.html"
    loginButton.style.display = 'flex';
    profileDetails.style.display = 'none';
  }).catch((error)=>{
    console.log(error);
  })
});


// Add Data on Firebase
const add_post_Btn = document.querySelector('#post_btn')

function Add_Post() {
   const title = document.querySelector('#title').value;
   const post_content = document.querySelector('#description').value;
   const category = document.querySelector('#category').value;
   const typ = document.querySelector('#type').value;
   const stats = document.querySelector('#status').value;
   const id = Math.floor(Math.random() * 100)

   set(ref(db, 'post/' + id), {
      title: title,
      post_content: post_content,
      category: category,
      type: typ,
      status: stats
   })
  //  notify.innerHTML = "data Added"
   document.querySelector('#title').value = "";
   document.querySelector('#description').value = "";
   document.querySelector('#category').value = "";
   document.querySelector('#type').value = "";
   document.querySelector('#status').value = "";

   GetPostData()
   alert('Successfully posted!')
}


add_post_Btn.addEventListener('click', Add_Post)

const cancel = document.getElementById('Cancel');
cancel.addEventListener("click",()=>{
  window.location.href='index.html'
});