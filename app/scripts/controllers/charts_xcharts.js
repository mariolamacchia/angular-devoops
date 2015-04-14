'use strict';

angular.module('angularDevoopsApp')
    .controller('chartsXchartsCtrl', function($scope) {
        $scope.data1 = {
            'xScale': 'time',
            'yScale': 'linear',
            'main': [
                {
                'className': '.xchart-class-1',
                'data': [
                    {
                      'x': '2012-11-05',
                      'y': 6
                    },
                    {
                      'x': '2012-11-06',
                      'y': 6
                    },
                    {
                      'x': '2012-11-07',
                      'y': 8
                    },
                    {
                      'x': '2012-11-08',
                      'y': 3
                    },
                    {
                      'x': '2012-11-09',
                      'y': 4
                    },
                    {
                      'x': '2012-11-10',
                      'y': 9
                    },
                    {
                      'x': '2012-11-11',
                      'y': 6
                    },
                    {
                      'x': '2012-11-12',
                      'y': 16
                    },
                    {
                      'x': '2012-11-13',
                      'y': 4
                    },
                    {
                      'x': '2012-11-14',
                      'y': 9
                    },
                    {
                      'x': '2012-11-15',
                      'y': 2
                    }
                ]
                }
            ]
        };
        $scope.opts1 = {
            'dataFormatX': function (x) { return d3.time.format('%Y-%m-%d').parse(x); },
            'tickFormatX': function (x) { return d3.time.format('%A')(x); },
            'mouseover': function (d, i) {
                var pos = $(this).offset();
                $(tt).text(d3.time.format('%A')(d.x) + ': ' + d.y)
                    .css({top: topOffset + pos.top, left: pos.left + leftOffset})
                    .show();
            },
            'mouseout': function (x) {
                $(tt).hide();
            }
        };
        $scope.data2 = {
        'xScale': 'ordinal',
        'yScale': 'linear',
        'main': [
            {
            'className': '.xchart-class-2',
            'data': [
                {
                  'x': 'Apple',
                  'y': 575
                },
                {
                  'x': 'Facebook',
                  'y': 163
                },
                {
                  'x': 'Microsoft',
                  'y': 303
                },
                {
                  'x': 'Cisco',
                  'y': 121
                },
                {
                  'x': 'Google',
                  'y': 393
                }
            ]
            }
            ]
        };
        $scope.data3 = {
            'xScale': 'time',
            'yScale': 'linear',
            'type': 'line',
            'main': [
            {
                'className': '.xchart-class-3',
                'data': [
                    {
                      'x': '2012-11-05',
                      'y': 1
                    },
                    {
                      'x': '2012-11-06',
                      'y': 6
                    },
                    {
                      'x': '2012-11-07',
                      'y': 13
                    },
                    {
                      'x': '2012-11-08',
                      'y': -3
                    },
                    {
                      'x': '2012-11-09',
                      'y': -4
                    },
                    {
                      'x': '2012-11-10',
                      'y': 9
                    },
                    {
                      'x': '2012-11-11',
                      'y': 6
                    },
                    {
                      'x': '2012-11-12',
                      'y': 7
                    },
                    {
                      'x': '2012-11-13',
                      'y': -2
                    },
                    {
                      'x': '2012-11-14',
                      'y': -7
                    }
                ]
                }
            ]
        };
        $scope.opts3 = {
            'dataFormatX': function (x) { return d3.time.format('%Y-%m-%d').parse(x); },
            'tickFormatX': function (x) { return d3.time.format('%A')(x); }
        };
    });
