'use strict';

/**
 * @ngdoc function
 * @name hydramaze.directive
 * @description
 * # radarDirective
 */

angular.module('hydramaze')
  .directive('radarChartDirective', function() {
    return {
      restrict: 'E', // C: class, E: element, M: comments, A: attributes
      replace: true,
      templateUrl: '/app/components/radar-chart/radar-chart.html',
      controller: 'radarChartCtrl'
    }
  });
