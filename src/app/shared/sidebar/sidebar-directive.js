'use strict';

/**
 * @ngdoc function
 * @name hydramaze.directive
 * @description
 * # sidebarDirectives
 */

angular.module('hydramaze')
  .directive('sidebarBlockDirective', function() {
    return {
      restrict: 'E', // C: class, E: element, M: comments, A: attributes
      replace: true,
      templateUrl: '/app/shared/sidebar/sidebar-block.html'
    }
  });
