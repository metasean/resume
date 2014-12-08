var app = angular.module('resumeApp', ["ui.router", "ngAnimate"]);



app.config(function ($stateProvider, $urlRouterProvider) {
	$stateProvider
		.state('landing', {
			url: '/',
			templateUrl: '../partials/resume.html'
		})
		.state('admin', {
			url: '/admin',
			templateUrl: '../admin.html'
		})
		.state('landing/application', {
			url: '/:applicationId',
			templateUrl: '../partials/application.html',
			resolve:{
				applicationId: ['$stateParams', function($stateParams){
					console.log(applicationId);
					return $stateParams.applicationId;
				}]
			}
		})

	$urlRouterProvider.otherwise('/');
});