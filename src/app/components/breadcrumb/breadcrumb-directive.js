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
      restrict: 'E',
      replace: true,
      templateUrl: '/app/components/breadcrumb/breadcrumb.html',
      controller: 'BreadcrumbCtrl'
    }
  });
