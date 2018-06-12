// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our models
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {
    var passport = require("../config/passport");
    app.post('/api/renterSignUp', passport.authenticate('local', { successRedirect: '/', failureRedirect: '/api/renterSignUp' }));  
 


    
};
