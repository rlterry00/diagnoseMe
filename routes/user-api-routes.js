//Add a symptom
app.post("/api/new", function(req, res){
	create.create({
		symptom: req.body.symptom,
		location: req.body.location,
	})
})