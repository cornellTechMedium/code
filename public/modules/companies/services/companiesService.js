angular.module('companiesService', [])
.factory('Cards', function($http) {
	
	var companiesFactory = {};

	// Replicate $http request returning JSON
	companiesFactory.all = function() {
		
		return $http.get('./modules/companies/services/companies.json');
	};

	return companiesFactory;

});