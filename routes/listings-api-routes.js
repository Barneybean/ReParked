var db = require("../models");
var geocoder = require('geocoder');

module.exports = function(app) {
    //to retrieve data from listing table and display

    //use geocoder to get address info and coordinance    
    app.post("/api/address", function(req, res) {
        // console.log(req.body)
        // Here we add an "include" property to our options in our findAll query
        // We set the value to an array of the models we want to include in a left outer join
        // In this case, just db.Post
        //get the searched string

        var searchString = req.body.address;
        console.log(searchString);
        // // Geocoding
        geocoder.geocode(searchString, function ( err, data ) {
            if(err) throw err;
            //get the city name
            // console.log(data.results[0].address_components[3].long_name); 
            //result will look like: https://developers.google.com/maps/documentation/geocoding/intro?csw=1#JSON
            // cityName = data.results[0].address_components[3].long_name;
            // console.log(cityName);
            
        });
        res.redirect(path.join(__dirname, + '../public/htmls/listings.html'));
       
    });

    // app.get("/listings/:city", function (req, res) {
    //     var searchByCity = req.params.city;
    //     console.log("get",searchByCity);
    //     db.Listing.findAll({
    //         // where:{
    //         //     city: searchByCity
    //         // }
    //     }).then(function(result) {
    //         console.log(result);
            
    //     });
    // })
    
    
};
