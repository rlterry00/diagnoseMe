<<<<<<< HEAD
//api-routes.js - this file offers a set of routes for displaying and saving data to the db


//Dependencies

//Require our symptoms model
var Symptom = require("..models/symptoms.js");

//Routes
module.exports = function(app) {
	//Get all symptoms route
	app.get("/api/all", function(req, res){
		Symptom.findAll({}).then(function(results){
			res.json(results);
		});
	});

	//Get a specific symptom route
	app.get("/api/:symptom", function(req, res){
		if (req.params.symptom) {
			Symptom.findAll({
				where: {
					description: {
						$iLike: '%hat'
					}
				}
			}).then(function(results){
			res.json(results);
			});
		}
	});
}
=======
var db = require("../models");

module.exports = function(app) {
app.post("/", function(req, res) {
	console.log(req.body);
   db.symptoms.create({
      zipcode: req.body.zip,
      symptoms: req.body.symptom
    })
    .then(function(dbSym) {
      // res.json(dbSym);
      res.redirect("/");
    });
  });
	};
>>>>>>> 3f7b510fd970f3838980858db415c89ebfe8da00
