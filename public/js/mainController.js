var app = angular.module('resumeApp');

// REFACTOR: separate out controller functionality
app.controller('mainController', function($scope, $window, mainService, $rootScope, $location, $stateParams, applicationRef, $localStorage) {


	/*****************************************************************************\
	 |
	 |  GENERAL SETUP
	 |
	 \*****************************************************************************/

	// ADD: add applicant to the Applications model
	$scope.applicant = "Sean Duncan";
	console.log("mainController $scope.title: " + $scope.title);
	$scope.printUrl = $location.absUrl();


	/*****************************************************************************\
	 |
	 |  STYLE SWITCHER
	 |
	 \*****************************************************************************/

	// array of available styles
	// ADD: set up styles model in database
	// ADD: add available styles to the Applications model
	/* REFACTOR: change "table: true|false" approach to an "html: partial.html" approach,
		 REFACTOR: or – better yet – go all http://www.csszengarden.com/ with a single partial!!! */

	$scope.styles = [
		//{ // Default prompt to select a style
		//	name       : false,
		//	title      : 'Please select a style',
		//	css        : 'dull-standard',
		//	table      : true,
		//	description: ''
		//},
		{
			name       : 'dull',
			title      : 'Standard',
			css        : 'dull-standard',
			table      : true,
			description: 'A standard tabular resume'
		},
		{
			name       : 'yellow_arrow_ui',
			title      : 'Interactive - Yellow Conversation',
			css        : 'dull-standard',
			table      : false,
			description: 'COMING SOON (Will be a textual conversation about my resume details.)'
		},
		{
			name       : 'spastic',
			title      : 'Spastic - Yellow Larson',
			css        : 'yellow_arrow_spastic_interactive',
			table      : true,
			description: 'Move your mouse up and down over the resume portion to see a vertical Larson Scanner effect.' +
			'\n Or take your time and learn a bit more about me.'
		}
	];


	// initiallize the localStorage.style or the default style
	// ADD: move default page style to applications model
	var localStyleDefined = ! ( ($localStorage.style === undefined)
														 || ($localStorage.style === '')
														 || ($localStorage.style === null)
													  );
	$localStorage.style =  localStyleDefined
												 ?  $localStorage.style
												 : $scope.styles[0];
	$scope.style = $localStorage.style;


	// LocalStorage
	//$scope.$storage = $localStorage;

	$scope.$watch('style', function(val) {
		$localStorage.style = $scope.style;
	});

	// Clear LocalStorage - for TESTING purposes ONLY!
	//$localStorage.$reset();


	/*****************************************************************************\
	 |
	 |  DATA BLOCK
	 |  REFACTOR: DRY data calls
	 |
	 \*****************************************************************************/

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
	mainService.getSkills()
		.then(function(data) {
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
				$scope.experience = data.data;
				$scope.reloadRoute();
			});;
	};

	$scope.saveExperience = function(exp) {
		mainService.saveExperience(exp)
			.then(function(data) {
				$scope.experience = data.data;
				$scope.reloadRoute();
			});
	};

	$scope.deleteExperience = function(id) {
		mainService.deleteExperience(id)
			.then(function(data) {
				$scope.experience = data.data;
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
		//console.log("mainController.getApplications");
		$scope.applications = data.data;
	});


/*****************************************************************************/

	$scope.application = (applicationRef.data[0] === undefined) ?
												{url: "resume"} :
												applicationRef.data[0] ;
	console.log("applicationRef.data[0] returned ==> %o ", $scope.application);

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