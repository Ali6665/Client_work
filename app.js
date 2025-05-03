const firebaseConfig = {
  apiKey: "AIzaSyD_dAh22rc0L3NvsXXBVlAM9tODvq3iPNs",
  authDomain: "client-project-daf2b.firebaseapp.com",
  databaseURL: "https://client-project-daf2b-default-rtdb.firebaseio.com",
  projectId: "client-project-daf2b",
  storageBucket: "client-project-daf2b.firebasestorage.app",
  messagingSenderId: "976933613461",
  appId: "1:976933613461:web:16fba9825cb567340fd09c",
  measurementId: "G-0CPZGBHCP6"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault(); // Form ko reload se bachaye

  var name = this.name.value.trim();
  var email = this.email.value.trim();
  var Class = this.class.value.trim();
  var personal_message = this.message.value.trim();

  if (name && email && Class && personal_message) {
    document.getElementById('responseMsg').textContent = "From has been successfully!";
    console.log("✅ Message Sent:");
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Subject:", Class);
    console.log("Message:", personal_message);
    this.reset();
  } else {
    document.getElementById('responseMsg').textContent = "Please fill all fields!";
    console.log("❌ Submission Failed: Some fields are empty.");
    console.log("Name:", name || "Empty");
    console.log("Email:", email || "Empty");
    console.log("Class:", Class || "Empty");
    console.log("Message:", personal_message || "Empty");

   }

   var UserData = {
    name:name,
    email:email,
    class:Class,
    personal_message:personal_message
   }

   firebase.database().ref("UserData").push(UserData);

});
