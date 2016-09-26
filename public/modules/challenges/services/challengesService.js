angular.module('challengesService', [])
.factory('Tabs', function($http) {
	
	var challengesFactory = {};

	// Replicate $http request returning JSON
	challengesFactory.all = function() {

		return $http.get('./modules/challenges/services/challenges.json');

	};

	return challengesFactory;

});