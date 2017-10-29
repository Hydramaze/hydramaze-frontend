'use strict';

/**
 * @ngdoc overview
 * @name hydramaze.controller:TutorialCtrl
 * @description Tutorial Controller.
 */

angular.module('hydramaze')
  .controller('TutorialCtrl', function($scope, $timeout, $q, $controller, tutorialService, notify) {

    /*
    * Declared scope functions
    */

    $scope.$previousStepCall = function(elementScope) {
      // get step scope and call a common function to save step data
      var stepChildScope = angular.element($(".step-main-content-view")).scope();
      stepChildScope.$saveDataServiceTutorialStep();

      // call previous step
      elementScope.$previousStep();
      notify.closeAll();
    };

    $scope.$nextStepCall = function(elementScope) {
      // get step scope and call a common function to save step data
      var stepChildScope = angular.element($(".step-main-content-view")).scope();
      stepChildScope.$saveDataServiceTutorialStep();

      if ($scope.$isValidatedStep()) {
        // call next step
        elementScope.$nextStep();
        notify.closeAll();
      }
    };

    $scope.$setStepAsActive = function(elementScope, index) {
      if (elementScope.$getActiveIndex() != index + 1) {
        // save screen state
        var stepChildScope = angular.element($(".step-main-content-view")).scope();
        stepChildScope.$saveDataServiceTutorialStep();

        if ($scope.$isAllowed(index)) {
          // set an active step
          elementScope.$setActiveIndex(index + 1);
          notify.closeAll();
        }
      }
    };

    // Validate if step is allowed for changes between tabs
    $scope.$isAllowed = function (index) {
      return tutorialService.$hasDataInStep(index) || index == 0;
    };

    // Check if step is valid and enable / disable the next step
    $scope.$isValidatedStep = function(elementScope) {
      // call step validation
      var stepChildScope = angular.element($(".step-main-content-view")).scope();
      return stepChildScope.$stepValidation();
    };

    $scope.$addControllerNameAsBodyClass = function () {
      $("body").addClass("laboratory-tutorial");
    }

    $scope.$removeControllerNameAsBodyClass = function () {
      $("body").removeClass("laboratory-tutorial");
    }

    /*
    * Declared scope variables
    */

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

    $scope.canceler = $q.defer();

    /*
    * Functions usage
    */

    $scope.$addControllerNameAsBodyClass();

    tutorialService.$setLoadingContainer($("#step-content-container"));

    // Called when finish render
    $timeout(function () {
      console.log("Tutorial Controller as been loaded!");
    });

    $scope.$on("$destroy", function() {
      tutorialService.$emptyAllData();
      $scope.$removeControllerNameAsBodyClass();
      notify.closeAll();
      $scope.canceler.resolve();
    });

  });
