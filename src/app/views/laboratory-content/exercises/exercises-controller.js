'use strict';

/**
 * @ngdoc overview
 * @name hydramaze.controller:ExercisesCtrl
 * @description Exercises Controller.
 */

angular.module('hydramaze')
  .controller('ExercisesCtrl', function($scope) {

    $scope.exercises = {};

    var tplUrl = '/app/views/laboratory-content/exercises/exercise-base/exercise-base.html';
    var tplCtrl = 'ExerciseBaseCtrl';

    $scope.steps = [
      {
        templateUrl: tplUrl,
        controller: tplCtrl,
        title: 'Learning how to use the programming interface',
        exercise: '/app/views/laboratory-content/exercises/exercises-list/exercise-intro.html'
      },
      {
        templateUrl: tplUrl,
        controller: tplCtrl,
        title: 'Learning how to use the programming interface',
        exercise: '/app/views/laboratory-content/exercises/exercises-list/exercise-one.html'
      },
      {
        templateUrl: tplUrl,
        controller: tplCtrl,
        title: 'Importing Numpy and Matplot libraries',
        exercise: '/app/views/laboratory-content/exercises/exercises-list/exercise-two.html'
      },
      {
        templateUrl: tplUrl,
        controller: tplCtrl,
        title: 'Importing Numpy and Matplot libraries',
        exercise: '/app/views/laboratory-content/exercises/exercises-list/exercise-three.html'
      },
      {
        templateUrl: tplUrl,
        controller: tplCtrl,
        title: 'Importing Numpy and Matplot libraries',
        exercise: '/app/views/laboratory-content/exercises/exercises-list/exercise-four.html'
      },
      {
        templateUrl: tplUrl,
        controller: tplCtrl,
        title: 'Importing Numpy and Matplot libraries',
        exercise: '/app/views/laboratory-content/exercises/exercises-list/exercise-five.html'
      },
      {
        templateUrl: tplUrl,
        controller: tplCtrl,
        title: 'Importing Numpy and Matplot libraries',
        exercise: '/app/views/laboratory-content/exercises/exercises-list/exercise-six.html'
      },
      {
        templateUrl: tplUrl,
        controller: tplCtrl,
        title: 'Importing Numpy and Matplot libraries',
        exercise: '/app/views/laboratory-content/exercises/exercises-list/exercise-seven.html'
      },
      {
        templateUrl: tplUrl,
        controller: tplCtrl,
        title: 'Importing Numpy and Matplot libraries',
        exercise: '/app/views/laboratory-content/exercises/exercises-list/exercise-eight.html'
      },
      {
        templateUrl: tplUrl,
        controller: tplCtrl,
        title: 'Importing Numpy and Matplot libraries',
        exercise: '/app/views/laboratory-content/exercises/exercises-list/exercise-nine.html'
      },
      {
        templateUrl: tplUrl,
        controller: tplCtrl,
        title: 'Importing Numpy and Matplot libraries',
        exercise: '/app/views/laboratory-content/exercises/exercises-list/exercise-ten.html'
      }
    ];

    start();

    console.log("Exercises Controller as been loaded!");

  });


function start() {
  console.log("Hello World!");
}
