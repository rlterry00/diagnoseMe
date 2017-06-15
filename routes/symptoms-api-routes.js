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