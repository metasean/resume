var mongoose = require('mongoose');

var ApplicationSchema = new mongoose.Schema({
	order: Number,
	title: String,
	url: String,
	coverLetter: String
});
var Application = mongoose.model('Application', ApplicationSchema);

var list = function (req, res) {
	Application.find(function (err, data) {
		console.log('GET Applications list request ...');
		try {
			res.json(data);
		} catch (err) {
			console.log(err);
			res.status(404).send(err);
		};
	});
};

var show = function (req, res) {  // !!!!! FIND BY URL NOT BY ID !!!!!
	// limit(1) trick per: http://codeandcodes.com/tag/findone/
	Application.find({url: req.params.id}).limit(1).exec(function (err, data) {
		//console.log(req.params);
		console.log('GET Application list request for ' + req.params.id + '...');
		try {
			res.json(data);
		} catch (err) {
			console.log(err);
			res.status(404).send(err);
		};
	});
};

var insert = function(req, res) {
	var data = new Application({
		order: 999,
		title: 'title',
		url: 'url',
		coverLetter: 'cover letter'
	});
	console.log(data);
	data.save(function (err, data) {
		try {
			console.log("Application created");
			res.send({success: true});
		} catch (err) {
			console.error(err);
			res.status(404).send(error);
		};
	});
};

var update = function(req, res) {
	var data = new Application({
		order: Number,
		title: req.body.title,
		url: String,
		coverLetter: req.body.coverLetter
	});
	console.log(data);
	Application.findOneAndUpdate({_id: req.params.id}, req.body, function (err, data) {
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
	Application.findOneAndRemove({_id: req.params.id}, function (err, data) {
		console.log('POST Application findOneAndRemove request ...');
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