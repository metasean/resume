/*
	
	Remember:
	ONE MUST GO TO localhost:3000/index.html to access
	OR
	ONE MUST GO TO localhost:8080/index.html to access

*/

var app = angular.module('resumeApp');

app.controller('mainController', function($scope, mainService) {

	$scope.title = "Sean Duncan";

	// SHOW ADDENDUM VAR AND FUNCTION
	$scope.showAddendum = false;

	$scope.toggleAddendum = function() {
		$scope.showAddendum = !$scope.showAddendum;
	};


	$scope.overAddendum = function() {
		$scope.showAddendum = true;
	};
	$scope.offAddendum = function() {
		$scope.showAddendum = false;
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