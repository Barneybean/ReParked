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
  console.log("loded")
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

 $("#userBack").on("click", function() {
  //to prevent submission without value
  // event.preventDefault();
  $("#logInModal").show();
});
//-------------sign up & log in ends----------------------------------
    
  var loginForm = $("personalModal");
  var usernameInput = $("input#comfirmName")
  var emailInput = $("input#comfirmEmail");
  var passwordInput = $("input#comfirmPw");

 $("#userBack").on("click", function(event) {
   event.preventDefault();
    var userData = {
      username: usernameInput.val().trim(),
      email: emaulInput.val().trim(),
      password: passwordInput.val().trim()
    };

    if (!userData.email || !userData.password) {
      return;
    }
 
   window.location.reload()
   

 })
//-------------Create Account---------------------------------
  $("#submit-host").on("click", function() {
     
  })

//-------------Create Account Ends---------------------------------

  //---------------------search Bar----------------------------- 
  $("#searchBar").on("click", function(event) {
    //to prevent submission without value
    event.preventDefault();
    // get the searched string
    var searchString = $("#address").val().trim();
    console.log(searchString);
    var addressSearched = {
      address: searchString
    }

    console.log(addressSearched)

    $.ajax("/api/address", {
      type: "POST",
      data: addressSearched
    }).then(function(cityName) {
      
    //   // once I get city name then aoi route
    //   $.ajax("api/listings/"+cityName, {
    //     type: "get"
    //   }).then(function (data) {
    //     console.log("go to lisitngs.html")
    //   })
    });
  
  })




});



