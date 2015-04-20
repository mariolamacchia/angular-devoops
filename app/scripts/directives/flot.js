'use strict';

angular.module('angularDevoopsApp')
    .directive('flot', function () {
        return {
            restrict: 'A',
            scope: {
                flot: '=',
                data: '=',
            },
            link: function (scope, element, attrs) {
                var plot;
                var render = function() {
                    element.html('');
                    plot = element.plot(scope.data, scope.flot).data('plot');
                };
                scope.$watch('data', function(n, o) {
                    if (n !== o && plot !== undefined) {
                        plot.setData(n);
                        plot.draw();
                    }
                }, true);
                scope.$watch('flot', function(n, o) {
                    if (n !== o) render();
                }, true);
                render();
            }
        };
    });
