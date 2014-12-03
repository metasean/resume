var app = angular.module('resumeApp');

app.factory('mainService', function($location, $http) {

	var factoryReturn = {};
//	var baseUrl = 'http://meteasean-resume.jit.su' || 'metasean-resume.herokuapp.com';
//	var baseUrl = 'http://localhost:4200' ;
	var baseUrl = "http://" + $location.host() + ":" + $location.port();
	console.log(baseUrl);

		    // SKILLS
	factoryReturn.getSkills = function() {
		return $http({
			method: 'GET',
			url: baseUrl + '/skills'
		});
	};

	factoryReturn.addSkills = function() {
		return $http({
			method: 'POST',
			url: baseUrl + '/skills'
		})
			.success(function(data) {
				console.log("successful update");
				console.log(data);
			})
			.error(function(data) {
				console.log("error on update");
				console.log(data);
			});
	};

	factoryReturn.saveSkills = function(data) {
		console.log(data);
		return $http({
			method: 'POST',
			url: baseUrl + '/skills/' + data._id + '/update',
			data: data
		})
			.success(function(data) {
				console.log("successful update");
				console.log(data);
			})
			.error(function(data) {
				console.log("error on update");
				console.log(data);
			})
	};

	factoryReturn.deleteSkills = function(id) {
		return $http({
			method: 'POST',
			url: baseUrl + '/skills/' + id + '/delete'
		})
			.success(function(data) {
				console.log("successful update");
				console.log(data);
			})
			.error(function(data) {
				console.log("error on update");
				console.log(data);
			});
	};

	// EXPERIENCE
	factoryReturn.getExperience = function() {
		return $http({
			method: 'GET',
			url: baseUrl + '/experience'
		});
	};

	factoryReturn.addExperience = function() {
		return $http({
			method: 'POST',
			url: baseUrl + '/experience'
		});
	};

	factoryReturn.saveExperience = function(data) {
		console.log(data);
		return $http({
			method: 'POST',
			url: baseUrl + '/experience/' + data._id + '/update',
			data: data
		})
			.success(function(){console.log("successful update")})
			.error(function(){console.log("error on update")})/*.then(function(response){
		 deferred.resolve(response.data.results);
		 })*/;
	};

	factoryReturn.deleteExperience = function(id) {
		return $http({
			method: 'POST',
			url: baseUrl + '/experience/' + id + '/delete'
		});
	};

	// EMPLOYMENT
	factoryReturn.getEmployment = function() {
		return $http({
			method: 'GET',
			url: baseUrl + '/employment'
		});
	};

	factoryReturn.addEmployment = function() {
		return $http({
			method: 'POST',
			url: baseUrl + '/employment'
		});
	};

	factoryReturn.saveEmployment = function(data) {
		console.log(data);
		return $http({
			method: 'POST',
			url: baseUrl + '/employment/' + data._id + '/update',
			data: data
		})
			.success(function(){console.log("successful update")})
			.error(function(){console.log("error on update")})/*.then(function(response){
		 deferred.resolve(response.data.results);
		 })*/;
	};

	factoryReturn.deleteEmployment = function(id) {
		return $http({
			method: 'POST',
			url: baseUrl + '/employment/' + id + '/delete'
		});
	};

	// EDUCATION
	factoryReturn.getEducation = function() {
		return $http({
			method: 'GET',
			url: baseUrl + '/education'
		});
	};

	factoryReturn.addEducation = function() {
		return $http({
			method: 'POST',
			url: baseUrl + '/education'
		});
	};

	factoryReturn.saveEducation = function(data) {
		console.log(data);
		return $http({
			method: 'POST',
			url: baseUrl + '/education/' + data._id + '/update',
			data: data
		})
			.success(function(){console.log("successful update")})
			.error(function(){console.log("error on update")})/*.then(function(response){
		 deferred.resolve(response.data.results);
		 })*/;
	};

	factoryReturn.deleteEducation = function(id) {
		return $http({
			method: 'POST',
			url: baseUrl + '/education/' + id + '/delete'
		});
	};

	// AWARDS
	factoryReturn.getAwards = function() {
		return $http({
			method: 'GET',
			url: baseUrl + '/awards'
		});
	};

	factoryReturn.addAwards = function() {
		return $http({
			method: 'POST',
			url: baseUrl + '/awards'
		});
	};

	factoryReturn.saveAwards = function(data) {
		console.log(data);
		return $http({
			method: 'POST',
			url: baseUrl + '/awards/' + data._id + '/update',
			data: data
		})
			.success(function(){console.log("successful update")})
			.error(function(){console.log("error on update")})/*.then(function(response){
		 deferred.resolve(response.data.results);
		 })*/;
	};

	factoryReturn.deleteAwards = function(id) {
		return $http({
			method: 'POST',
			url: baseUrl + '/awards/' + id + '/delete'
		});
	};



	// APPLICATIONS
	factoryReturn.getApplications = function() {
		return $http({
			method: 'GET',
			url: baseUrl + '/applications'
		});
	};

	factoryReturn.addApplications = function() {
		return $http({
			method: 'POST',
			url: baseUrl + '/applications'
		});
	};

	factoryReturn.saveApplications = function(data) {
		console.log(data);
		return $http({
			method: 'POST',
			url: baseUrl + '/applications/' + data._id + '/update',
			data: data
		})
			.success(function(){console.log("successful update")})
			.error(function(){console.log("error on update")})/*.then(function(response){
		 deferred.resolve(response.data.results);
		 })*/;
	};

	factoryReturn.deleteApplications = function(id) {
		return $http({
			method: 'POST',
			url: baseUrl + '/applications/' + id + '/delete'
		});
	};

	return factoryReturn;
});