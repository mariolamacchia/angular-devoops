'use strict';

angular.module('angularDevoopsApp')
    .controller('chartsCtrl', function($scope, $interval) {
        // xCharts
        $scope.xData1 = {
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
        $scope.xOpts1 = {
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
        $scope.xData2 = {
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
        $scope.xData3 = {
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
        $scope.xOpts3 = {
            'dataFormatX': function (x) { return d3.time.format('%Y-%m-%d').parse(x); },
            'tickFormatX': function (x) { return d3.time.format('%A')(x); }
        };

        // Flot charts
        var data = [],
            totalPoints = 300;
        function getRandomData() {
            if (data.length > 0)
                data = data.slice(1);
            // Do a random walk
            while (data.length < totalPoints) {
                var prev = data.length > 0 ? data[data.length - 1] : 50,
                    y = prev + Math.random() * 10 - 5;
                if (y < 0) {
                    y = 0;
                } else if (y > 100) {
                    y = 100;
                }
                data.push(y);
            }
            // Zip the generated y values with the x values
            var res = [];
            for (var i = 0; i < data.length; ++i) {
                res.push([i, data[i]])
            }
            return res;
        }

        $scope.flotData1 = [getRandomData()];
        $interval(function() {
            $scope.flotData1 = [getRandomData()];
        }, 30);
        $scope.flot1 = {
            series: {shadowSize: 0},
            yaxis: {min:0, max: 100},
            xaxis: {show: false}
        };

        var sin = [],
            cos = [],
            tan = [];
        for (var i = 0; i< 14; i+= 0.1) {
            sin.push([i, Math.sin(i)]);
            cos.push([i, Math.cos(i)]);
            tan.push([i, Math.tan(i)/4]);
        }
        $scope.flotData2 = [{
            data: sin,
            label: "sin(x) = -0.00"
        }, {
            data: cos,
            label: "cos(x) = -0.00"
        }, {
            data: tan,
            label: "tan(x)/4 = -0.00"
        }];
        $scope.flot2 = {
            series: {lines: {show: true}},
            crosshair: {mode: 'x'},
            grid: {hoverable: true, autoHighlight: false},
            yaxis: {min: -5.2, max: 5.2}
        };


        var d1 = [];
        for (var i = 0; i <= 60; i += 1) {
            d1.push([i, parseInt(Math.random() * 30 - 10)]);
        }
        var plotWithOptions = function(t) {
            return [{
                data: d1,
                color: "rgb(30, 180, 20)",
                threshold: {
                    below: t,
                    color: "rgb(200, 20, 30)"
                },
                lines: {
                    steps: true
                }
            }];
        };
        $scope.flotData3 = plotWithOptions(0);

        var d1 = [];
        for (var i = 0; i < 14; i += 0.5) {
            d1.push([i, Math.sin(i)]);
        }
        var d2 = [[0, 3], [4, 8], [8, 5], [9, 13]];
        var d3 = [];
        for (var i = 0; i < 14; i += 0.5) {
            d3.push([i, Math.cos(i)]);
        }
        var d4 = [];
        for (var i = 0; i < 14; i += 0.1) {
            d4.push([i, Math.sqrt(i * 10)]);
        }
        var d5 = [];
        for (var i = 0; i < 14; i += 0.5) {
            d5.push([i, Math.sqrt(i)]);
        }
        var d6 = [];
        for (var i = 0; i < 14; i += 0.5 + Math.random()) {
            d6.push([i, Math.sqrt(2*i + Math.sin(i) + 5)]);
        }
        $scope.flotData4 = [{
            data: d1,
            lines: { show: true, fill: true }
        }, {
            data: d2,
            bars: { show: true }
        }, {
            data: d3,
            points: { show: true }
        }, {
            data: d4,
            lines: { show: true }
        }, {
            data: d5,
            lines: { show: true },
            points: { show: true }
        }, {
            data: d6,
            lines: { show: true, steps: true }
        }];
    });
