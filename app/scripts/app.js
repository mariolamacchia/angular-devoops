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
        'ui.bootstrap',
        'ui.select',
        'googlechart'
    ])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/dashboard.html'
            })
            .when('/:name', {
                templateUrl: function(attr) {
                    return 'views/' + attr.name + '.html';
                }
            });
    });
