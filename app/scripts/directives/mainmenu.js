'use strict';

/**
 * @ngdoc directive
 * @name angularDevoopsApp.directive:mainMenu
 * @description
 */
angular.module('angularDevoopsApp')
    .directive('mainMenu', function () {
        return {
            restrict: 'C',
            link: function postLink(scope, element) {
                element.on('click', 'a', function () {
                    var self = angular.element(this);
                    var parents = self.parents('li');
                    var li = self.closest('li.dropdown');
                    var otherItems =
                        angular.element('.main-menu li').not(parents);
                    otherItems.find('a').removeClass('active');
                    otherItems.find('a').removeClass('active-parent');
                    if (self.hasClass('dropdown-toggle') ||
                        self.closest('li').find('ul').length === 0
                    ) {
                        self.addClass('active-parent');
                        var current = self.next();
                        if (current.is(':visible')) {
                            li.find('ul.dropdown-menu').slideUp('fast');
                            li.find('ul.dropdown-menu a')
                                .removeClass('active');
                        }
                        else {
                            otherItems.find('ul.dropdown-menu')
                                .slideUp('fast');
                            current.slideDown('fast');
                        }
                    }
                    else {
                        if (li.find('a.dropdown-toggle')
                                .hasClass('active-parent')
                        ) {
                            var pre = self.closest('ul.dropdown-menu');
                            pre.find('li.dropdown').not(self.closest('li'))
                                .find('ul.dropdown-menu').slideUp('fast');
                        }
                    }
                    if (self.hasClass('active') === false) {
                        self.parents('ul.dropdown-menu')
                            .find('a').removeClass('active');
                        self.addClass('active');
                    }
                });
            }
        };
    });
