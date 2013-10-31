'use strict';

angular.module('testApp', [])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/destination', {
        templateUrl: 'views/list.dest.html',
        controller: 'ListDestCtrl'
      })
      .when('/booking', {
        templateUrl: 'views/list.book.html',
        controller: 'ListBookCtrl'
      })
      .when('/destination/:name', {
        templateUrl: 'views/location.html',
        controller: 'DestCtrl'
      })
      .when('/booking/detail', {
        templateUrl: 'views/booking.html',
        controller: 'BookingCtrl'
      })
      .otherwise({
        redirectTo: '/',
      });
  });
