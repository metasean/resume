var app = angular.module('resumeApp');

app.factory('mainService', function($http) {

	var factoryReturn = {};
	var baseUrl = MONGOHQ_URL || 'http://localhost:4200';

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