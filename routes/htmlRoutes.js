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
  //listing page 
  app.get("/listings", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/htmls/listings.html"));
  });
  //host admin and posting page
  app.get("/hosts", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/htmls/hosts.html"));
  });

};
