console.log("login.js loaded");

var userNameInfo = {username: "kevin", password: "ga"}

var inputPassword = "";

var loggedIn = false;

while (!loggedIn){
  inputPassword = prompt("Enter password for user " + userNameInfo.username + ".")
  if (inputPassword === userNameInfo.password){
    alert("yay");
    loggedIn = true;
    } else {alert("Try Again")
  }
}