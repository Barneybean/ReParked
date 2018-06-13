// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our models
var db = require("../models");
var passport = require("../config/passport");

// Routes
// =============================================================
module.exports = function(app) {

    // app.post("/api/hostSignUp", function(req, res) {

    //     // var hostPw = req.body.password;
    //     // var hostEmail = req.body.email;
    //     // console.log(hostPw);
    //     // console.log(hostEmail);
    //     console.log(req.body.email);
    // });
    app.post('/api/hostSignUp', passport.authenticate('local', { successRedirect: '/', failureRedirect: '/api/hostSignUp' }), function(req, res) {

        console.log(req.body.email);
        //take email and password
          //encrypt password
          //save to database
          
    });



};
