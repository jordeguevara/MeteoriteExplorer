var express = require("express");
var router = express.Router();

var request = require("request");

/* GET home page. */
router.get("/", function(req, res, next) {
  request("https://data.nasa.gov/resource/gh4g-9sfh.json?$limit=100", function(
    error,
    response,
    body
  ) {
    console.log("error:", error); // Print the error if one occurred and handle it
    console.log("statusCode:", response && response.statusCode); // Print the response status code if a response was received
    // res.send(body);
    // console.log(typeof body);
    res.render("index", { response: body, title: "LandingPage" });
  });
});

module.exports = router;
