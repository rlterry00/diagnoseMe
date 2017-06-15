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
