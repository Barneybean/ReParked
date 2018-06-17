// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our models
var db = require("../models");
var sha256 = require("sha256");// *********************************************************************************
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
    
    //=======================host sign up
    app.post('/api/hostsignup', function(req, res) {

        // console.log(req.body.password + " host sign up email");
        var hostName = req.body.hostName;
        var hostEmail = req.body.hostEmail;
        var hostPassword = sha256(req.body.hostPassword);

         db.hostsprofile.create({
             hostName: hostName,
             hostEmail: hostEmail,
             password: hostPassword
            // var hashNewHostPw = sha256(req.body.passport);
            // console.log(hashNewHostPw);
         }).then(function(err, data) {

            res.json("new host created");
         });
    });
    


 
    //=========================host login
    app.post('/api/hostlogin', function(req, res) {

        var hostEmail = req.body.Email;
        var hostPassword = sha256(req.body.Password);
        console.log(hostPassword);
        db.hostsprofile.findOne({
            where: {
                hostEmail: hostEmail
            }
        }).then(function(hostObj) {
            // if (err) {
            //     var failLogin = "Fail Login";
            //     res.json(failLogin);
            // }
            // else {
            //     console.log("inhere",hostObj.hostEmail);
            // }
            
            if (hostObj.hostEmail === hostEmail && hostObj.password === hostPassword) {
            //    console.log("inhere");
                var loginAs = {
                    successId: hostObj.id,
                    successName: hostObj.hostName,
                    successEmail: hostObj.hostEmail
                }
                res.json(loginAs);
            } else {
                var failLogin = "Fail Login";
                res.json(failLogin);
            }
        });
    });

    //======get hostListingsID===========================
    app.get("/api/hostlistings/:id", function(req, res) {
        var hostListingsId = req.params.id;
        db.listing.findAll({
            where:{
                id: hostListingsId
            }
        }).then(function(result) {
            console.log(result)
            res.json(result);
        })
    });
    
    app.post('/api/garagesinfo', function(req, res) {
        var streetNumber = parseInt(req.body.streetNumber);
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
        console.log("id", req.body.hostsProfileId);
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
            hostsprofileId: hostsProfileId
        }).then(function(err, data) {
            
            res.json(data);
            
        });
    });

    //======get hostListingsID===========================
   app.get("/api/hostlistings/:id", function(req, res) {
       var hostListingsId = req.params.id;
       db.listing.findAll({
           where:{
               id: hostListingsId
           }
       }).then(function(result) {
           console.log(result)
           res.json(result);
       })
   });
};







