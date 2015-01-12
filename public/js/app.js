var app = angular.module('resumeApp', ["ui.router", "ngAnimate", "ngStorage", "btford.markdown"]);

app.run(function() {

})



app.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {

	//debugger;

	$stateProvider
		.state('landing', {
			url: '/',
			templateUrl: '../partials/metasean.html',
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
				//applicationRef: ['mainService', '$stateParams', function(mainService, $stateParams) {
				//	var dataCall = mainService.getApplication($stateParams.applicationId);
				//	console.log("dataCall is: %o", dataCall);
				//	return dataCall;
				//}]
				applicationRef: ['mainService', '$stateParams', function(mainService, $stateParams) {
					return mainService.getApplication($stateParams.applicationId)
						.success(function(data) {
							console.log("applicationRef success");
							return data;
						})
						.error(function(error) {
							console.log("applicationRef error");
							return;
						});
				}]
			}
		});

	$urlRouterProvider.otherwise('/');


//	$locationProvider.html5Mode(true);
});