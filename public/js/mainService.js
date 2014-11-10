var app = angular.module('resumeApp');

app.factory('mainService', function($http) {

	var factoryReturn = {};
	var baseUrl = 'http://localhost:4200' || MONGOHQ_URL;

	factoryReturn.getSkills = function() {
		return $http({
			method: 'GET',
			url: baseUrl + '/skills'
		});
	};

	factoryReturn.getExperience = function() {
		return $http({
			method: 'GET',
			url: baseUrl + '/experience'
		});
	};

	factoryReturn.getEmployment = function() {
		return $http({
			method: 'GET',
			url: baseUrl + '/employment'
		});
	};

	factoryReturn.getEducation = function() {
		return $http({
			method: 'GET',
			url: baseUrl + '/education'
		});
	};

	factoryReturn.getAwards = function() {
		return $http({
			method: 'GET',
			url: baseUrl + '/awards'
		});
	};

	return factoryReturn;
});