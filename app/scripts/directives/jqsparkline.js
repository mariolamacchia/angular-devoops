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
            link: function (scope, elem, attrs) {
                var render = function () {
                    var data;

                    // Trim trailing comma if we are a string
                    if (angular.isString(scope.data)) {
                        data = scope.data;
                        data = data.replace(/(^,)|(,$)/g, '').split(',');
                    } else data = scope.data;

                    if (data instanceof Array &&
                        typeof scope.jqSparkline === 'object'
                    ) {
                        // Make sure we have an array of numbers
                        $(elem).sparkline(data, scope.jqSparkline);
                    }
                };

                scope.$watch('jqSparkline', render, true);
                scope.$watch('data', render, true);
                render();
            }
        };
    });

