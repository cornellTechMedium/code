var router = angular.module('materialApp.routes', ['ui.router']);
router.config(function($stateProvider, $urlRouterProvider, $locationProvider) {

    $urlRouterProvider.otherwise('/');

    // UI Router States
    // Inserting Page title as State Param
    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: 'home.html',
            params: {
                title: "Cornell Tech iTrek 2017"
            }
        })
        .state('card', {
            url: '/companies/{cardId}',
            templateUrl: '/modules/companies/views/company.html',
            controller: 'companiesCtrl',
            controllerAs: 'Cards',
            params: {
                title: "Cards",
                cardId: "{cardId}"
            }
        })
        .state('companies', {
            url: '/companies',
            templateUrl: '/modules/companies/views/companies.html',
            controller: 'companiesCtrl',
            controllerAs: 'Cards',
            params: {
                title: "Cards"
            }
        })
        .state('list', {
            url: '/list',
            templateUrl: '/modules/list/views/list.html',
            controller: 'listCtrl',
            controllerAs: 'List',
            params: {
                title: "List"
            }
        })
        .state('challenges', {
            url: '/challenges',
            templateUrl: '/modules/challenges/views/challenges.html',
            controller: 'challengesCtrl',
            controllerAs: 'Tabs',
            params: {
                title: "Tabs"
            }
        })
        .state('challenge', {
            url: '/challenges/{challengeId}',
            templateUrl: '/modules/challenges/views/challenge.html',
            controller: 'challengesCtrl',
            controllerAs: 'Tabs',
            params: {
                title: "Challenges",
                cardId: "{challengeId}"
            }
        });



    $locationProvider.html5Mode(true);

});