var mongoose = require('mongoose');

var EduSchema = new mongoose.Schema({
	order: Number,
	institution: String,
	program: String,
	level: String,
	graduated: String,
	addendum: String
});
var Education = mongoose.model('Education', EduSchema);

// USE ONLY TO MANUALLY ADD NEW ENTRIES TO THE ACTUAL DATABASE
// var eduInstance = new Edu({
// 	institution: "Institution of Higher Education",
// 	program: "Psychology",
// 	level: "Bachelors of Art",
// 	graduated: "2000"
// });

// eduInstance.save(function (err, eduInstance) {
// 	if (err) return console.error(err);
// });

var testApi = function(req, res){
	res.send('educationApi is running');
};

var list = function (req, res) {
	Education.find(function (err, data) {
		console.log('GET education list request ...');
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
	Education.find({_id: req.params.id}).limit(1).exec(function (err, data) { 
		//console.log('GET education list request ...');
		try {
			res.json(data);
		} catch (err) {
			console.log(err);
			res.status(404).send(err);
		};
	});
};

var insert = function(req, res) {
	var data = new Education({
		order: '',
		institution: '',
		program: '',
		level: '',
		graduated: '',
		addendum: ''
	});
	console.log(data);
	data.save(function (err, newEducation) {
		try {
			console.log("education created");
			res.send({success: true});
		} catch (err) {
			console.error(err);
			res.status(404).send(error);
		};
	});
};

var update = function(req, res) {
	var query = {_id: req.params.id};
	var updateVal = req.body;

	console.log('Update Education ...');
	Education.where(query).update(updateVal, function (err, data) {
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
	Education.findOneAndRemove({_id: req.params.id}, function (err, data) { 
		console.log('POST education findOneAndRemove request ...');
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