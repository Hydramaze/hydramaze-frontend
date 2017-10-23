'use strict';

/**
 * @ngdoc function
 * @name hydramaze.directive
 * @description
 * # navigationBlockDirective
 */

angular.module('hydramaze')
  .directive('navigationBlockDirective', function() {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: '/app/shared/navigation/navigation-block.html'
    }
  });
