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
    app.post('/api/rentersignup', function(req, res){
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
    app.post('/api/renterlogin', function(req, res){
        // console.log(req.body.Email + "renter login email");
        // console.log(req.body.Password + " renter login pw");
        // console.log(req.body);
        var renterEmail = req.body.Email;
        var renterPassword = sha256(req.body.Password);
        
        console.log(renterPassword);

        db.rentersprofile.findOne({
            where: {
                RenterEmail: renterEmail
            }
        }).then(function(renterObj) {
            // if (err) {
            //     var failLogin = "Fail Login";
            //     res.json(failLogin);
            // }
            // else {
            //     console.log(renterObj.password);
            // }
            
            // console.log(renterObj.RenterEmail);
            // console.log(renterObj.RenterEmail === renterEmail && renterObj.password === renterPassword)

            if (renterObj.RenterEmail === renterEmail && renterObj.password === renterPassword) {
            //    console.log("inhere");
                var loginAs = {
                    successId: renterObj.id,
                    successName: renterObj.RenterName,
                    successEmail: renterObj.RenterEmail
                }
                res.json(loginAs);
            } else {
                var failLogin = "Fail Login";
                res.json(failLogin);
            }
        });
    });  

     // jose code****************************************

     app.get("/api/rentersreservation/:renterid", function(req, res){
        var dataRenterId = req.params.renterid;
        console.log(dataRenterId)
        db.reservation.findAll({
            where:{
            rentersprofileId: dataRenterId    
            }
        }).then(function(results) {
            console.log(results)
            res.json(results)
        })
    })


    // code end*****************************************

};
