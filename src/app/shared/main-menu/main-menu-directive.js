'use strict';

/**
 * @ngdoc function
 * @name hydramaze.directive
 * @description
 * # mainMenuBlockDirective
 */

angular.module('hydramaze')
  .directive('mainMenuBlockDirective', function() {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: '/app/shared/main-menu/main-menu-block.html'
    }
  });
