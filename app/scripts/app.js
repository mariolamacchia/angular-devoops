'use strict';

/**
 * @ngdoc overview
 * @name angularDevoopsApp
 * @description
 * # angularDevoopsApp
 *
 * Main module of the application.
 */
angular
    .module('angularDevoopsApp', [
            'ngAnimate',
            'ngCookies',
            'ngResource',
            'ngRoute',
            'ngSanitize',
            'ngTouch',
            'ui.bootstrap'
            ])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/dashboard.html'
            })
            .when('/dashboard', {
                templateUrl: 'views/dashboard.html'
            })
            .when('/charts_xcharts', {
                templateUrl: 'views/charts_xcharts.html'
            })
            .when('/charts_float', {
                templateUrl: 'views/charts_float.html'
            })
            .when('/charts_float', {
                templateUrl: 'views/charts_float.html'
            })
            .when('/charts_google', {
                templateUrl: 'views/charts_google.html'
            })
            .when('/charts_coindesk', {
                templateUrl: 'views/charts_coindesk.html'
            })
            .otherwise({
                redirectTo: '/'
            });
    });
