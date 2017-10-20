'use strict';

/**
 * @ngdoc overview
 * @name hydramaze.controller:TutorialCtrl
 * @description Tutorial Controller.
 */

angular.module('hydramaze')
  .controller('TutorialCtrl', function($scope, $timeout, $controller, tutorialService) {

    $scope.steps = [
      {
        templateUrl: '/app/views/laboratory-content/tutorial/step-one/step-one.html',
        title: 'choose an algorithm',
        controller: 'StepOneCtrl'
      },
      {
        templateUrl: '/app/views/laboratory-content/tutorial/step-two/step-two.html',
        title: 'setup the algorithm parameters',
        controller: 'StepTwoCtrl'
      },
      {
        templateUrl: '/app/views/laboratory-content/tutorial/step-three/step-three.html',
        title: 'choose a dataset',
        controller: 'StepThreeCtrl'
      },
      {
        templateUrl: '/app/views/laboratory-content/tutorial/step-four/step-four.html',
        title: 'see the results',
        controller: 'StepFourCtrl'
      }
    ];

    $scope.previousStepCall = function(elementScope) {
      // call previous step
      elementScope.$previousStep();
    };

    $scope.nextStepCall = function(elementScope) {
      // get step scope and call a common function to save step data
      var stepChildScope = angular.element($(".step-main-content-view")).scope();
      stepChildScope.saveDataServiceTutorialStep();

      // call next step
      elementScope.$nextStep();
    };

    $scope.$setStepAsActive = function(elementScope, index) {
      if (elementScope.$getActiveIndex() != index + 1) {
        // save screen state
        var stepChildScope = angular.element($(".step-main-content-view")).scope();
        stepChildScope.saveDataServiceTutorialStep();

        if ($scope.$isAllowed(index)) {
          // set an active step
          elementScope.$setActiveIndex(index + 1);
        }
      }
    };

    $scope.$isAllowed = function (index) {
      return tutorialService.hasDataInStep(index) || index == 0;
    };

    // Check if step is valid and enable / disable the next step
    $scope.$isValidStep = function() {
      return true;
    };

    $scope.$on("$destroy", function() {
      tutorialService.emptyAllData();
    });

    /*
    * Functions usage
    */
    $timeout(function() {
      console.log("Tutorial Controller as been loaded!");
    });

  });
  