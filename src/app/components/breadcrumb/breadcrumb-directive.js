'use strict';

/**
 * @ngdoc function
 * @name hydramaze.directive
 * @description
 * # breadcrumbDirective
 */

angular.module('hydramaze')
  .directive('breadcrumbDirective', function() {
    return {
      restrict: 'E', // C: class, E: element, M: comments, A: attributes
      replace: true,
      templateUrl: '/app/components/breadcrumb/breadcrumb.html',
      controller: 'breadcrumbCtrl'
    }
  });
