'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', ['myApp.filters', 'myApp.services', 'myApp.directives']).
  config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider.when('/view1', {templateUrl: 'partials/partial1', controller: MyCtrl1});
    $routeProvider.when('/tweets', {templateUrl: 'partials/tweets', controller: TweetsCtrl});
    $routeProvider.when('/names', {templateUrl: 'partials/names', controller: NamesCtrl});
    $routeProvider.when('/reports', {templateUrl: 'partials/reports', controller: ReportsCtrl});
    //$routeProvider.when('/reports', {templateUrl: 'partials/reports', controller: ReportsCtrl});
    $routeProvider.otherwise({redirectTo: '/view1'});
    $locationProvider.html5Mode(true);
  }]);