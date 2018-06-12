/* <style>

</style>
<ul class="nav justify-content-end">

    <li class="nav-item">
      <a class="nav-link" href="#">yo</a>
    </li>

    <li class="nav-item">
      <a class="nav-link active" href="#">Become a Host</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">Sign Up</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">Login</a>
    </li>
</ul> */
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
      console.log (result.listings)
    });
  
  })

});





