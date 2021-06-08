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

  function logout()
  {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location.replace("index.html");
  }
room_name=localStorage.getItem("room_name");
user_name=localStorage.getItem("room_neme");
  function send()
  {
msg=document.getElementById("msg").value;
firebase.database().ref(room_name).push({
name:user_name,message:msg,like:0
});
document.getElementById("msg").value="";
  }

  function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
name=message_data['name'];
message=message_data['message'];
like=message_data['like'];
namewithtag="<h4> "+ name +"<img class='user_tick'src='tick.png'></h4>";
messagewithtag="<h4 class='message_h4'>" +message+"</h4>";
likebutton="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+"onclick='updatelike(this.id)'>";
spanwithtag="<span class='glyphicon glyphicon-thumbs-up'>Like: "+ like +"</span></button><hr>";
row=namewithtag+messagewithtag+likebutton+spanwithtag;
document.getElementById("output").innerHTML+=row;
//End code
 } });  }); }
getData();

function updatelike(message_id)
{
console.log("someone click on like"+message_id);
button_id=message_id;
likes=document.getElementById(button_id).value;
updated_like=Number(likes)+1;
console.log(updated_like);
firebase.database().ref(room_name).child(message_id).update({
like:updated_like
});
}
