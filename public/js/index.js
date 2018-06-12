
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
 var newHostEmail = $("newHostEmail");
 var newHostPw = $("newHostPw");
 
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
    
});

  function signUpHost(email, password) {
    $.post("/api/signUp", {
      email: email,
      password: password
    }).then(function(data) {
      window.location.replace(data);
      // If there's an error, log the error
    }).catch(function(err) {
      console.log(err);
    });
  //  window.location.reload()
  }









//----------Renter login---------------------------------
  var loginForm = $("personalModal");
  var emailInput = $("#comfirmEmail");
  var passwordInput = $("#comfirmPw");

 $("#userBack").on("click", function(event) {
   event.preventDefault();
  //  window.location.reload();
   $("#logInBtn").css("display", "none");
   $("<div>", {
     id:"renterInfo",
     text:"Welcome back, "
   }).css({

   })
    var userData = {
      email: emailInput.val().trim(),
      password: passwordInput.val().trim()
    };

    if (!userData.email || !userData.password) {
      return;
    }

    loginUser( userData.email, userData.password);
    emailInput.val("");
    passwordInput.val("");
    // window.location.reload();
  });
   // loginUser does a post to our "api/login" route and if successful, redirects us the the members page
  function loginUser(email, password) {
    $.post("/api/login", {
      email: email,
      password: password
    }).then(function(data) {
      window.location.replace(data);
      // If there's an error, log the error
    }).catch(function(err) {
      console.log(err);
    });
  //  window.location.reload()
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



