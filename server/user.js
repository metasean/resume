var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    passportLocalMongoose = require('../lib/passport-local-mongoose.js');

var User = new Schema({
	resumename: String
});

User.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', User);