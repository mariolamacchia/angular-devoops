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
                templateUrl: 'views/main.html',
                controller: 'MainCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    });
