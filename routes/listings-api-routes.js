var db = require("../models");
var geocoder = require('geocoder');

module.exports = function(app) {
    //to retrieve data from listing table and display

    app.post("/api/address", function(req, res) {
        // Here we add an "include" property to our options in our findAll query
        // We set the value to an array of the models we want to include in a left outer join
        // In this case, just db.Post
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

       //use city Name to do search 
       db.Listing.findAll({
        // where: query,
    }).then(function(listings) {
        // res.json({listings: listings});
        console.log(listings)
    });
      
    });

    

    app.get("/api/search+results", function (req, res) {
        console.log(req.body);
        db.Listing.findAll({
            // where: query,
        }).then(function(listings) {
            // res.json({listings: listings});
            console.log(listings)
        });
       
    })
    
};
