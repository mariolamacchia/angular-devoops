'use strict';

/**
 * @ngdoc directive
 * @name angularDevoopsApp.directive:jqSparkline
 * @description
 * # jqSparkline
 */
angular.module('angularDevoopsApp')
    .directive('jqSparkline', function () {
        return {
            restrict: 'A',
            scope: {
                jqSparkline: '=',
                data: '='
            },
            link: function(scope, element, attrs) {
                var render = function() {
                    var opts = angular.extend({}, scope.jqSparkline);
                    opts.type = attrs.type || opts.type;
                    element.sparkline(scope.data, opts);
                };

                render();

                var update = function(o, n) {
                    if (o !== n) render();
                };
                scope.$watch('jqSparkline', update, true);
                scope.$watch('data', update, true);
            }
        };
    });

