var module = angular.module('challengesCtrl', ['challengesService', 'companiesService']);

module.controller('challengesCtrl', function(Tabs, Cards, $compile, $http, $sce, $scope, $stateParams, $rootScope) {
	
	self = this;


    // self.data = [$rootScope.data];

    $scope.result = '<p>' + $rootScope.request.text + '</p>';

    $scope.openTooltip = function(event) {


        $scope.tooltip = '<md-title>Images</md-title><md-content layout-padding>' +
            '<md-grid-list  md-cols-gt-md="12" md-cols="3" md-cols-md="8" md-row-height-gt-md="1:1" md-row-height="4:3" md-gutter-gt-md="16px" md-gutter-md="8px" md-gutter="4px" >';

        var entity = $scope.data.hashmap[event.target.innerText];

        entity.googleImages.forEach(function(image) {
           $scope.tooltip += '<md-grid-tile md-rowspan="2" md-colspan="2" md-colspan-sm="1" md-colspan-xs="1">' +
               '<img class="image-responsive" src="' + image.url +'"/>' +
               '</md-grid-tile>';
        });
        $scope.tooltip +=  '</md-grid-list></md-content>';

        $scope.wikipedia = '<md-title>Wikipedia</md-title><p>';

        $scope.wikipedia += entity.wikipedia.itemListElement[0].result.detailedDescription.articleBody;

        $scope.wikipedia += '</p>';

        $scope.youtube = '<md-title>YouTube</md-title><p>';

        $scope.youtube += '<iframe width="420" height="315" src="https://www.youtube.com/embed/' +
            entity.youtube.items[0].id.videoId + '"</iframe>';
    };
    $http.post('http://localhost:5000/detect', $rootScope.request)
        .success(function(data) {
            // $rootScope.user = $rootScope.request.text;
            // $rootScope.data = data;
            $scope.data = data;
            // console.log('THIS IS THE DATA IN challengesCtrl', $rootScope.data);
            data.entities.forEach(function(entity) {
                var index = $scope.result.indexOf(entity.name);

                if (index != -1) {
                    var output = $scope.result.substr(0, index) + '<span class="highlight" ng-click="openTooltip($event)">' +
                        $scope.result.substr(index, entity.name.length) + '</span>' + $scope.result.substr(index + entity.name.length);

                    $scope.result = output;
                }
            });

            // $compile($scope.result)($scope);

        })
        .error(function(data) {
            console.log('Error: ' + data);
        });

});

module.directive('dynamic', function ($compile) {
    return {
        restrict: 'A',
        replace: true,
        link: function (scope, ele, attrs) {
            scope.$watch(attrs.dynamic, function(html) {
                ele.html(html);
                $compile(ele.contents())(scope);
            });
        }
    };
});

module.directive('tooltip', function ($compile) {
    return {
        restrict: 'A',
        replace: true,
        link: function (scope, ele, attrs) {
            scope.$watch(attrs.tooltip, function(html) {
                ele.html(html);
                $compile(ele.contents())(scope);
            });
        }
    };
});

module.directive('wikipedia', function ($compile) {
    return {
        restrict: 'A',
        replace: true,
        link: function (scope, ele, attrs) {
            scope.$watch(attrs.tooltip, function(html) {
                ele.html(html);
                $compile(ele.contents())(scope);
            });
        }
    };
});

module.directive('youtube', function ($compile) {
    return {
        restrict: 'A',
        replace: true,
        link: function (scope, ele, attrs) {
            scope.$watch(attrs.tooltip, function(html) {
                ele.html(html);
                $compile(ele.contents())(scope);
            });
        }
    };
});