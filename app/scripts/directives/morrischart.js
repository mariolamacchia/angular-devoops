'use strict';

/**
 * @ngdoc directive
 * @name angularDevoopsApp.directive:morrisChart
 * @description
 * # morrisChart
 */
angular.module('angularDevoopsApp')
    .directive('morrisChart', function () {
        return {
            restrict: 'A',
            scope: {
                data: '=',
                morrisChart: '='
            },
            link: function(scope, element, attrs) {
                var chart;
                var render = function() {
                    var type = attrs.type.charAt(0).toUpperCase() +
                        attrs.type.substr(1).toLowerCase();
                    if (['Line', 'Area', 'Bar', 'Donut'].indexOf(type) === -1) {
                        type = 'Line';
                    }

                    var options = angular.extend({}, scope.morrisChart);
                    options.data = scope.data || options.data;
                    options.element = element;

                    // Remove old charts
                    element.html('');
                    chart = Morris[type](options);
                };

                scope.$watch('data', function(n, o) {
                    if (n !== o) chart.setData(n);
                }, true);
                scope.$watch('morrisChart', function(n, o) {
                    if (n !== o) render();
                }, true);
                render();
            }
        };
    });
