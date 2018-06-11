var db = require("../models");
var NodeGeocoder = require('node-geocoder');

module.exports = function(app) {
    //to retrieve data from listing table and display

    //use node-geocoder
    var options = {
        provider: 'google',
       
        // Optional depending on the providers
        httpAdapter: 'https', // Default
        apiKey: 'YOUR_API_KEY', // for Mapquest, OpenCage, Google Premier
        formatter: null         // 'gpx', 'string', ...
      };
       
      var geocoder = NodeGeocoder(options);
    
    app.post("/api/address", function(req, res) {
        // Here we add an "include" property to our options in our findAll query
        // We set the value to an array of the models we want to include in a left outer join
        // In this case, just db.Post

        var searchString = req.body.address;
        console.log(searchString);

        geocoder.geocode(searchString, function(err, res) {
            console.log(res);
        });

        // db.Listing.findAll({
        //     where:{
        //         city: 
        //     }
        // }).then(function(result) {
        //   res.json(result);
        // });
    });

    // app.post("")

    
};
