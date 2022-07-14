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


user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome " + user_name + "!";

function addRoom()
{
room_name = document.getElementById("room_name").value;
firebase.database().ref("/").child(room_name).update({
      purpose:"adding room name"
});
localStorage.setItem("room_name",room_name);
window.location = "chat_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
    
    console.log("Room_name -" + Room_names);
    row="<div class='room_name' id= "+Room_names+" onclick='redirect(this.id)'>#"+Room_names+"</div><hr>"
    document.getElementById("output").innerHTML+=row;
    console.log(firebase_message_id);

    //End code
    });});}


 function  redirect(name)
 {
console.log(name);
localStorage.setItem("room_name",name);
window.location="chat_page.html";
 }
