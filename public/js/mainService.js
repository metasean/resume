var app = angular.module('resumeApp');

app.factory('mainService', ['$location', '$http', function($location, $http) {

	var categoriesTEST = ['Applications'];

	var factoryReturn = {};
	var categories = ['Applications', 'Skills', 'Experience', 'Employment', 'Education', 'Awards'];
	var baseUrl = $location.protocol() + "://" + $location.host() + ":" + $location.port();

	console.log("baseUrl is: " + baseUrl);

	// GET CATEGORY LISTS
	categories.forEach(function(category) {
		var lower = category.toLowerCase();
		factoryReturn['get' + category] = function() {
			return $http({
				method: 'GET',
				url: baseUrl + '/' + lower
			})
				.success(function (data) {
					console.log("Successfully retrieved " + category + " list");
					console.log(data);
				})
				.error(function (data) {
					console.log("mainService get" + category + ": error is " + err);
					console.log(data);
				});
		}
	});

	// ADD NEW CATEGORY ENTRY
	categories.forEach(function(category) {
		var lower = category.toLowerCase();
		factoryReturn['add' + category] = function () {
			return $http({
				method: 'POST',
				url   : baseUrl + '/' + lower
			})
				.success(function (data) {
					console.log("successful update");
					console.log(data);
				})
				.error(function (data) {
					console.log("error on update");
					console.log(data);
				});
		};
	});

	// SAVE CATEGORY ENTRY
	categories.forEach(function(category) {
		var lower = category.toLowerCase();
		factoryReturn['save' + category] = function (data) {
			console.log(data);
			return $http({
				method: 'POST',
				url   : baseUrl + '/' + lower + '/' + data._id + '/update',
				data  : data
			})
				.success(function(data) {
					console.log("successful update");
					console.log(data);
				})
				.error(function(data) {
					console.log("error on update");
					console.log(data);
				});
		};
	});


	// DELETE CATEGORY ENTRY
	categories.forEach(function(category) {
		var lower = category.toLowerCase();
		factoryReturn["delete" + category] = function(id) {
			return $http({
				method: 'POST',
				url: baseUrl + '/' + lower + '/' + id + '/delete'
			})
				.success(function(data) {
					console.log("successful update");
					console.log(data);
				})
				.error(function(data) {
					console.log("error on update");
					console.log(data);
				});
		};
	});

	// GET APPLICATION BY URL
	// used to facilitate application-specific urls
	factoryReturn.getApplication = function(applicationId) {
		console.log("mainService getApplication: " + baseUrl + '/applications/' + applicationId);
		return $http({
			method: 'GET',
			url: baseUrl + '/applications/' + applicationId
		})
			.success(function(data, status, headers, config){
				console.log("mainService getApplication(" + applicationId + "): successful")
				console.log(data)
				return(data)
			})
			.error(function(err, status, headers, config){
				console.log("mainService getApplication(" + applicationId + "): error is " + err)
			})
	};

	return factoryReturn;
}]);