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
    
  app.post("/api/newreservation", function(req, res) {
    console.log("Reservation Data:");
    console.log(req.body);
    console.log(db)
    db.reservation.create({
      vehicleMake: req.body.vehicleMake,
      vehicleModel: req.body.vehicleModel,
      licensePlate: req.body.licensePlate,
      dateStart: req.body.startDate,
      // dateEnd: req.body.endDate,
      timeStart: req.body.startHour,
      timeEnd: req.body.endHour,
      note: req.body.note,
      listingId: req.body.listingId,
      rentersprofileId: req.body.userId,
      hostsprofileId: req.body.hostId
    }).then(function(results) {
      console.log(results);
    })
  });
    
  app.get("/api/:listingid/:startdate/:enddate", function(req, res) {
    console.log(req.params.listingid)
    console.log(req.params.startdate)
    console.log(req.params.enddate)
    db.reservation.findAll({
      where: {
        // query db for the listing being viewed
        listingId: req.params.listingid,
        dateStart: {
          $between: ["2018-06-13", "2018-06-17"]
        }
      },
    }).then(function(results) {
      console.log(results.length);
      res.json(results);
    });
  });




};