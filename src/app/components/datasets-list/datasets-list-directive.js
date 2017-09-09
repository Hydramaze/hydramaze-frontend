'use strict';

/**
 * @ngdoc function
 * @name hydramaze.directive
 * @description
 * # datasetsListDirective
 */

angular.module('hydramaze')
  .directive('datasetsListDirective', function() {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: '/app/components/datasets-list/datasets-list.html',
      controller: 'DatasetsListCtrl'
    }
  });
