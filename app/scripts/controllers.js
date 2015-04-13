'use strict';

angular.module('angularDevoopsApp')
    .controller('dashboardCtrl', function($scope, $interval) {
        // Header sparklines
        $scope.dataTop1 = [];
        $scope.dataTop2 = [];
        $scope.dataTop3 = [];

        var populateSparklines = function() {
            for (var i = 1; i <= 3 ; i++) {
                $scope['dataTop' + i].length = 0;
                for (var j = 0; j < 8; j++) {
                    $scope['dataTop' + i]
                        .push(Math.floor(Math.random() * 1000));
                }
            }
        };

        for (var i = 0; i < 3; i++) {
            var colors = ['#6aa6d6', '#7bc5d3', '#d15e5e'];
            $scope['topSparkline' + (i+1)] = {
                type: 'bar',
                barWidth: 7,
                barSpacing: 2,
                height: 40,
                barColor: colors[i]
            };
        }
        $interval(populateSparklines, 1000);

        // Table sparklines
        for (var i = 1; i <= 9; i++) {
            $scope['dataTable' + i] = [];
            for (var j = 0; j < 10; j++) {
                $scope['dataTable' + i].push(Math.floor(Math.random() * 1000));
            }
        }

        $scope.tableSparkline = {
            type: 'line',
            fillColor: false,
            spotColor: false,
            minSpotColor: false,
            maxSpotColor: false,
            width: 90,
            lineColor: '#6aa6d6',
            lineWidth: 2
        };

        // Donuts
        $scope.donut = {
            height: 150,
            formatter: function(y) {
                // First chart
                if (y === 5) return 'at most 5%';
                if (y === 10) return 'approx 10%';
                if (y === 15) return 'approx 15%';
                if (y === 70) return 'at least 70%';
                // Second chart
                if (y === 24) return 'at most 24%';
                if (y === 21) return 'approx 20%';
                if (y === 35) return 'approx 35%';
                if (y === 20) return 'current';
                // Third chart
                if (y === 16) return 'current';
                if (y === 24) return 'this year';
                if (y === 26) return 'period';
                if (y === 11) return 'last month';
                if (y === 23) return 'last week';
                return y;
            }
        };

        $scope.donut1 = [{
            label: 'Pay',
            value: 70
        }, {
            label: 'Client',
            value: 15
        }, {
            label: 'Buy',
            value: 10
        }, {
            label: 'Hosted',
            value: 5
        }];

        $scope.donut2 = [{
            label: 'Cars',
            value: 24
        }, {
            label: 'Shop',
            value: 21
        }, {
            label: 'Store',
            value: 35
        }, {
            label: 'Office',
            value: 20
        }];

        $scope.donut3 = [{
            label: 'Current',
            value: 16
        }, {
            label: 'Year',
            value: 24
        }, {
            label: 'Period',
            value: 26
        }, {
            label: 'Month',
            value: 11
        }, {
            label: 'Week',
            value: 23
        }];

        // Clients
        $scope.clients = [];
        for (var j = 0; j < 8; j++) {
            $scope.clients.push(Math.floor(Math.random() * 1000));
        }

        $scope.clientsBar = {
            type: 'bar',
            barWidth: 5,
            barSpacing: 2,
            height: 30,
            barColor: '#6aa6d6'
        };

        // OS Platforms

        $scope.osChartData = [
			{'period': '2014-01', 'Win8': 13.4, 'Win7': 55.3, 'Vista': 1.5, 'NT': 0.3, 'XP':11, 'Linux': 4.9, 'Mac': 9.6 , 'Mobile':4},
			{'period': '2013-12', 'Win8': 10, 'Win7': 55.9, 'Vista': 1.5, 'NT': 3.1, 'XP':11.6, 'Linux': 4.8, 'Mac': 9.2 , 'Mobile':3.8},
			{'period': '2013-11', 'Win8': 8.6, 'Win7': 56.4, 'Vista': 1.6, 'NT': 3.7, 'XP':11.7, 'Linux': 4.8, 'Mac': 9.6 , 'Mobile':3.7},
			{'period': '2013-10', 'Win8': 9.9, 'Win7': 56.7, 'Vista': 1.6, 'NT': 1.4, 'XP':12.4, 'Linux': 4.9, 'Mac': 9.6 , 'Mobile':3.3},
			{'period': '2013-09', 'Win8': 10.2, 'Win7': 56.8, 'Vista': 1.6, 'NT': 0.4, 'XP':13.5, 'Linux': 4.8, 'Mac': 9.3 , 'Mobile':3.3},
			{'period': '2013-08', 'Win8': 9.6, 'Win7': 55.9, 'Vista': 1.7, 'NT': 0.4, 'XP':14.7, 'Linux': 5, 'Mac': 9.2 , 'Mobile':3.4},
			{'period': '2013-07', 'Win8': 9, 'Win7': 56.2, 'Vista': 1.8, 'NT': 0.4, 'XP':15.8, 'Linux': 4.9, 'Mac': 8.7 , 'Mobile':3.2},
			{'period': '2013-06', 'Win8': 8.6, 'Win7': 56.3, 'Vista': 2, 'NT': 0.4, 'XP':15.4, 'Linux': 4.9, 'Mac': 9.1 , 'Mobile':3.2},
			{'period': '2013-05', 'Win8': 7.9, 'Win7': 56.4, 'Vista': 2.1, 'NT': 0.4, 'XP':15.7, 'Linux': 4.9, 'Mac': 9.7 , 'Mobile':2.6},
			{'period': '2013-04', 'Win8': 7.3, 'Win7': 56.4, 'Vista': 2.2, 'NT': 0.4, 'XP':16.4, 'Linux': 4.8, 'Mac': 9.7 , 'Mobile':2.2},
			{'period': '2013-03', 'Win8': 6.7, 'Win7': 55.9, 'Vista': 2.4, 'NT': 0.4, 'XP':17.6, 'Linux': 4.7, 'Mac': 9.5 , 'Mobile':2.3},
			{'period': '2013-02', 'Win8': 5.7, 'Win7': 55.3, 'Vista': 2.4, 'NT': 0.4, 'XP':19.1, 'Linux': 4.8, 'Mac': 9.6 , 'Mobile':2.2},
			{'period': '2013-01', 'Win8': 4.8, 'Win7': 55.3, 'Vista': 2.6, 'NT': 0.5, 'XP':19.9, 'Linux': 4.8, 'Mac': 9.3 , 'Mobile':2.2}
		];
        $scope.osChart = {
            resize: true,
            xkey: 'period',
            ykeys: ['Win8', 'Win7','Vista','NT','XP', 'Linux', 'Mac', 'Mobile'],
            labels: ['Win8', 'Win7','Vista','NT','XP', 'Linux', 'Mac', 'Mobile']
        };
        /*
         * Force resizing and avoid flashing unresized chart (needed for charts
         * into tabsets
         */
        $scope.showOsChart = function() {
            angular.element(window).resize();
            $scope.osChartShow = true;
        };
    });
