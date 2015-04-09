'use strict';

describe('Directive: mainMenu', function () {

    // load the directive's module
    beforeEach(module('angularDevoopsApp'));

    var element, scope;

    beforeEach(inject(function ($rootScope) {
        scope = $rootScope.$new();
    }));

    it('should leave content', inject(function ($compile) {
        element = angular.element('<div class=main-menu><p>text</p></div>');
        element = $compile(element)(scope);
        scope.$apply();
        expect(element.text()).toBe('text');
    }));
});
