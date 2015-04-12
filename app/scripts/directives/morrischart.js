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
                var createChart = function() {
                    element.html('');
                    if (scope.data) {
                        var options = angular.extend({}, scope.morrisChart);
                        options.element = element;
                        options.data = scope.data;
                        if (attrs.type === 'donut') {
                            Morris.Donut(options);
                        } else if (attrs.type === 'area') {
                            Morris.Area(options);
                        } else if (attrs.type === 'bar') {
                            Morris.Bar(options);
                        } else {
                            Morris.Line(options);
                        }
                    }
                };
                scope.$watch('data', createChart, true);
                scope.$watch('morrisChart', createChart, true);
                createChart();
            }
        };
    });
