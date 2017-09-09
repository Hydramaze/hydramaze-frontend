'use strict';

/**
 * @ngdoc overview
 * @name hydramaze.controller:TutorialCtrl
 * @description Tutorial Controller.
 */

angular.module('hydramaze')
  .controller('TutorialCtrl', function($scope, $controller) {

    $scope.steps = [
      {
        templateUrl: '/app/views/laboratory-content/tutorial/step-one/step-one.html',
        title: 'Algorithm choose',
        controller: 'StepOneCtrl'
      },
      {
        templateUrl: '/app/views/laboratory-content/tutorial/step-two/step-two.html',
        title: 'Setup the algorithm parameters',
        controller: 'StepTwoCtrl'
      },
      {
        templateUrl: '/app/views/laboratory-content/tutorial/step-three/step-three.html',
        title: 'Dataset choose',
        controller: 'StepThreeCtrl'
      },
      {
        templateUrl: '/app/views/laboratory-content/tutorial/step-four/step-four.html',
        title: 'Results',
        controller: 'StepFourCtrl'
      }
    ];

    $scope.nextStepCall = function(elementScope) {
      // get step scope and call a common function to save step data
      var stepChildScope = angular.element($(".step-main-content-view")).scope();
      stepChildScope.saveDataServiceTutorialStep();

      // call next step
      elementScope.$nextStep();
    };

    console.log("Tutorial Controller as been loaded!");

  });
  