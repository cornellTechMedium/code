angular.module('companiesCtrl', ['companiesService'])
.controller('companiesCtrl', function(Cards, $scope, $timeout, $q, $log, $stateParams, $rootScope) {

	self = this;

    $scope.update = function(user) {
        /**
         * call Node.js Server to call Google NLP
         */
        $rootScope.user = user;
    };
});