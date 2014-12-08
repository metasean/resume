var express = require('express');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bodyParser = require('body-parser');

// http://www.elliotbradbury.com/use-mongohq-heroku-without-verifying-account/
// http://stackoverflow.com/questions/7575664/node-js-connecting-to-mongodb-using-mongohq-on-heroku
// https://docs.compose.io/languages/mongoose.html
// heroku config:set NODE_ENV=production

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


// EDUCATION API
var education = require('./education.js');
app.get('/api', education.testApi);
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


app.set('port', (process.env.PORT || 4200));
app.use(express.static(__dirname + '/../public'));


app.listen(app.get('port'), function() {
	console.log("Express server listening on port: %d", app.get('port'));
});