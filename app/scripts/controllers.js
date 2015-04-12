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

        $interval(populateSparklines, 1000);
    });
