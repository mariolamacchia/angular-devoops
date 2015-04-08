'use strict';

/**
 * @ngdoc function
 * @name angularDevoopsApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angularDevoopsApp
 */
angular.module('angularDevoopsApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
