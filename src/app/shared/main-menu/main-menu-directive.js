'use strict';

/**
 * @ngdoc function
 * @name hydramaze.directive
 * @description
 * # mainMenuDirectives
 */

angular.module('hydramaze')
  .directive('mainMenuBlockDirective', function() {
    return {
      restrict: 'E', // C: class, E: element, M: comments, A: attributes
      replace: true,
      templateUrl: '/app/shared/main-menu/main-menu-block.html'
    }
  });
