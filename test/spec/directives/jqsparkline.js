'use strict';

var jqSparklineCalls = 0;
Object.prototype.sparkline = function(data, opts) {
    this.text(
        'sparkline' +
        (++jqSparklineCalls) +
        angular.toJson(data) +
        angular.toJson(opts)
    );
};

describe('Directive: jqSparkline', function () {

    // load the directive's module
    beforeEach(module('angularDevoopsApp'));

    var element, scope;

    beforeEach(inject(function ($rootScope) {
        scope = $rootScope.$new();
        jqSparklineCalls = 0;
    }));

    it('should call element sparkline function once',
        inject(function ($compile) {
            scope.opts = {a:1, type: 'a'};
            scope.data1 = [1,2,3];
            var html = '<div jq-sparkline=opts data=data1 type=t></div>';
            element = angular.element(html);
            element = $compile(element)(scope);
            expect(element.text())
                .toBe('sparkline1[1,2,3]{"a":1,"type":"t"}');
    }));

    it('should not replace type', inject(function ($compile) {
        scope.opts = {a:2, type: 't'};
        scope.data1 = [2,3];
        var html = '<div jq-sparkline=opts data=data1></div>';
        element = angular.element(html);
        element = $compile(element)(scope);
        expect(element.text()).toBe('sparkline1[2,3]{"a":2,"type":"t"}');
    }));

    it('should watch data and options', inject(function ($compile) {
        scope.data = [1,2,3];
        scope.opts = {a:1};
        element = angular.element('<div jq-sparkline=opts data=data></div>');
        element = $compile(element)(scope);
        scope.$apply();
        expect(element.text()).toBe('sparkline1[1,2,3]{"a":1}');
        scope.data.push(4);
        scope.$apply();
        expect(element.text()).toBe('sparkline2[1,2,3,4]{"a":1}');
        scope.opts.a = 2;
        scope.$apply();
        expect(element.text()).toBe('sparkline3[1,2,3,4]{"a":2}');
    }));
});
