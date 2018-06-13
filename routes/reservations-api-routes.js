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
  // Add a reservation
  app.post("/api/newreservation/:id", function(req, res) {
    console.log("Reservation Data:");
    console.log(req.body);
    db.Reservation.create({
      vehicle_make: req.body.vehicleMake,
      vehicle_model: req.body.vehicleModel,
      license_plate: req.body.licensePlate,
      date_start: req.body.dateStart,
      date_end: req.body.dateEnd,
      time_start: req.body.timeStart,
      time_end: req.body.timeEnd,
      note: req.body.note,
    }).then(function(results) {
      console.log(results);
    })
  });

    
};

// vehicleMake: $("#vehicleMake").val().trim(),
//     vehicleModel: $("#vehicleModel").val().trim(),
//     licensePlate: $("#licensePlate").val().trim(),
//     startDates: $("#startDates").val().trim(),
//     endDates: $("#endDates").val().trim(),
//     startHours: $("#startHours").val().trim(),
//     endHour: $("#endHour").val().trim(),
//     note: $("#note").val().trim(),