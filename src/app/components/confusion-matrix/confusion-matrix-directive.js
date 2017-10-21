'use strict';

/**
 * @ngdoc function
 * @name hydramaze.directive
 * @description
 * # confusionMatrixDirective
 */

angular.module('hydramaze')
  .directive('confusionMatrixDirective', function() {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: '/app/components/confusion-matrix/confusion-matrix.html',
      controller: 'ConfusionMatrixCtrl'
    }
  });
