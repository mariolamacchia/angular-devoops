'use strict';

/**
 * @ngdoc function
 * @name angularDevoopsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularDevoopsApp
 */
angular.module('angularDevoopsApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
