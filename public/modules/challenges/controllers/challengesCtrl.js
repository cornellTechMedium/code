var module = angular.module('challengesCtrl', ['challengesService', 'companiesService']);

module.controller('challengesCtrl', function(Tabs, Cards, $compile, $http, $sce, $scope, $stateParams, $rootScope, $timeout, $mdSidenav, dragularService) {
    dragularService('.containerVertical');
    self = this;

    // Side bar controller
    $scope.toggleLeft = buildToggler('left');
    $scope.toggleRight = buildToggler('right');
    $scope.openLeft = buildTogglerOpen('left');

    function buildToggler(componentId) {
        return function() {
            $mdSidenav(componentId).toggle();
        }
    }

    function buildTogglerOpen(componentId) {
        return function() {
            $mdSidenav(componentId).open();
        }
    }
    // Side bar controller

    $scope.result = '<p>' + $rootScope.request.text + '</p>';

    $scope.openTooltip = function(event) {


        $scope.tooltip = '<div class="wrapper" ng-controller="challengesCtrl"><div class="containerVertical">';

        var entity = $scope.data.hashmap[event.target.innerText];

        entity.googleImages.forEach(function(image) {
            $scope.tooltip += '<div><img class="image-responsive containerVertical" src="' + image.url + '"/>' +
                '</md-grid-tile></div>';
        });
        $scope.tooltip += '</div>';

        $scope.wikipedia = '<md-content layout-margin class="containerVertical"><p>';

        $scope.wikipedia += entity.wikipedia.itemListElement[0].result.detailedDescription.articleBody;

        $scope.wikipedia += '</p></md-content>';

        $scope.youtube = '';

        entity.youtube.items.forEach(function(item) {
            $scope.youtube += '<iframe width="304" src="https://www.youtube.com/embed/' +
                item.id.videoId + '"</iframe>';
        });

    };
    $http.post('http://localhost:5000/detect', $rootScope.request)
        .success(function(data) {
            $scope.data = data;

            data.entities.forEach(function(entity) {
                var index = $scope.result.indexOf(entity.name);

                if (index != -1) {
                    var output = $scope.result.substr(0, index) + '<span class="highlight md-accent" ng-click="openLeft(); openTooltip($event)">' +
                        $scope.result.substr(index, entity.name.length) + '</span>' + $scope.result.substr(index + entity.name.length);

                    $scope.result = output;
                }
            });
        })
        .error(function(data) {
            console.log('Error: ' + data);
        });

});

module.directive('dynamic', function($compile) {
    return {
        restrict: 'A',
        replace: true,
        link: function(scope, ele, attrs) {
            scope.$watch(attrs.dynamic, function(html) {
                ele.html(html);
                $compile(ele.contents())(scope);
            });
        }
    };
});

module.directive('tooltip', function($compile) {
    return {
        restrict: 'A',
        replace: true,
        link: function(scope, ele, attrs) {
            scope.$watch(attrs.tooltip, function(html) {
                ele.html(html);
                $compile(ele.contents())(scope);
            });
        }
    };
});

module.directive('wikipedia', function($compile) {
    return {
        restrict: 'A',
        replace: true,
        link: function(scope, ele, attrs) {
            scope.$watch(attrs.tooltip, function(html) {
                ele.html(html);
                $compile(ele.contents())(scope);
            });
        }
    };
});

module.directive('youtube', function($compile) {
    return {
        restrict: 'A',
        replace: true,
        link: function(scope, ele, attrs) {
            scope.$watch(attrs.tooltip, function(html) {
                ele.html(html);
                $compile(ele.contents())(scope);
            });
        }
    };
});
