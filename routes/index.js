var express = require("express");
var router = express.Router();

var request = require("request");

router.get("/", function(req, res, next) {
  request("https://data.nasa.gov/resource/gh4g-9sfh.json", function(
    error,
    response,
    body
  ) {
    console.log("error:", error); // Print the error if one occurred and handle it
    console.log("statusCode:", response && response.statusCode); // Print the response status code if a response was received
    res.render("index", {
      response: body,
      title: "Metorite  Explorer",
      min: 0,
      max: 50
    });
  });
});

module.exports = router;
