// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");

// Routes
// =============================================================
module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads index.html
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/htmls/index.html"));
  });
  //listings page that contains matching listings
  app.get("/listings", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/htmls/listings.html"));
  });
  //hosts admin and create listings and show listings
  app.get("/hosts", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/htmls/hosts.html"));
  });
  //renters's profile and reservation page
  app.get("/renters", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/htmls/renters.html"));
  });
  //checkout
  app.get("/details", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/htmls/details.html"));
  });
  
};
