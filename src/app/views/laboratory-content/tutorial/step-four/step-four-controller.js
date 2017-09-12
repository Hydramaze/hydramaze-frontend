'use strict';

/**
 * @ngdoc overview
 * @name hydramaze.controller:StepFourCtrl
 * @description Step Four Controller.
 */

angular.module('hydramaze')
  .controller('StepFourCtrl', function($scope, $http, $timeout, $compile, tutorialService, notify) {

    /*
    * Declared scope functions
    */

    // Scope functions

    $scope.$getAlgorithmExecution = function(algorithmId, datasetId, testSize, data) {

      var config = {
          headers : {
            'Content-Type': 'application/json;charset=utf-8;'
          }
        }

      $http.post('http://localhost:8080/api/algorithmExecuter?algorithmId=' + algorithmId + "&dataSetId=" + datasetId + "&learningCurve=" + testSize, data, config)
        .then(function successCallback(response) {
          if (response.status == 200) {
            $scope.accuracy = response.data.accuracy;
            console.log(response.data.accuracy);
          }
          else {
            notify({
              message: "Algorithm cannot be executed.",
              classes: "alert-danger"
            });
          }
        }, function errorCallback(responseError) {
          notify({
            message: "Sorry, an error has occurred. Try again!",
            classes: "alert-danger"
          });
          console.log(responseError);
        });
    }

    $scope.$createScreenAlgorithmExecutionResult = function(data) {

    }


    /*
    * Functions usage
    */
    $timeout(function() {

      // Retrieve data from previous steps
      var stepOneSharedData = tutorialService.getStepOneData();
      var stepTwoSharedData = tutorialService.getStepTwoData();
      var stepThreeSharedData = tutorialService.getStepThreeData();

      // get data
      var algorithmId = stepOneSharedData[0].value;
      var datasetId = stepThreeSharedData[0].value;
      var testSize = stepThreeSharedData[1].value;

      // call algorithm execution
      $scope.$getAlgorithmExecution(algorithmId, datasetId, testSize, stepTwoSharedData);

      console.log("StepFourCtrl Controller as been loaded!");
    });

  });
