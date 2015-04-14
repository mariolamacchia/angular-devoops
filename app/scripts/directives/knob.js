'use strict';

angular.module('angularDevoopsApp')
    .directive('knob', function() {
        return {
            restrict: 'E',
            template: '<input ng-model=ngModel>',
            require: '?ngModel',
            scope: {
                'options': '=',
                'ngModel': '='
            },
            link: function(scope, element, attrs, ngModel) {
                var knob = angular.element(element.children('input'));

                var getOptions = function() {
                    var options = angular.extend({}, scope.options);

                    options.change = function(v) {
                        var hasChangeFn = scope.options !== undefined &&
                            typeof scope.options.change === 'function';
                        if (hasChangeFn) scope.options.change(v);

                        scope.$apply(function() {
                            ngModel.$setViewValue(v);
                        });
                    };

                    options.draw = function() {
                        var hasDrawFn = scope.options !== undefined &&
                            typeof scope.options.draw === 'function';
                        if (hasDrawFn) scope.options.draw();

                        if (options.skin === 'tron') {
                            this.cursorExt = 0.3;
                            var a = this.arc(this.cv),
                                pa,
                                r = 1;
                            this.g.lineWidth = this.lineWidth;
                            if (this.o.displayPrevious) {
                                pa = this.arc(this.v);
                                this.g.beginPath();
                                this.g.strokeStyle = this.pColor;
                                this.g.arc(this.xy,
                                    this.xy,
                                    this.radius - this.lineWidth,
                                    pa.s,
                                    pa.e,
                                    pa.d
                                );
                                this.g.stroke();
                            }
                            this.g.beginPath();
                            if (r) this.g.strokeStyle = this.o.fgColor;
                            else this.g.strokeStyle = this.fgColor;
                            this.g.arc(
                                this.xy,
                                this.xy,
                                this.radius - this.lineWidth,
                                a.s,
                                a.e,
                                a.d
                            );
                            this.g.stroke();
                            this.g.lineWidth = 2;
                            this.g.beginPath();
                            this.g.strokeStyle = this.o.fgColor;
                            this.g.arc(
                                this.xy,
                                this.xy,
                                this.radius -
                                    this.lineWidth + 1 +
                                    this.lineWidth * 2/3,
                                0,
                                2 * Math.PI,
                                false
                            );
                            this.g.stroke();
                            return false;
                        }
                    };
                    return options;
                };

                scope.$watch('ngModel', function(n, o) {
                    if (n !== o) knob.trigger('change');
                });

                scope.$watch('options', function(n, o) {
                    if (n !== o) knob.trigger('configure', getOptions());
                }, true);

                knob.knob(getOptions());
            }
        }
    });
