// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyDnb6L7OVo-KaWxtolrSy2OMfWPMPLCn8g",
      authDomain: "kwiterr-1a001.firebaseapp.com",
      databaseURL: "https://kwiterr-1a001-default-rtdb.firebaseio.com",
      projectId: "kwiterr-1a001",
      storageBucket: "kwiterr-1a001.appspot.com",
      messagingSenderId: "424855633611",
      appId: "1:424855633611:web:080c20d10916752b45254e"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="welcome "+user_name+" !";

function addroom()
{
room_name=document.getElementById("room_name").value;
firebase.database().ref("/").child(room_name).update({
purpose:"addroomname"
});
localStorage.setItem("room_name",room_name);
window.location="chat.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log("roomname= "+Room_names);
      row="<div class='room_name'id="+Room_names+" onclick='gotoroom(this.id)'>#"+Room_names+"</div><hr>";
   document.getElementById("output").innerHTML+=row;   
      });});}
getData();

function gotoroom(name)
{
console.log(name);
localStorage.setItem("room_name",name);
window.location="chat.html";
}


function logout()
{
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location="index.html";
}
