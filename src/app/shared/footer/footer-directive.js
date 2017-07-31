'use strict';

/**
 * @ngdoc function
 * @name hydramaze.directive
 * @description
 * # navigationDirectives
 */

angular.module('hydramaze')
  .directive('footerBlockDirective', function() {
    return {
      restrict: 'E', // C: class, E: element, M: comments, A: attributes
      replace: true,
      templateUrl: '/app/shared/footer/footer-block.html'
    }
  });
