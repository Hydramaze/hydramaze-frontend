'use strict';

/**
 * @ngdoc overview
 * @name hydramaze.controller:ExercisesCtrl
 * @description Exercises Controller.
 */

angular.module('hydramaze')
  .controller('ExercisesCtrl', function($scope) {

    $scope.exercises = {};

    $scope.steps = [
      {
        templateUrl: '/app/views/laboratory-content/exercises/exercise-base/exercise-base.html',
        title: 'Learning how to use the programming interface',
        exercise: '/app/views/laboratory-content/exercises/exercises-list/exercise-one.html',
        controller: 'ExerciseBaseCtrl'
      },
      {
        templateUrl: '/app/views/laboratory-content/exercises/exercise-base/exercise-base.html',
        title: 'Importing Numpy and Matplot libraries',
        exercise: '/app/views/laboratory-content/exercises/exercises-list/exercise-two.html',
        controller: 'ExerciseBaseCtrl'
      }
    ];

    start();

    console.log("Exercises Controller as been loaded!");

  });


function start() {
  console.log("Hello World!");
}
