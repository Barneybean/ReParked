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

    //======================renter sign up=======
    app.post('/api/renterSignUp', function(req, res){
        console.log(req.body.renterEmail + " renter sign up email");
        console.log(req.body.renterPassword + " renter sign up password");

        var renterName = req.body.renterName;
        var renterEmail = req.body.renterEmail;
        var renterPassword =  sha256(req.body.renterPassword);

        db.rentersprofile.create({
            RenterName: renterName,
            RenterEmail: renterEmail,
            password: renterPassword
        // var hashNewHostPw = sha256(req.body.passport);
        // console.log(hashNewHostPw);
        }).then(function(err, data) {
            
        res.json("new renter created");
        });
    });  



    //========================renter login================
    app.post('/api/renterLogin', function(req, res){
        // console.log(req.body.Email + "renter login email");
        // console.log(req.body.Password + " renter login pw");
        // console.log(req.body);
        var renterEmail = req.body.Email;
        var renterPassword =  sha256(req.body.Password);

        db.rentersprofile.findOne({
            where: {
                RenterEmail: renterEmail
            }
        // var hashNewHostPw = sha256(req.body.passport);
        // console.log(hashNewHostPw);
        }).then(function(renterObj) {
            console.log(renterObj.RenterEmail);
            if(!renterObj.RenterEmail) {
                var failLogin = "Fail Login";
                res.json(failLogin);
            }
            else if (renterObj.password === req.body.Password) {
                var loginAs = {
                    successId: renterObj.id,
                    successEmail: renterObj.RenterEmail
                }
                res.json(loginAs);
            } else {
                var failLogin = "Fail Login";
                res.json(failLogin);
            }
        });
    });  
};
