// jshint unused:false
'use strict';

var plotCalls = 0;
Object.prototype.plot = function(data, options) {
    if (options.error) return {
        data: function() {return undefined; }
    };

    var element = this;
    element.text(
        element.text() +
        (++plotCalls) +
        angular.toJson(data) +
        angular.toJson(options)
    );
    return {
        data: function(d) {
            if (d === 'plot') return {
                setData: function(d) {
                    element.text(
                        plotCalls
                    );
                },
                draw: function() {
                    element.text(
                        element.text() +
                        angular.toJson(data) +
                        angular.toJson(options)
                    );
                }
            };
        }
    };
};

describe('Directive: flot', function () {

    // load the directive's module
    beforeEach(module('angularDevoopsApp'));

    var scope, element;

    beforeEach(inject(function ($rootScope) {
        scope = $rootScope.$new();
        plotCalls = 0;
    }));

    it('should call plot function', inject(function ($compile) {
        scope.data = [1,2,3];
        scope.opts = {a: 1};
        var html = '<div flot=opts data=data></div>';
        element = angular.element(html);
        element = $compile(element)(scope);
        expect(element.text()).toBe('1[1,2,3]{"a":1}');
    }));

    it('should watch opts and data', inject(function ($compile) {
        scope.data = [2,3];
        scope.opts = {a: 2};
        var donut = '<div flot=opts data=data></div>';
        element = angular.element(donut);
        element = $compile(element)(scope);
        scope.$apply();
        expect(element.text()).toBe('1[2,3]{"a":2}');
        scope.data.push(4);
        scope.$apply();
        expect(element.text()).toBe('1[2,3,4]{"a":2}');
        scope.opts.a = 3;
        scope.$apply();
        expect(element.text()).toBe('2[2,3,4]{"a":3}');
    }));

    it('should not watch data if an error occurred',
        inject(function ($compile) {
            scope.data = [2,3];
            scope.opts = {error: true};
            var donut = '<div flot=opts data=data></div>';
            element = angular.element(donut);
            element = $compile(element)(scope);
            scope.$apply();
            scope.data.push(4);
            scope.$apply();
        })
    );
});
