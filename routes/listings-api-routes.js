var db = require("../models");
var geocoder = require('geocoder');

module.exports = function (app) {
    //to retrieve data from listing table and display

    //post for home page
    app.post("/api/address", function (req, res) {
        // Here we add an "include" property to our options in our findAll query
        // We set the value to an array of the models we want to include in a left outer join
        // In this case, just db.Post
        var searchString = req.body.address;
        console.log(searchString);
        // // Geocoding
        geocoder.geocode(searchString, function (err, data) {
            if (err) {
                res.redirect("/");
            };

            //result will look like: https://developers.google.com/maps/documentation/geocoding/intro?csw=1#JSON
            var cityName = data.results[0];
            // console.log(cityName);

            res.json({ city: cityName });
        });


    });

    //post for listingsearch
    app.post("/api/listingsaddress", function (req, res) {
        // Here we add an "include" property to our options in our findAll query
        // We set the value to an array of the models we want to include in a left outer join
        // In this case, just db.Post
        var searchString = req.body.address;
        console.log(searchString);
        // // Geocoding
        geocoder.geocode(searchString, function (err, data) {
            if (err) {
                console.log("api error try again")
            };
            //get the city name
            // console.log("here",data.results[0]); 
            //result will look like: https://developers.google.com/maps/documentation/geocoding/intro?csw=1#JSON
            var cityName = data.results[0];
            console.log(cityName);

            res.json({ city: cityName });
        });


    });

    app.get("/api/listings/:city", function (req, res) {
        console.log("back", req.params.city);

        db.listing.findAll({
            where: {
                city: req.params.city
            }
        }).then(function (data) {
            res.json(data);
        });

    })
    app.get("/api/listings/:listingid", function (req, res) {
        console.log("inhere", req.params.listingid);
        var listingId = req.params.listingid
        db.listing.findOne({
            where: {
                id: listingId
            }
        }).then(function (data) {
            res.json(data)
        })
    })
};
