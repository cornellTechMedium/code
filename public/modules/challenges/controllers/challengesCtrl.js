var FIRST_COMPANY_INDEX = 0;
var SECOND_COMPANY_INDEX = 1;

angular.module('challengesCtrl', ['challengesService', 'companiesService'])
.controller('challengesCtrl', function(Tabs, Cards, $http, $sce, $scope, $stateParams, $rootScope) {
	
	self = this;


    // self.data = [$rootScope.data];

    $scope.result = '<p>' + $rootScope.request.text + '</p>';

    $http.post('http://localhost:5000/detect', $rootScope.request)
        .success(function(data) {
            // $rootScope.user = $rootScope.request.text;
            // $rootScope.data = data;

            // console.log('THIS IS THE DATA IN challengesCtrl', $rootScope.data);
            data.entities.forEach(function(entity) {
                var index = $scope.result.indexOf(entity.name);

                if (index != -1) {
                    var output = $scope.result.substr(0, index) + '<span class="highlight" ng-click="openTooltip($event)">' +
                        $scope.result.substr(index, entity.name.length) + '</span>' + $scope.result.substr(index + entity.name.length);

                    $scope.result = output;
                }
            });
        })
        .error(function(data) {
            console.log('Error: ' + data);
        });

    $scope.renderHtml = function (htmlCode) {
        return $sce.trustAsHtml(htmlCode);
    };

    $scope.openTooltip = function(event) {
        console.log(event);
        $(event.target).addClass('active');
    }
});