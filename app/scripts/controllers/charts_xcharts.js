'use strict';

angular.module('angularDevoopsApp')
    .controller('chartsCtrl', function($scope, $interval, $http) {
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


        // Google charts
        var chart1_data = [
            ['Smartphones', 'PC', 'Notebooks', 'Monitors','Routers', 'Switches' ],
            ['01.01.2014',  1234, 2342, 344, 232,131],
            ['02.01.2014',  1254, 232, 314, 232, 331],
            ['03.01.2014',  2234, 342, 298, 232, 665],
            ['04.01.2014',  2234, 42, 559, 232, 321],
            ['05.01.2014',  1999, 82, 116, 232, 334],
            ['06.01.2014',  1634, 834, 884, 232, 191],
            ['07.01.2014',  321, 342, 383, 232, 556],
            ['08.01.2014',  845, 112, 499, 232, 731]
        ];
        var chart1_options = {
            title: 'Sales of company',
            hAxis: {title: 'Date', titleTextStyle: {color: 'red'}},
            backgroundColor: '#fcfcfc',
            vAxis: {title: 'Quantity', titleTextStyle: {color: 'blue'}}
        };
        $scope.googleChart1 = {
            data: chart1_data,
            type: 'ColumnChart',
            options: chart1_options
        };
        var chart2_data = [
            ['Height', 'Width'],
            ['Samsung',  74.5],
            ['Apple',  31.24],
            ['LG',  12.10],
            ['Huawei',  11.14],
            ['Sony',  8.3],
            ['Nokia',  7.4],
            ['Blackberry',  6.8],
            ['HTC',  6.63],
            ['Motorola',  3.5],
            ['Other',  43.15]
        ];
        var chart2_options = {
            title: 'Smartphone marketshare 2Q 2013',
            backgroundColor: '#fcfcfc'
        };
        $scope.googleChart2 = {
            data: chart2_data,
            type: 'PieChart',
            options: chart2_options
        };
        var chart3_data = [
            ['Age', 'Weight'],
            [ 8, 12],
            [ 4, 5.5],
            [ 11, 14],
            [ 4, 5],
            [ 3, 3.5],
            [ 6.5, 7]
        ];
        var chart3_options = {
            title: 'Age vs. Weight comparison',
            hAxis: {title: 'Age', minValue: 0, maxValue: 15},
            vAxis: {title: 'Weight', minValue: 0, maxValue: 15},
            legend: 'none',
            backgroundColor: '#fcfcfc'
        };
        $scope.googleChart3 = {
            data: chart3_data,
            options: chart3_options,
            type: 'ScatterChart'
        };
        var chart4_data = [
            ['ID', 'Life Expectancy', 'Fertility Rate', 'Region',     'Population'],
            ['CAN',    80.66,              1.67,      'North America',  33739900],
            ['DEU',    79.84,              1.36,      'Europe',         81902307],
            ['DNK',    78.6,               1.84,      'Europe',         5523095],
            ['EGY',    72.73,              2.78,      'Middle East',    79716203],
            ['GBR',    80.05,              2,         'Europe',         61801570],
            ['IRN',    72.49,              1.7,       'Middle East',    73137148],
            ['IRQ',    68.09,              4.77,      'Middle East',    31090763],
            ['ISR',    81.55,              2.96,      'Middle East',    7485600],
            ['RUS',    68.6,               1.54,      'Europe',         141850000],
            ['USA',    78.09,              2.05,      'North America',  307007000]
        ];
        var chart4_options = {
            title: 'Correlation between life expectancy, fertility rate and population of some world countries (2010)',
            hAxis: {title: 'Life Expectancy'},
            vAxis: {title: 'Fertility Rate'},
            backgroundColor: '#fcfcfc',
            bubble: {textStyle: {fontSize: 11}}
        };
        $scope.googleChart4 = {
            data: chart4_data,
            options: chart4_options,
            type: 'BubbleChart'
        };
        var chart5_data = [
            ['Country', 'Popularity'],
            ['Germany', 200],
            ['United States', 300],
            ['Brazil', 400],
            ['Canada', 500],
            ['France', 600],
            ['RU', 700]
        ];
        var chart5_options = {
            backgroundColor: '#fcfcfc',
            enableRegionInteractivity: true
        };
        $scope.googleChart5 = {
            data: chart5_data,
            options: chart5_options,
            type: 'GeoChart'
        };
        var chart6_data = [
        ['Year', 'Sales', 'Expenses'],
            ['2004',  1000,      400],
            ['2005',  1170,      460],
            ['2006',  660,       1120],
            ['2007',  1030,      540],
            ['2008',  2080,      740],
            ['2009',  1949,      690],
            ['2010',  2334,      820]
        ];
        var chart6_options = {
            backgroundColor: '#fcfcfc',
            title: 'Company Performance'
        };
        $scope.googleChart6 = {
            data: chart6_data,
            options: chart6_options,
            type: 'LineChart'
        };
        var chart7_data = [
        ['Task', 'Hours per Day'],
            ['Work',     11],
            ['Eat',      2],
            ['Commute',  2],
            ['Watch TV', 2],
            ['Sleep',    7]
        ];
        var chart7_options = {
            backgroundColor: '#fcfcfc',
            title: 'My Daily Activities',
            pieHole: 0.4
        };
        $scope.googleChart7 = {
            data: chart7_data,
            options: chart7_options,
            type: 'PieChart'
        };
        var chart8_data = [
            ['Generation', 'Descendants'],
            [0, 1], [1, 33], [2, 269], [3, 2013]
        ];
        var chart8_options = {
            backgroundColor: '#fcfcfc',
            title: 'Descendants by Generation',
            hAxis: {title: 'Generation', minValue: 0, maxValue: 3},
            vAxis: {title: 'Descendants', minValue: 0, maxValue: 2100},
            trendlines: {
                0: {
                    type: 'exponential',
                    visibleInLegend: true
                }
            }
        };
        $scope.googleChart8 = {
            data: chart8_data,
            options: chart8_options,
            type: 'ScatterChart'
        };

        // CoinDesk
        var prettyDates = function(){
            var currDate = new Date();
            var year = currDate.getFullYear();
            var month = currDate.getMonth() + 1;
            var startmonth = 1;
            if (month > 3){
                startmonth = month -2;
            }
            if (startmonth <=9){
                startmonth = '0'+startmonth;
            }
            if (month <= 9) {
                month = '0'+month;
            }
            var day= currDate.getDate();
            if (day <= 9) {
                day = '0'+day;
            }
            var startdate = year +'-'+ startmonth +'-01';
            var enddate = year +'-'+ month +'-'+ day;
            return [startdate, enddate];
        }
        var dates = prettyDates();
        var startdate = dates[0];
        var enddate = dates[1];

        var xchart_data = [];
        $scope.cdXChart = {
            xScale: 'ordinal',
            yScale: 'linear',
            main: [{
                'className': '.pizza',
                'data': xchart_data
            }]
        };
        var exchange_rate = [];
        $scope.cdFlotChartData = [
            { data: exchange_rate, label: "Bitcoin exchange rate ($)" }
        ];
        $scope.exchange_rate = exchange_rate;

        var jsonURL =
            'http://api.coindesk.com/v1/bpi/historical/close.json?start=' +
            startdate+'&end='+enddate;
        $http.get(jsonURL).success(function(result){
            // Create array of data for xChart
            $.each(result.bpi, function(key, val){
                xchart_data.push({'x': key,'y':val});
            });
            var google_data = [['Date', 'Rate']];
            $.each(result.bpi, function(key, val){
                google_data.push([key,val]);
            });
            $scope.cdGoogleChart = {
                options: {
                    backgroundColor: '#fcfcfc',
                    title: 'Coindesk Exchange Rate'
                },
                type: 'LineChart',
                data: google_data
            };
            // Create array of data for Flot and Sparkline
            $.each(result.bpi, function(key, val){
                var parseDate=key;
                parseDate=parseDate.split("-");
                var newDate=parseDate[1]+"/"+parseDate[2]+"/"+parseDate[0];
                var new_date = new Date(newDate).getTime();
                exchange_rate.push([new_date,val]);
            });
            $scope.cdFlotChart = {
                canvas: true,
                xaxes: [
                    { mode: "time" }
                ],
                yaxes: [
                    { min: 0 },
                    {
                        position: "right",
                        alignTicksWithAxis: 1,
                        tickFormatter: function (value, axis) {
                            return value.toFixed(axis.tickDecimals) + "€";
                        }
                    }
                ],
                legend: { position: "sw" }
            };
        });
    });
