var materialApp = angular
.module('materialApp', [
    'materialApp.routes',
    'ui.router',
    'ngMaterial',
    'appCtrl',
    'cardsCtrl',
    'cardsService',
    'listCtrl',
    'listService',
    'tabsCtrl',
    'tabsService',
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