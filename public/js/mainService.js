var app = angular.module('resumeApp');

app.factory('mainService', ['$location', '$http', function($location, $http) {

	var categoriesTEST = ['Applications'];

	var factoryReturn = {};
	var categories = ['Applications', 'Skills', 'Experience', 'Employment', 'Education', 'Awards'];
	var baseUrl = $location.protocol() + "://" + $location.host() + ":" + $location.port();

	// console.log("baseUrl is: " + baseUrl);

	// GET CATEGORY LISTS
	categories.forEach(function(category) {
		var lower = category.toLowerCase();
		factoryReturn['get' + category] = function() {
			return $http({
				method: 'GET',
				url: baseUrl + '/' + lower
			})
				.success(function (data) {
					// console.log("Successfully retrieved %s ==> %o", category, data);
				})
				.error(function (data) {
					console.error("mainService get" + category + ": error is " + err);
					console.error(data);
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
					// console.log("Successfully created a new " + category + " entry");
					// console.log(data);
				})
				.error(function (data) {
					console.error("mainService created" + category + ": error is " + err);
					console.error(data);
				});
		};
	});

	// SAVE CATEGORY ENTRY
	categories.forEach(function(category) {
		var lower = category.toLowerCase();
		factoryReturn['save' + category] = function (data) {
			// console.log(data);
			return $http({
				method: 'POST',
				url   : baseUrl + '/' + lower + '/' + data._id + '/update',
				data  : data
			})
				.success(function(data) {
					// console.log("Successfully updated " + category + " " + data._id + " entry");
					// console.log(data);
				})
				.error(function(data) {
					console.error("mainService save" + category + ": error is " + err);
					console.error(data);
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
					// console.log("Successfully deleted " + category + " " + data._id + " entry");
					// console.log(data);
				})
				.error(function(data) {
					console.error("mainService delete" + category + ": error is " + err);
					console.error(data);
				});
		};
	});

	// GET APPLICATION BY URL
	// used to facilitate application-specific urls
	factoryReturn.getApplication = function(applicationId) {
		// console.log("mainService getApplication: " + baseUrl + '/applications/' + applicationId);
		return $http({
			method: 'GET',
			url: baseUrl + '/applications/' + applicationId
		})
			.success(function(data, status, headers, config){
				// console.log("Successfully returned mainService getApplication(%s) ==> %o", applicationId, data);
				//debugger;
				return new Promise(function(resolve, reject) {
					if (!data[0]) {
						var error = "indicated application – %s – does not exist", applicationId;
						// console.log(error);
						reject(Error(error));
					}
					else {
						// console.log("application URL defined; returning data");
						// console.log("url is " + data[0].url);
						resolve(data);
					}
				});
			})
			.error(function(err, status, headers, config){
				debugger;
				console.error("mainService getApplication(" + applicationId + "): error is " + err);
				console.error(data);
			})
	};

	return factoryReturn;
}]);