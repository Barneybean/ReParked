// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our models
var db = require("../models");
// var sha256 = require("sha256");


// Routes
// =============================================================
module.exports = function(app) {
    
    //=======================host sign up
    app.post('/api/hostSignUp', function(req, res) {

        console.log(req.body.password + " host sign up email");

         db.rentersprofile.create({
             RenterName: req.body.name,
             RenterEmail: req.body.email,
             password:req.body.password
            // var hashNewHostPw = sha256(req.body.passport);
            // console.log(hashNewHostPw);
         }).then(function(data) {
            res.json(data);
         });
    });
    


 
    //=========================host login
    app.post('/api/hostLogin', function(req, res) {

        console.log(req.body.email + " host login email");
    });
 


};
