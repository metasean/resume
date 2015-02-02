//module.exports = function(config, mongoose, nodemailer) {

	var mongoose = require('mongoose');
	var crypto = require('crypto');

	var UserSchema = new mongoose.Schema({
		email: { type: String, unique: true },
		password: {type: String },
		name: { type: String },
		admin: { type: Boolean }
	});

	var User = mongoose.model('User', UserSchema);

	var registerCb = function(err) {
		if (err) {
			return console.log(err);
		};
		return console.log('User account successfully created');
	};

	var changePswd = function(userId, newpassword) {
		var shaSum = crypto.createHash('sha256');
		shaSum.update(newpassword);
		var hashedPswd = shaSum.digest('hex');
		User.update({_id:userId},
			          {$set: {password: hashedPswd}},
								{upsert: false},
								function changePswdCb(err) {
			            console.log('Password successfully changed for ' + userId);
			          });
	};

	var forgotPswd = function(email, resetPswdUrl, cb) {
		var user = User.findOne({email: email}, function findAccount(err, doc) {
			if (err) {
				// email address is not a valid user
				callback(false);
			} else {
				var smtpTransport = nodemailer.createTransport('SMTP', config.mail);
				resetPswdUrl += '?user=' + doc._id;
				smtpTransport.sendMail({
					from   : 'help.email@address.com',
					to     : doc.email,
					subject: 'MetaSean Application: Password Reset',
					text   : 'Click her to reset your password: ' + resetPasswordUrl
				}, function forgotPswdResult(err) {
					if (err) {
						callback(false);
					} else {
						callback(true);
					}
				});
			}
		});
	};

  var loginCheck = function(email, pswd, cb) {

		var shaSum = crypto.createHash('sha256');

		shaSum.update(pswd);

		User.findOne({email: email,
								  password:shaSum.digest('hex')},
								  function(err, doc) {
									  var data = {name: doc.name, admin: doc.admin};
										cb(null != doc, data);
									});
  };

	var login = function(req, res) {
		console.log('user login request');


		var email = req.param('email', null);
		var password = req.param('password', null);

		if (null == email || email.length < 1
		    || null == password || password.length < 1 ) {
			res.sendStatus(400);
			return;
		}

		loginCheck(email, password, function(success, data) {
			if ( !success ) {
				console.log("No such username and password")
				res.sendStatus(400);
				return;
			}
			console.log('login was successful');
			res.status(200).send(data);
		})
	};

	var register = function (req, res) {
		console.log('new user register request');
		var name = req.param('name', '');
		var email = req.param('email', null);
		var password = req.param('password', null);
		var admin = req.param('admin', '');

		if ( null == email || null == password ) {
			res.sendStatus(400);
			return;
		}
		else {
			var shaSum = crypto.createHash('sha256');
			shaSum.update(password);

			console.log('Registering ' + email);
			var user = new User({
				email   : email,
				name    : name,
				password: shaSum.digest('hex')
			});

			user.save(registerCb);
			console.log('Save command was sent');

			res.sendStatus(200);
		}
	};

	var remove = function (req, res) {
		console.log('deleting user');

		var email = req.param('email', null);
		var password = req.param('password', null);

		if ( null == email || null == password ) {
			res.sendStatus(400);
			return;
		}

		loginCheck(email, password, function(success) {
			if ( !success ) {
				res.sendStatus(400);
				return;
			}
			User.findOneAndRemove({email: email}, function (err, data) {
				console.log('POST User findOneAndRemove request ...');
				try {
					res.json(data);
				} catch (err) {
					console.log(err);
					res.status(404);
				};
			});
		})
	};

//	return {
module.exports = {
		register: register,
		forgotPswd: forgotPswd,
		changePswd: changePswd,
		login: login,
	  remove: remove,
		User: User
//	}
};

