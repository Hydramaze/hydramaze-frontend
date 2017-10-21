'use strict';

/**
 * @ngdoc function
 * @name hydramaze.directive
 * @description
 * # accuracyDirective
 */

angular.module('hydramaze')
  .directive('accuracyDirective', function() {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: '/app/components/accuracy/accuracy.html',
      controller: 'AccuracyCtrl'
    }
  });
