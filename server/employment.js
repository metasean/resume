var mongoose = require('mongoose');

var EmpSchema = new mongoose.Schema({
	order: Number,
	organization: String,
	title: String,
	start: String,
	end: String,
	addendum: String
});
var Employment = mongoose.model('Employment', EmpSchema);

var list = function (req, res) {
	Employment.find(function (err, data) {
		console.log('GET Employment list request ...');
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
	Employment.find({_id: req.params.id}).limit(1).exec(function (err, data) { 
		//console.log('GET Employment list request ...');
		try {
			res.json(data);
		} catch (err) {
			console.log(err);
			res.status(404).send(err);
		};
	});
};

var insert = function(req, res) {
	var data = new Employment({
		order: '',
		organization: '',
		title: '',
		start: '',
		end: '',
		addendum: ''
	});
	console.log('Insert Employment request ...');
	data.save(function (err, data) {
		try {
			console.log("Employment created ...");
			console.log(data);
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

	console.log('Update Employment ...');
	Employment.where(query).update(updateVal, function (err, data) {
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
	Employment.findOneAndRemove({_id: req.params.id}, function (err, data) { 
		console.log('POST Employment findOneAndRemove request ...');
		try {
			res.json(data);
		} catch (err) {
			console.log(err);
			res.status(404).send(err);
		};
	});
};

module.exports = {
	list: list,
	show: show,
	insert: insert,
	update: update,
	remove: remove
};