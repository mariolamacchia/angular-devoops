// jshint unused:false
'use strict';

var chart = function(options, type) {
    var element = options.element;
    delete options.element;
    element.text(element.text() + type + angular.toJson(options));
};

var Morris = {
    Line: function(o) {chart(o, 1);},
    Area: function(o) {chart(o, 2);},
    Donut: function(o) {chart(o, 3);},
    Bar: function(o) {chart(o, 4);},
};

describe('Directive: morrisChart', function () {

    // load the directive's module
    beforeEach(module('angularDevoopsApp'));

    var element,
    scope;

    beforeEach(inject(function ($rootScope) {
        scope = $rootScope.$new();
    }));

    it('should require data attr', inject(function ($compile) {
        element = angular.element('<div morris-chart></div>');
        element = $compile(element)(scope);
        expect(element.text()).toBe('');
        element = angular.element('<div morris-chart type="bar"></div>');
        element = $compile(element)(scope);
        expect(element.text()).toBe('');
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
        expect(element.text()).toBe('1{"a":1,"data":[1,2,3]}');
        element = angular.element(area);
        element = $compile(element)(scope);
        expect(element.text()).toBe('2{"a":1,"data":[1,2,3]}');
        element = angular.element(donut);
        element = $compile(element)(scope);
        expect(element.text()).toBe('3{"a":1,"data":[1,2,3]}');
        element = angular.element(bar);
        element = $compile(element)(scope);
        expect(element.text()).toBe('4{"a":1,"data":[1,2,3]}');
    }));

    it('should use line as default chart', inject(function ($compile) {
        scope.data = [1,2,3];
        element = angular.element('<div morris-chart data=data type="a"></div>');
        element = $compile(element)(scope);
        expect(element.text()).toBe('1{"data":[1,2,3]}');
    }));

    it('should watch opts and data', inject(function ($compile) {
        scope.data = [1,2,3];
        scope.opts = {a: 1};
        var donut = '<div morris-chart=opts data=data type=donut></div>';
        element = angular.element(donut);
        element = $compile(element)(scope);
        expect(element.text()).toBe('3{"a":1,"data":[1,2,3]}');
        scope.data.push(4);
        scope.$apply();
        expect(element.text()).toBe('3{"a":1,"data":[1,2,3,4]}');
        scope.opts.a = 2;
        scope.$apply();
        expect(element.text()).toBe('3{"a":2,"data":[1,2,3,4]}');
    }));
});
