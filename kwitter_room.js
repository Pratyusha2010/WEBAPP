
//ADD YOUR FIREBASE LINKS HERE

import { initializeApp } from "firebase/app"; 
// TODO: Add SDKs for Firebase products that you want to use 
// https://firebase.google.com/docs/web/setup#available-libraries 
// Your web app's Firebase configuration const firebaseConfig = { 
      apiKey: "AIzaSyD9A7YVoPhNKdjZCRU3Q6024I58jjuu_Sc", 
      authDomain: "pratyushakwitter.firebaseapp.com", 
      databaseURL: "https://pratyushakwitter-default-rtdb.firebaseio.com", 
      projectId: "pratyushakwitter", 
      storageBucket: "pratyushakwitter.appspot.com", 
      messagingSenderId: "662351100648", 
      appId: "1:662351100648:web:ed6691f0f9d8415a65675d" }; 
      // Initialize Firebase const app = initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
