var FIRST_COMPANY_INDEX = 0;
var SECOND_COMPANY_INDEX = 1;

angular.module('challengesCtrl', ['challengesService', 'companiesService'])
.controller('challengesCtrl', function(Tabs, Cards, $stateParams, $rootScope) {
	
	self = this;

    self.user =  [$rootScope.user];
});