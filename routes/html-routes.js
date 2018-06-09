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
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  // user route loads user.html
  app.get("/user/:id", function(req, res) {
    var userId=req.params.id;
    res.sendFile(path.join(__dirname, "../public/user"+userId+".html"));
  });

  // owner route loads owner.html
  app.get("/owner/:id", function(req, res) {
    var OwnerId=req.params.id;
    res.sendFile(path.join(__dirname, "../public/owner"+ownerId+".html"));
  });

  // this is optional if we have time
  app.get("/admin", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/admin.html"));
  });

};
