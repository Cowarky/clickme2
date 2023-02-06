// // Import the functions you need from the SDKs you need
// import { initializeApp } from "../../node_modules/firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyBnr-gHz773QqA4sz9Z21bDjBMbPwO4w4c",
//   authDomain: "clickmeonline-242ee.firebaseapp.com",
//   projectId: "clickmeonline-242ee",
//   storageBucket: "clickmeonline-242ee.appspot.com",
//   messagingSenderId: "355965267221",
//   appId: "1:355965267221:web:709bc27a4549c17ccb0d1c"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

function count() {
    var container = document.getElementById("counter")
    var count = container.innerText
    var calc = parseInt(count)+1
    container.innerText = calc
    
    var progressBar = document.getElementById("progress")
    progressBar.style.width = (calc) + "%"
}