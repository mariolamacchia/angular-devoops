// jshint unused:false
'use strict';

var xchartCalls = 0, element;
function xChart(type, data, el, options) {
    var e = angular.element(element).children(el);
    e.text(
        element.text() +
        type +
        (++xchartCalls) +
        angular.toJson(data) +
        angular.toJson(options)
    );
    return {
        setType: function(type) {
            e.text(
                type +
                xchartCalls +
                angular.toJson(data) +
                angular.toJson(options)
            );
        },
        setData: function(data) {
            e.text(
                type +
                xchartCalls +
                angular.toJson(data) +
                angular.toJson(options)
            );
        }
    };
}

describe('Directive: xchart', function () {

    // load the directive's module
    beforeEach(module('angularDevoopsApp'));

    var scope;

    beforeEach(inject(function ($rootScope) {
        scope = $rootScope.$new();
        xchartCalls = 0;
    }));

    it('should call xchart function', inject(function ($compile) {
        scope.data = [1,2,3];
        scope.opts = {a: 1};
        var html = '<div xchart=opts data=data type=bar></div>';
        element = angular.element(html);
        element = $compile(element)(scope);
        expect(element.text()).toBe('bar1[1,2,3]{"a":1}');
    }));

    it('should watch opts, type and data', inject(function ($compile) {
        scope.data = [2,3];
        scope.opts = {a: 2};
        scope.type = 'donut';
        var donut = '<div xchart=opts data=data type={{type}}></div>';
        element = angular.element(donut);
        element = $compile(element)(scope);
        scope.$apply();
        expect(element.text()).toBe('donut1[2,3]{"a":2}');
        scope.data.push(4);
        scope.$apply();
        expect(element.text()).toBe('donut1[2,3,4]{"a":2}');
        scope.opts.a = 3;
        scope.$apply();
        expect(element.text()).toBe('donut2[2,3,4]{"a":3}');
        scope.type = 'line';
        scope.$apply();
        expect(element.text()).toBe('line2[2,3,4]{"a":3}');
    }));
});
