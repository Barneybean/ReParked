$(document).ready(function() {
  //clear session storage on load
  // sessionStorage.clear();

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
//-------------sign up & log in ends----------------------------------
    
  var loginForm = $("personalModal");
  var usernameInput = $("#comfirmName")
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
      username: usernameInput.val().trim(),
      email: emailInput.val().trim(),
      password: passwordInput.val().trim()
    };

    if (!userData.username || !userData.email || !userData.password) {
      return;
    }

    loginUser(userData.username, userData.email, userData.password);
    emailInput.val("");
    emailInput.val("");
    passwordInput.val("");
    // window.location.reload();
  });
   // loginUser does a post to our "api/login" route and if successful, redirects us the the members page
  function loginUser(username, email, password) {
    $.post("/api/login", {
      username: username,
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


//-------------Create Account---------------------------------
  $("#submit-host").on("click", function() {
     
  })

  $("submit-renter").on("click", function() {


  })
//-------------Create Account Ends---------------------------------

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





