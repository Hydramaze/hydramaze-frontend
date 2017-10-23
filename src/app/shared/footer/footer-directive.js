'use strict';

/**
 * @ngdoc function
 * @name hydramaze.directive
 * @description
 * # footerBlockDirective
 */

angular.module('hydramaze')
  .directive('footerBlockDirective', function() {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: '/app/shared/footer/footer-block.html'
    }
  });
