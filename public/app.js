var materialApp = angular
.module('materialApp', [
    'materialApp.routes',
    'ui.router',
    'ngMaterial',
    'appCtrl',
    'companiesCtrl',
    'companiesService',
    'timeLineCtrl',
    'timeLineService',
    'challengesCtrl',
    'challengesService',
    'angularVideoBg',
    'dragularModule',
    'ngRoute'
]).config(function($mdThemingProvider) {
  $mdThemingProvider.theme('default')
    .primaryPalette('blue')
    .accentPalette('pink');
});
