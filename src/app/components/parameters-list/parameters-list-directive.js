'use strict';

/**
 * @ngdoc function
 * @name hydramaze.directive
 * @description
 * # parametersListDirective
 */

angular.module('hydramaze')
  .directive('parametersListDirective', function() {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: '/app/components/parameters-list/parameters-list.html',
      controller: 'ParametersListCtrl'
    }
  });
