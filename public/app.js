var materialApp = angular
.module('materialApp', [
    'materialApp.routes',
    'ui.router',
    'ngMaterial',
    'appCtrl',
    'companiesCtrl',
    'companiesService',
    'listCtrl',
    'listService',
    'challengesCtrl',
    'challengesService',
    'angularVideoBg'
]).config(function($mdThemingProvider) {
  $mdThemingProvider.theme('default')
    .primaryPalette('blue')
    .accentPalette('pink');
});

angular.module('materialApp').controller('VideoCtrl', function($scope) {
    $scope.video = {
        id: 'tIWgUGtZzwI'
    };
});