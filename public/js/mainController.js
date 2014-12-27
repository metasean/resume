/*
	
	To run locally:
	from directory: sudo mongod
  from directory: mongo
  from directory: nodemon
	ONE MUST GO TO localhost:4200/index.html to access (where port is defined in server/app.js)

*/

var app = angular.module('resumeApp');

app.controller('mainController', function($scope, $window, mainService, $rootScope, $location, $stateParams, applicationRef) {//, applicationsRef, skillsRef, experienceRef, employmentRef, educationRef, awardsRef) {


	$scope.title = "Sean Duncan's Cover Letter and Resume";
	console.log("mainController $scope.title: " + $scope.title);

	$scope.reloadRoute = function() {
		$window.location.reload();
	};

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
		mainService.addSkills()
			.then(function(data) {
				$scope.skills = data.data;
				$scope.reloadRoute();
			});
	};

	$scope.saveSkills = function(skill) {
		mainService.saveSkills(skill)
			.then(function(data) {
				$scope.skills = data.data;
				$scope.reloadRoute();
			});
	};

	$scope.deleteSkills = function(id) {
		mainService.deleteSkills(id)
			.then(function(data) {
				$scope.skills = data.data;
				$scope.reloadRoute();
			});
	};

	// Experience
	mainService.getExperience().then(function(data) {
		//console.log("mainController.getExperience");
		$scope.experience = data.data;
	});

	$scope.newExperience = function() {
		mainService.addExperience()
			.then(function(data) {
				$scope.skills = data.data;
				$scope.reloadRoute();
			});;
	};

	$scope.saveExperience = function(exp) {
		mainService.saveExperiences(exp)
			.then(function(data) {
				$scope.skills = data.data;
				$scope.reloadRoute();
			});
	};

	$scope.deleteExperience = function(id) {
		mainService.deleteExperience(id)
			.then(function(data) {
				$scope.skills = data.data;
				$scope.reloadRoute();
			});
	};

	// Employment
	mainService.getEmployment().then(function(data) {
		//console.log("mainController.getEmployment");
		$scope.employment = data.data;
	});

	$scope.newEmployment = function() {
		mainService.addEmployment()
			.then(function(data) {
				$scope.skills = data.data;
				$scope.reloadRoute();
			});
	};

	$scope.saveEmployment = function(emp) {
		mainService.saveEmployment(emp)
			.then(function(data) {
				$scope.skills = data.data;
				$scope.reloadRoute();
			});
	};

	$scope.deleteEmployment = function(id) {
		mainService.deleteEmployment(id)
			.then(function(data) {
				$scope.skills = data.data;
				$scope.reloadRoute();
			});
	};

	// Education
	mainService.getEducation().then(function(data) {
		//console.log("mainController.getEducation");
		$scope.education = data.data;
	});

	$scope.newEducation = function() {
		mainService.addEducation()
			.then(function(data) {
				$scope.skills = data.data;
				$scope.reloadRoute();
			});
	};

	$scope.saveEducation = function(edu) {
		mainService.saveEducation(edu)
			.then(function(data) {
				$scope.skills = data.data;
				$scope.reloadRoute();
			});
	};

	$scope.deleteEducation = function(id) {
		mainService.deleteEducation(id)
			.then(function(data) {
				$scope.skills = data.data;
				$scope.reloadRoute();
			});
	};


	// Awards
	mainService.getAwards().then(function(data) {
		//console.log("mainController.getAwards");
		$scope.awards = data.data;
	});

	$scope.newAwards = function() {
		mainService.addAwards()
			.then(function(data) {
				$scope.skills = data.data;
				$scope.reloadRoute();
			});
	};

	$scope.saveAwards = function(award) {
		mainService.saveAwards(award)
			.then(function(data) {
				$scope.skills = data.data;
				$scope.reloadRoute();
			});
	};

	$scope.deleteAwards = function(id) {
		mainService.deleteAwards(id)
			.then(function(data) {
				$scope.skills = data.data;
				$scope.reloadRoute();
			});
	};



	// Applications
	mainService.getApplications().then(function(data) {
		//console.log("mainController.getAwards");
		$scope.applications = data.data;
	});


/*****************************************************************************/  

	console.log("applicationRef returned ... ");
	$scope.application = applicationRef;          // for admin.html
	//$scope.application = applicationRef.data[0];  // for application.html

	console.log($scope.application);

/*****************************************************************************/

	$scope.newApplications = function() {
		mainService.addApplications()
			.then(function(data) {
				$scope.skills = data.data;
				$scope.reloadRoute();
			});
	};

	$scope.saveApplications = function(app) {
		mainService.saveApplications(app)
			.then(function(data) {
				$scope.skills = data.data;
				$scope.reloadRoute();
			});
	};

	$scope.deleteApplications = function(id) {
		mainService.deleteApplications(id)
			.then(function(data) {
				$scope.skills = data.data;
				$scope.reloadRoute();
			});
	};
});