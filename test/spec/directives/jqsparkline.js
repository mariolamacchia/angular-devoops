// jshint unused:false
'use strict';

var $ = function(element) {
    return {
        sparkline: function(data, opts) {
            element.text(
                'sparkline' +
                angular.toJson(data) +
                angular.toJson(opts)
            );
        }
    };
};

describe('Directive: jqSparkline', function () {

    // load the directive's module
    beforeEach(module('angularDevoopsApp'));

    var element, scope;

    beforeEach(inject(function ($rootScope) {
        scope = $rootScope.$new();
    }));

    it('should require data attribute', inject(function ($compile) {
        element = angular.element('<div jq-sparkline></div>');
        element = $compile(element)(scope);
        expect(element.text()).toBe('');
    }));

    it('should have object as jqSparkline', inject(function ($compile) {
        scope.d = '1,2,3';
        element = angular.element('<div jq-sparkline="\'a\'" data="d"></div>');
        element = $compile(element)(scope);
        expect(element.text()).toBe('');
        element = angular.element('<div jq-sparkline data="d"></div>');
        element = $compile(element)(scope);
        expect(element.text()).toBe('');
        element = angular.element('<div jq-sparkline=123 data="d"></div>');
        element = $compile(element)(scope);
        expect(element.text()).toBe('');
    }));

    it('should call element sparkline function', inject(function ($compile) {
        scope.opts = {a:1};
        scope.data1 = '1,2,3';
        element = angular.element('<div jq-sparkline=opts data=data1></div>');
        element = $compile(element)(scope);
        expect(element.text()).toBe('sparkline["1","2","3"]{"a":1}');
    }));

    it('should allow array and string as data', inject(function ($compile) {
        scope.opts = {a:1};
        scope.data1 = 123;
        scope.data2 = '1,2,3';
        scope.data3 = [1,2,3];
        element = angular.element('<div jq-sparkline=opts data=data1></div>');
        element = $compile(element)(scope);
        expect(element.text()).toBe('');
        element = angular.element('<div jq-sparkline=opts data=data2></div>');
        element = $compile(element)(scope);
        expect(element.text()).toBe('sparkline["1","2","3"]{"a":1}');
        element = angular.element('<div jq-sparkline=opts data=data3></div>');
        element = $compile(element)(scope);
        expect(element.text()).toBe('sparkline[1,2,3]{"a":1}');
    }));

    it('should watch data', inject(function ($compile) {
        scope.data = [1,2,3];
        scope.opts = {a:1};
        element = angular.element('<div jq-sparkline=opts data=data></div>');
        element = $compile(element)(scope);
        scope.$apply();
        expect(element.text()).toBe('sparkline[1,2,3]{"a":1}');
        scope.data.push(4);
        scope.$apply();
        expect(element.text()).toBe('sparkline[1,2,3,4]{"a":1}');
    }));

    it('should watch options', inject(function ($compile) {
        scope.data = [1,2,3];
        scope.opts = {a:1};
        element = angular.element('<div jq-sparkline=opts data=data></div>');
        element = $compile(element)(scope);
        scope.$apply();
        expect(element.text()).toBe('sparkline[1,2,3]{"a":1}');
        scope.opts.a = 2;
        scope.$apply();
        expect(element.text()).toBe('sparkline[1,2,3]{"a":2}');
    }));
});
