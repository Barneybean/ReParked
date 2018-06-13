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
      dateEnd: req.body.endDate,
      timeStart: req.body.startHour,
      timeEnd: req.body.endHour,
      note: req.body.note,
    }).then(function(results) {
      console.log(results);
    })
  });
    
};