var app = angular.module('resumeApp', ["ui.router", "ngAnimate"]);



app.config(function ($stateProvider, $urlRouterProvider) {
	$stateProvider
		.state('landing', {
			url: '/',
			templateUrl: '../index.html'
		})
		.state('admin', {
			url: '/admin',
			templateUrl: '../admin.html'
		})
		.state('application', {
			url: '/:applicationId',
			templateUrl: '../application.html',
			resolve:{
				applicationId: ['$stateParams', function($stateParams){
					console.log(applicationId);
					return $stateParams.applicationId;
				}]
			}
		})

	$urlRouterProvider.otherwise('/');
});