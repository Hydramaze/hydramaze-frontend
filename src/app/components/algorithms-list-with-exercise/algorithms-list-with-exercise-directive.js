'use strict';

/**
 * @ngdoc function
 * @name hydramaze.directive
 * @description
 * # algorithmsListDirective
 */

angular.module('hydramaze')
  .directive('algorithmsListWithExerciseDirective', function() {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: '/app/components/algorithms-list-with-exercise/algorithms-list-with-exercise.html',
      controller: 'AlgorithmsListWithExerciseCtrl'
    }
  });
