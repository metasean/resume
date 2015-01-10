
var path = require('path');
var express = require('express');
var http = require('http');
var mongoose = require('mongoose');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var Schema = mongoose.Schema;
var bodyParser = require('body-parser');

var mongoUri = process.env.MONGOHQ_URL || process.env.MONGOLAB_URI ||'mongodb://localhost/resume';
mongoose.connect(mongoUri);

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback () {
	console.log("mongoose.connection successful");
});

var app = express();


// parse json with body-parser module
app.use(bodyParser.json());

//app.use(express.cookieParser());
//app.use(express.session({ secret: 'double dapple'}));



// EDUCATION API
var education = require('./education.js');
app.get('/education', education.list);
app.get('/education/:id', education.show);
app.post('/education', education.insert);
app.post('/education/:id/update', education.update);
app.post('/education/:id/delete', education.remove);

// EMPLOYMENT API
var employment = require('./employment.js');
app.get('/employment', employment.list);
app.get('/employment/:id', employment.show);
app.post('/employment', employment.insert);
app.post('/employment/:id/update', employment.update);
app.post('/employment/:id/delete', employment.remove);

// AWARDS API
var awards = require('./awards.js');
app.get('/awards', awards.list);
app.get('/awards/:id', awards.show);
app.post('/awards', awards.insert);
app.post('/awards/:id/update', awards.update);
app.post('/awards/:id/delete', awards.remove);

// SKILLS API
var skills = require('./skills.js');
app.get('/skills', skills.list);
app.get('/skills/:id', skills.show);
app.post('/skills', skills.insert);
app.post('/skills/:id/update', skills.update);
app.post('/skills/:id/delete', skills.remove);

// EXPERIENCE API
var experience = require('./experience.js');
app.get('/experience', experience.list);
app.get('/experience/:id', experience.show);
app.post('/experience', experience.insert);
app.post('/experience/:id/update', experience.update);
app.post('/experience/:id/delete', experience.remove);

// APPLICATIONS API
var applications = require('./applications.js');
app.get('/applications', applications.list);
app.get('/applications/:id', applications.show);  // !!!! FIND BY URL NOT BY ID !!!!!
app.post('/applications', applications.insert);
app.post('/applications/:id/update', applications.update);
app.post('/applications/:id/delete', applications.remove);

// PASSPORT LOCAL LOGIN
var User = require('./account.js');

passport.use(new LocalStrategy(User.createStrategy()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.get('/register', function(req, res) {
	res.render('register', {});
});

app.post('/register', function(req, res, next) {
	console.log('registering Passport user');
	Account.register(new Account({ username: req.body.username }), req.body.password, function (err) {
		if (err) {
			console.log('error while registering new user!');
			return next(err);
		}

		console.log('user registered');

		//passport.authenticate('local')(req, res, function() {
		res.redirect('/');
	});
});


// FINAL CONFIG AND RUN
app.set('port', (process.env.PORT || 4200));


app.use(express.static(__dirname + '/../public'));


app.use(passport.initialize());
app.use(passport.session());

app.listen(app.get('port'), function() {
	console.log("Express server listening on port: %d", app.get('port'));
});