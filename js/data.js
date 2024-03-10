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

// Get Data from firebase Db

function GetPostData() {
    const user_ref = ref(db, 'post/')
    get(user_ref).then((snapshot) => {
       const data = snapshot.val()
 
       let html = "";
       const table = document.querySelector('#list-container')
       for (const key in data) {
          const { title, post_content } = data[key]
 
          html += `
                 <tr>
                      <td> <span class="postNumber"></span></td>
                      <td>${title} </td>
                      <td> <button class="delete" onclick="delete_data(${key})">Delete</button> </td>
                      <td> <button class="update" onclick="update_data(${key})">Update</button> </td>
                 </tr>
                `
       }
       table.innerHTML = html
    })
 }
 GetPostData()
