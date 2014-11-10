/*
	
	Remember:
	ONE MUST GO TO localhost:3000/index.html to access (where port is defined in server/app.js)

*/

var app = angular.module('resumeApp');

app.controller('mainController', function($scope, mainService) {

	$scope.title = "Sean Duncan";

	// SHOW ADDENDUM VAR AND FUNCTION
	$scope.showAddendum = false;
	$scope.showArrow = false;

	$scope.overAddendum = function() {
		$scope.showAddendum = true;
		$scope.showArrow = true;
	};
	$scope.offAddendum = function() {
		$scope.showAddendum = false;
		$scope.showArrow = false;
	};


	// MAIN DATA CALLS
	mainService.getSkills().then(function(data) {
		console.log("mainController.getSkills");
		$scope.skills = data.data;
	});

	mainService.getExperience().then(function(data) {
		console.log("mainController.getExperience");
		$scope.experience = data.data;
	});

	mainService.getEmployment().then(function(data) {
		console.log("mainController.getEmployment");
		$scope.employment = data.data;
	});

	mainService.getEducation().then(function(data) {
		console.log("mainController.getEducation");
		$scope.education = data.data;
	});

	mainService.getAwards().then(function(data) {
		console.log("mainController.getAwards");
		$scope.awards = data.data;
	});

});