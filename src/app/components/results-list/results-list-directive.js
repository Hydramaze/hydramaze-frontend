'use strict';

/**
 * @ngdoc function
 * @name hydramaze.directive
 * @description
 * # resultsListDirective
 */

angular.module('hydramaze')
  .directive('resultsListDirective', function() {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: '/app/components/results-list/results-list.html',
      controller: 'ResultsListCtrl'
    }
  });
