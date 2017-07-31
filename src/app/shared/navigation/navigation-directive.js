'use strict';

/**
 * @ngdoc function
 * @name hydramaze.directive
 * @description
 * # navigationDirectives
 */

angular.module('hydramaze')
  .directive('navigationBlockDirective', function() {
    return {
      restrict: 'E', // C: class, E: element, M: comments, A: attributes
      replace: true,
      templateUrl: '/app/shared/navigation/navigation-block.html'
    }
  });
