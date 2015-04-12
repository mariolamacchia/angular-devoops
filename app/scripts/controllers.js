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
    });
