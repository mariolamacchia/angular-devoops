'use strict';

angular.module('angularDevoopsApp')
    .directive('xchart', function () {
        var graphIdCount = 0;
        return {
            restrict: 'A',
            scope: {
                xchart: '=',
                data: '=',
                type: '@'
            },
            template: '<figure style="height:100%; width:100%;"></figure>',
            link: function (scope, element, attrs) {
                var id = 'xchart-graph-' + graphIdCount++;
                element.children('figure').attr('id', id);

                var chart;
                var render = function() {
                    element.children('figure').html('');
                    chart = new xChart(
                        attrs.type,
                        scope.data,
                        '#' + id,
                        scope.xchart
                    );
                };
                render();

                scope.$watch('data', function(n, o) {
                    if (n !== o) chart.setData(n);
                }, true);
                scope.$watch('type', function(n, o) {
                    if (n !== o) chart.setType(n);
                });
                scope.$watch('xchart', function(n, o) {
                    if (n !== o) render();
                }, true);
            }
        };
    });
