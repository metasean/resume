var mongoose = require('mongoose');

var SkillSchema = new mongoose.Schema({
	order: Number,
	title: String,
	level: Number,
	addendum: String
});
var Skill = mongoose.model('Skill', SkillSchema);

var list = function (req, res) {
	Skill.find().sort('-order').exec(function (err, data) {
		console.log('List Skills request ...');
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
	Skill.find({_id: req.params.id}).limit(1).exec(function (err, data) { 
		console.log('Show Skill request ...');
		try {
			res.json(data);
		} catch (err) {
			console.log(err);
			res.status(404).send(err);
		};
	});
};

var insert = function(req, res) {
	var data = new Skill({
		order: '',
		title: '',
		level: '',
		addendum: ''
	});
	console.log('Insert Skill request ...');
	data.save(function (err, data) {
		try {
			console.log("Skill created...");
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

	console.log('Update Skill ...');
	Skill.where(query).update(updateVal, function (err, data) {
		try {
			console.log("MongoDB Update's WriteResult: %o", data);
			res.send({success: true});
		} catch (err) {
			console.log("API update errored");
			console.error(err);
			res.status(404).send(error);
		};
	});
};

var remove = function(req, res) {
	Skill.findOneAndRemove({_id: req.params.id}, function (err, data) { 
		console.log('Remove Skill request ...');
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