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
 var newHostEmail = $("#newHostEmail");
 var newHostPw = $("#newHostPw");
 console.log(newHostEmail);
 hostSignUp.on("click", function(event) {
   
     event.preventDefault();
     var newHost = {
       email: newHostEmail.val().trim(),
       password: newHostPw.val().trim()
     };
     

     if (!newHost.email || !newHost.password) {
      return;
    }
    // If we have an email and password, run the signUpUser function
    signUpHost(newHost.email, newHost.password);
    
    newHostEmail.val("");
    newHostPw.val("");
});

  function signUpHost(email, password) {

    var hostInfo = {
      email:email,
      password: password
    }

    $.ajax("/api/hostSignUp", {
      type: "post",
      data: hoscleartInfo
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
//    $("<div>", {
//      id:"renterInfo",
//      text:"Welcome back, "
//    }).css({

//    })
//     var userData = {
//       email: emailInput.val().trim(),
//       password: passwordInput.val().trim()
//     };

//     if (!userData.email || !userData.password) {
//       return;
//     }

//     loginUser( userData.email, userData.password);
//     emailInput.val("");
//     passwordInput.val("");
//     // window.location.reload();
//   });
//    // loginUser does a post to our "api/login" route and if successful, redirects us the the members page
//   function loginUser(email, password) {
    
//     $.ajax("/api/login", {
//       type: "post",
//       email:email,
//       password: password
//     }).then(function(data) {
//       console.log ("posted");
//     }).catch(function(err) {
//       console.log(err);
//     });
  // }




  //---------------------search Bar----------------------------- 
  $("#searchBar").on("submit", function(event) {
    //to prevent submission without value
    event.preventDefault();
    // get the searched string
    var searchString = $("#address").val().trim();
    // console.log(searchString);
    var addressString = {
      address: searchString
    }

    $.ajax("/api/address", {
      type: "post",
      data: addressString
    }).then(function(result) {
      console.log ("searched")
    });
  
  })




});



