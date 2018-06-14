// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our models
var db = require("../models");
var sha256 = require("sha256");


// Routes
// =============================================================
module.exports = function(app) {

    app.post('/api/garagesinfo', function(req, res) {
        var streetNumber = req.body.streetNumber;
        var streetName = req.body.streetName;
        var city = req.body.City;
        var state = req.body.State;
        var zipCode = req.body.zipCode;
        var latitude = req.body.Latitude;
        var longitude = req.body.Longitude;
        var type = req.body.Type;
        var hourlyRate = req.body.hourlyRate;
        var url = req.body.Url;
        var hostsProfileId = req.body.hostsProfileId;
        console.log(url);
        console.log(zipCode);
        console.log("this is + " + city);
        db.listing.create({
            streetNumber: streetNumber,
            streetName: streetName,
            city: city,
            state: state,
            zipcode: zipCode,
            latitude: latitude,
            longitude: longitude,
            type: type,
            hourlyRate: hourlyRate,
            url: url,
            hostsProfileId: hostsProfileId
        }).then(function(err, data) {
 
            res.json("one garage info created");
        });
    });
};
