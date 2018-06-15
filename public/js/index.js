
// log out buttom to clear session storage
$("#logout").on("click", function() {
  $("#hostLogInBtn").text("Host Login");
  $("#logInBtn").text("Renter Login");
  $("#profile").empty();
  sessionStorage.clear();
})


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
 
 //see who is logged in
var lastLoggedIn = sessionStorage.getItem("lastLoggedIn");
if(lastLoggedIn =="renter") {
  $("#logInBtn").text("logged in as Renter: " + sessionStorage.getItem("loggedInRenterEmail"));
  $("#hostLogInBtn").text("Host Login");
  var renterProfile=$('<a type="button" id="renterProfile" class="btn btn-outline-secondary" href="/renters">');
  renterProfile.text("Renter Profile");
  $("#profile").html(renterProfile);
}
else if(lastLoggedIn =="host") {
  $("#hostLogInBtn").text("logged in as Host: " + sessionStorage.getItem("loggedInHostEmail"));
  $("#logInBtn").text("Renter Login");
  var hostProfile=$('<a type="button" id="hostProfile" class="btn btn-outline-secondary" href="/hosts">');
  hostProfile.text("Host Profile");
  $("#profile").html(hostProfile);
}
else {
}
 //-------------sign up for host---------------------
function showPW() {
  // var x = document.getElementByClass("psw");
  var x = document.getElementById("newHostPw");
  if (x.type === "password") {
      x.type = "text";
  } else {
      x.type = "password";
  }
}

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
      hostName:name,
      hostEmail:email,
      hostPassword: password
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
//----------------------------------------------------
//---------------------------Sign Up for Renter----------
var renterSignUp = $("#submit-renter");
var newRenterName = $("#newRenterName");
 var newRenterEmail = $("#newRenterEmail");
 var newRenterPw = $("#newRenterPw");
 
 renterSignUp.on("click", function(event) {
   
     event.preventDefault();
     var newRenter = {
       name: newRenterName.val().trim(),
       email: newRenterEmail.val().trim(),
       password: newRenterPw.val().trim()
     };

     if (!newRenter.name || !newRenter.email || !newRenter.password) {
      return;
    }
    // If we have an email and password, run the signUpUser function
    signUpRenter(newRenter.name, newRenter.email, newRenter.password);
    newRenterName.val("");
    newRenterEmail.val("");
    newRenterPw.val("");
});

  function signUpRenter(name, email, password) {

    var renterInfo = {
      renterName: name,
      renterEmail:email,
      renterPassword: password
    }

    $.ajax("/api/rentersignup", {
      type: "post",
      data: renterInfo
    }).then(function(data) {
      console.log ("posted");
    }).catch(function(err) {
      console.log(err);
    });
  }



//----------Renter login---------------------------------
 var renterBack = $("#renterBack");
 var comfirmEmail = $("#comfirmEmail");
 var comfirmPw = $("#comfirmPw");

 renterBack.on("click", function(event) {
    console.log("clicked")
    event.preventDefault();

    
    var renterLogin = {
      email: comfirmEmail.val().trim(),
      password: comfirmPw.val().trim()
    };

     if (!renterLogin.email || !renterLogin.password) {
      return;
    }
    // If we have an email and password, run the signUpUser function
    loginRenter(renterLogin.email, renterLogin.password);
    comfirmEmail.val("");
    comfirmPw.val("");


});

  function loginRenter(email, password) {

    var renterMember = {
      Email:email,
      Password: password
    }

    $.ajax("/api/renterlogin", {
      type: "POST",
      data: renterMember
    }).then(function(data) {
      // console.log (data);
      //write sucessfull login into session
      if (data === "Fail Login") {
        $("#logInBtn").text("Login failed, click me to try again");
      }
      else {
        sessionStorage.setItem("loggedInRenterId", data.successId);
        sessionStorage.setItem("loggedInRenterName", data.successName);
        sessionStorage.setItem("loggedInRenterEmail", data.successEmail);
        sessionStorage.setItem("lastLoggedIn", "renter");
        $("#logInBtn").text("logged in as Renter: " + data.successEmail);
        $("#hostLogInBtn").text("Host Login");

        // after login, user can see profile
        var renterProfile=$('<a type="button" id="renterProfile" class="btn btn-outline-secondary" href="/renters">');
        renterProfile.text("Renter Profile");
        $("#profile").html(renterProfile);
      }
      
    }).catch(function(err) {
      console.log(err);
    });

  }

//----------Host login---------------------------------
var hostBack = $("#hostBack");
var comfirmHostEmail = $("#comfirmHostEmail");
var comfirmHostPw = $("#comfirmHostPw");

hostBack.on("click", function(event) {
    console.log("host clicked")
    event.preventDefault();
    var hostLogin = {
      email: comfirmHostEmail.val().trim(),
      password: comfirmHostPw.val().trim()
    };
    

    if (!hostLogin.email || !hostLogin.password) {
     return;
   }
   // If we have an email and password, run the signUpUser function
   loginHost(hostLogin.email, hostLogin.password);
   comfirmHostEmail.val("");
   comfirmHostPw.val("");

});

 function loginHost(email, password) {

   var hostMember = {
     Email:email,
     Password: password
   }

   $.ajax("/api/hostlogin", {
     type: "POST",
     data: hostMember
   }).then(function(data) {
    // console.log (data);
    //write sucessfull login into session
    if (data === "Fail Login") {
      $("#hostLogInBtn").text("Login failed, click me to try again");
    }
    else {
      sessionStorage.setItem("loggedInHostId", data.successId);
      sessionStorage.setItem("loggedInHostName", data.successName);
      sessionStorage.setItem("loggedInHostEmail", data.successEmail);
      sessionStorage.setItem("lastLoggedIn", "host");
      $("#hostLogInBtn").text("logged in as Host: " + data.successEmail);
      $("#logInBtn").text("Renter Login");

      // after login, user can see profile
      var hostProfile=$('<a type="button" id="hostProfile" class="btn btn-outline-secondary" href="/hosts">');
      hostProfile.text("Host Profile");
      $("#profile").html(hostProfile);

    };
   }).catch(function(err) {
     console.log(err);
   });

   lastLoggedIn = "host";
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




