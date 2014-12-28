var app = angular.module('resumeApp', ["ui.router", "ngAnimate"]);

app.run(function() {

})



app.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {

	//debugger;

	$stateProvider
		.state('landing', {
			url: '/',
			templateUrl: '../partials/resume.html',
			controller: 'mainController',
			resolve: {
				applicationRef: [function() {
					return ''; //need to refactor
					//this is a hack because I'm using the some controller for too many views
				}]
			}
		})
		.state('admin', {
			url: '/admin',
			templateUrl: '../partials/admin.html',
			controller: 'mainController',
			resolve: {
				applicationRef: ['mainService', '$stateParams', function(mainService, $stateParams) {
					var dataCall = mainService.getApplication($stateParams.applicationId)
					return dataCall;
				}]
			}
		})
		.state('application', {
			url: '/:applicationId',
			templateUrl: '../partials/application.html',
			controller: 'mainController',
			resolve: {
				applicationRef: ['mainService', '$stateParams', function(mainService, $stateParams) {
					var dataCall = mainService.getApplication($stateParams.applicationId);
					//return dataCall[0];
					return dataCall;
				}]
			}
		});

	$urlRouterProvider.otherwise('/');


//	$locationProvider.html5Mode(true);
});

