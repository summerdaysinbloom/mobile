'use strict';

angular.module('byApp', [])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/destination/:name', {
        templateUrl: 'views/destination.html',
        controller: 'DestCtrl'
      })
      .otherwise({
        redirectTo: '/',
      });
  });
