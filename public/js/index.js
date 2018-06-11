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
  
  $("#searchBar").on("submit", function(event) {
    //to prevent submission without value
    event.preventDefault();
    // get the searched string
    var searchString = $("#cityInput").val().trim();
    // console.log(searchString);
    var citySearched = {
      city: searchString
    }

    $.ajax("/api/citysearched", {
      type: "get"
    }).then(function(result) {
      console.log ("result")
    });

  })




});



