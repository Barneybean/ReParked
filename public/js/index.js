// var express = require("express");

$(document).ready(function() {
  //----------Sign up & log in------------------------------
  $("#beHost").on("click", function() {
     //to prevent submission without value
    //  event.preventDefault();
    $("#renterModal").hide();
    $("#logInModal").hide();
    $("#hostModal").show();
  });

  $("#beRenter").on("click", function() {
    //to prevent submission without value
    // event.preventDefault();
    $("#hostModal").hide();
    $("#logInModal").hide();
    $("#renterModal").show();
 });

 $("#logInBtn").on("click", function() {
  //to prevent submission without value
  // event.preventDefault();
  $("#logInModal").show();
});

 $("#hostLogInBtn").on("click", function() {
   $("#hostLogInModal").show();
 })


 //---------------------New user sign up-----------------------------
 
 //-------------sign up for host---------------------
 var hostSignUp = $("#submit-host");
 var newHostName = $("#newHostName");
 var newHostEmail = $("#newHostEmail");
 var newHostPw = $("#newHostPw");
//  console.log(newHostEmail);
hostSignUp.on("click", function(event) {
   
  event.preventDefault();
  var newHost = {
    name: newHostName.val().trim(),
    email: newHostEmail.val().trim(),
    password: newHostPw.val().trim()
  };
  
  
  if (!newHost.name || !newHost.email || !newHost.password) {
   return;
 }
 // If we have an email and password, run the signUpUser function
 signUpHost(newHost.name, newHost.email, newHost.password);
 newHostName.val("");
 newHostEmail.val("");
 newHostPw.val("");
});

function signUpHost(name, email, password) {

  var hostInfo = {
    name:name,
    email:email,
    password: password
  }

  $.ajax("/api/hostSignUp", {
    type: "post",
    data: hostInfo
   }).then(function(data) {
     console.log ("posted");
  }).catch(function(err) {
     console.log(err);
  });
}


//----------Renter login---------------------------------
  var loginForm = $("personalModal");
  var emailInput = $("#comfirmEmail");
  var passwordInput = $("#comfirmPw");

 $("#userBack").on("click", renterBack());

 function renterBack() {

 }

  //---------------------search Bar----------------------------- 
  //send search result to cookie and redirect to another page
  $("#searchBar").on("submit", function(event) {
    //to prevent submission without value
    event.preventDefault();
    // get the searched string
    var searchString = $("#address").val().trim();
    // console.log(searchString);
    
    //write city name to session storage *****************
    sessionStorage.search = searchString;    

  });

});



