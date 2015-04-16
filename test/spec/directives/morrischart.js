// jshint unused:false
'use strict';

var morrisCalls = 0;
var chart = function(options, type) {
    var element = options.element;
    delete options.element;
    element.text(
        element.text() +
        type +
        (++morrisCalls) +
        angular.toJson(options)
    );
    return {
        setData: function(d) {
            options.data = d;

            element.text(
                type.toString() +
                morrisCalls.toString() +
                angular.toJson(options)
            );
        }
    };
};

var Morris = {
    Line: function(o) {return chart(o, 1);},
    Area: function(o) {return chart(o, 2);},
    Donut: function(o) {return chart(o, 3);},
    Bar: function(o) {return chart(o, 4);},
};

describe('Directive: morrisChart', function () {

    // load the directive's module
    beforeEach(module('angularDevoopsApp'));

    var element,
    scope;

    beforeEach(inject(function ($rootScope) {
        scope = $rootScope.$new();
        morrisCalls = 0;
    }));

    it('should call Morris.<type> function', inject(function ($compile) {
        scope.data = [1,2,3];
        scope.opts = {a: 1};
        var donut = '<div morris-chart=opts data=data type=donut></div>';
        var area = '<div morris-chart=opts data=data type=area></div>';
        var line = '<div morris-chart=opts data=data type=line></div>';
        var bar = '<div morris-chart=opts data=data type=bar></div>';
        element = angular.element(line);
        element = $compile(element)(scope);
        expect(element.text()).toBe('11{"a":1,"data":[1,2,3]}');
        element = angular.element(area);
        element = $compile(element)(scope);
        expect(element.text()).toBe('22{"a":1,"data":[1,2,3]}');
        element = angular.element(donut);
        element = $compile(element)(scope);
        expect(element.text()).toBe('33{"a":1,"data":[1,2,3]}');
        element = angular.element(bar);
        element = $compile(element)(scope);
        expect(element.text()).toBe('44{"a":1,"data":[1,2,3]}');
    }));

    it('should use line as default chart', inject(function ($compile) {
        scope.data = [1,2,3];
        element = angular.element('<div morris-chart data=data type="a"></div>');
        element = $compile(element)(scope);
        expect(element.text()).toBe('11{"data":[1,2,3]}');
        element = angular.element('<div morris-chart data=data></div>');
        element = $compile(element)(scope);
        expect(element.text()).toBe('12{"data":[1,2,3]}');
    }));

    it('should override options.data only if data not undefinded',
        inject(function($compile) {
            scope.opts = {data: [1]};
            scope.data = [1,2,3];
            var html = '<div morris-chart=opts data=data type="a"></div>';
            element = angular.element(html);
            element = $compile(element)(scope);
            expect(element.text()).toBe('11{"data":[1,2,3]}');

            html = '<div morris-chart=opts type="a"></div>';
            element = angular.element(html);
            element = $compile(element)(scope);
            expect(element.text()).toBe('12{"data":[1]}');
        })
    );

    it('should watch opts and data', inject(function ($compile) {
        scope.data = [1,2,3];
        scope.opts = {a: 1};
        var donut = '<div morris-chart=opts data=data type=donut></div>';
        element = angular.element(donut);
        element = $compile(element)(scope);
        scope.$apply();
        expect(element.text()).toBe('31{"a":1,"data":[1,2,3]}');
        scope.data.push(4);
        scope.$apply();
        expect(element.text()).toBe('31{"a":1,"data":[1,2,3,4]}');
        scope.opts.a = 2;
        scope.$apply();
        expect(element.text()).toBe('32{"a":2,"data":[1,2,3,4]}');
    }));
});
