var mongoose = require('mongoose');

var AwardSchema = new mongoose.Schema({
	order: Number,
	organization: String,
	title: String,
	date: Number,
	addendum: String
});
var Award = mongoose.model('Award', AwardSchema);

var list = function (req, res) {
	Award.find(function (err, data) {
		//console.log('GET Award list request ...');
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
	Award.find({_id: req.params.id}).limit(1).exec(function (err, data) { 
		//console.log('GET Award list request ...');
		try {
			res.json(data);
		} catch (err) {
			console.log(err);
			res.status(404).send(err);
		};
	});
};

var insert = function(req, res) {
	var data = new Award({
		order: Number,
		organization: req.body.organization,
		title: req.body.title,
		date: req.body.date,
		addendum: req.body.addendum
	});
	console.log(data);
	data.save(function (err, data) {
		try {
			console.log("Award created");
			res.send({success: true});
		} catch (err) {
			console.error(err);
			res.status(404).send(error);
		};
	});
};

var update = function(req, res) {
	var data = new Award({
		order: Number,
		organization: req.body.organization,
		title: req.body.title,
		date: req.body.date,
		addendum: req.body.addendum
	});
	console.log(data);
	Award.findOneAndUpdate({_id: req.params.id}, req.body, function (err, data) {
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
	Award.findOneAndRemove({_id: req.params.id}, function (err, data) { 
		console.log('POST Award findOneAndRemove request ...');
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