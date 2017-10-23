'use strict';

/**
 * @ngdoc function
 * @name hydramaze.directive
 * @description
 * # algorithmsListDirective
 */

angular.module('hydramaze')
  .directive('algorithmsListDirective', function() {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: '/app/components/algorithms-list/algorithms-list.html',
      controller: 'AlgorithmsListCtrl'
    }
  });
