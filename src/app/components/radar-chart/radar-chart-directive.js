'use strict';

/**
 * @ngdoc function
 * @name hydramaze.directive
 * @description
 * # radarChartDirective
 */

angular.module('hydramaze')
  .directive('radarChartDirective', function() {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: '/app/components/radar-chart/radar-chart.html',
      controller: 'RadarChartCtrl'
    }
  });
