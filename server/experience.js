var mongoose = require('mongoose');

var ExpSchema = new mongoose.Schema({
	order: Number,
	title: String,
	addendum: String
});
var Experience = mongoose.model('Experience', ExpSchema);

// USE ONLY TO MANUALLY ADD NEW ENTRIES TO THE ACTUAL DATABASE
// var eduInstance = new Edu({
// 	institution: "Institution of Higher Experience",
// 	program: "Psychology",
// 	level: "Bachelors of Art",
// 	graduated: "2000"
// });

// eduInstance.save(function (err, eduInstance) {
// 	if (err) return console.error(err);
// });

var testApi = function(req, res){
	res.send('ExperienceApi is running');
};

var list = function (req, res) {
	Experience.find(function (err, data) {
		//console.log('GET Experience list request ...');
		try {
			res.json(data);
		} catch (err) {
			console.log(err);
			res.status(404).send(err);
		};
	});
};

var show = function (req, res) {
	// limit(1) trick per: http://codeandcodes.com/tag/findone/
	Experience.find({_id: req.params.id}).limit(1).exec(function (err, data) { 
		//console.log('GET Experience list request ...');
		try {
			res.json(data);
		} catch (err) {
			console.log(err);
			res.status(404).send(err);
		};
	});
};

var insert = function(req, res) {
	var newExperience = new Experience({
		order: Number,
		title: req.body.title,
		addendum: req.body.addendum
	});
	console.log(newExperience);
	newExperience.save(function (err, newExperience) {
		try {
			console.log("Experience created");
			res.send({success: true});
		} catch (err) {
			console.error(err);
			res.status(404).send(error);
		};
	});
};

var update = function(req, res) {
	var data = new Experience({
		order: Number,
		title: req.body.title,
		addendum: req.body.addendum
	});
	console.log(data);
	Experience.findOneAndUpdate({_id: req.params.id}, req.body, function (err, data) {
		try {
			console.log(req.body);
			res.send({success: true});
		} catch (err) {
			console.error(err);
			res.status(404).send(error);
		};
	});
};

var remove = function(req, res) {
	Experience.findOneAndRemove({_id: req.params.id}, function (err, data) { 
		console.log('POST Experience findOneAndRemove request ...');
		try {
			res.json(data);
		} catch (err) {
			console.log(err);
			res.status(404).send(err);
		};
	});
};

module.exports = {
	testApi: testApi,
	list: list,
	show: show,
	insert: insert,
	update: update,
	remove: remove
};