// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
    apiKey: "AIzaSyCnOiy_33_7uZQ6uh0lJeW7_gpqwJSNro4",
    authDomain: "let-s-chat-app-by-saanvi.firebaseapp.com",
    databaseURL: "https://let-s-chat-app-by-saanvi-default-rtdb.firebaseio.com",
    projectId: "let-s-chat-app-by-saanvi",
    storageBucket: "let-s-chat-app-by-saanvi.appspot.com",
    messagingSenderId: "248686667016",
    appId: "1:248686667016:web:66e9560455aa5c88b138bd"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);



function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
    
}



