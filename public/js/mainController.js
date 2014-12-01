/*
	
	To run locally:
	from directory: sudo mongod
  from directory: mongo
  from directory: nodemon
	ONE MUST GO TO localhost:4200/index.html to access (where port is defined in server/app.js)

*/

var app = angular.module('resumeApp');

app.controller('mainController', function($scope, mainService) {

	$scope.title = "Sean Duncan";

	// SHOW ADDENDUM VAR AND FUNCTION
	$scope.showMe = false;
	$scope.showArrow = false;

	$scope.overAddendum = function() {
		$scope.showMe = true;
		$scope.showArrow = true;
	};
	$scope.offAddendum = function() {
		$scope.showMe = false;
		$scope.showArrow = false;
	};


	// MAIN DATA CALLS
	// Skills
	mainService.getSkills().then(function(data) {
		//console.log("mainController.getSkills");
		$scope.skills = data.data;
	});

	$scope.newSkills = function() {
		mainService.addSkills();
	};

	$scope.saveSkills = function(skill) {
		mainService.saveSkills(skill)
			.then(function(data) {
				$scope.skills = data.data;
			});
	};

	$scope.deleteSkills = function(id) {
		mainService.deleteSkills(id);
	};

	// Experience
	mainService.getExperience().then(function(data) {
		//console.log("mainController.getExperience");
		$scope.experience = data.data;
	});

	$scope.newExperience = function() {
		mainService.addExperience();
	};

	$scope.saveExperience = function(exp) {
		mainService.saveExperiences(exp)
			.then(function(data) {
				$scope.experience = data.data;
			});
	};

	$scope.deleteExperience = function(id) {
		mainService.deleteExperience(id);
	};

	// Employment
	mainService.getEmployment().then(function(data) {
		//console.log("mainController.getEmployment");
		$scope.employment = data.data;
	});

	$scope.newEmployment = function() {
		mainService.addEmployment();
	};

	$scope.saveEmployment = function(emp) {
		mainService.saveEmployment(emp)
			.then(function(data) {
				$scope.employment = data.data;
			});
	};

	$scope.deleteEmployment = function(id) {
		mainService.deleteEmployment(id);
	};

	// Education
	mainService.getEducation().then(function(data) {
		//console.log("mainController.getEducation");
		$scope.education = data.data;
	});

	$scope.newEducation = function() {
		mainService.addEducation();
	};

	$scope.saveEducation = function(edu) {
		mainService.saveEducation(edu)
			.then(function(data) {
				$scope.education = data.data;
			});
	};

	$scope.deleteEducation = function(id) {
		mainService.deleteEducation(id);
	};


	// Awards
	mainService.getAwards().then(function(data) {
		//console.log("mainController.getAwards");
		$scope.awards = data.data;
	});

	$scope.newAwards = function() {
		mainService.addAwards();
	};

	$scope.saveAwards = function(award) {
		mainService.saveAwards(award)
			.then(function(data) {
				$scope.awards = data.data;
			});
	};

	$scope.deleteAwards = function(id) {
		mainService.deleteAwards(id);
	};



	// Awards
	mainService.getApplications().then(function(data) {
		//console.log("mainController.getAwards");
		$scope.applications = data.data;
	});

	$scope.newApplications = function() {
		mainService.addApplications();
	};

	$scope.saveApplications = function(app) {
		mainService.saveApplications(app)
			.then(function(data) {
				$scope.applications = data.data;
			});
	};

	$scope.deleteApplications = function(id) {
		mainService.deleteApplications(id);
	};

});