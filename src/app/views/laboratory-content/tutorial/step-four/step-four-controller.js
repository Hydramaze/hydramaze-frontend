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

    $scope.$getAlgorithmExecution = function(algorithmId, datasetId, testSize, parametersData) {
      var config = {
          headers : {
            'Content-Type': 'application/json;charset=utf-8;'
          }
        }

      $http.post('http://localhost:8080/api/algorithm/' + algorithmId + '/execute?&dataSetId=' + datasetId + "&testSize=" + testSize, parametersData, config)
        .then(function successCallback(response) {
          if (response.status == 200 && !response.data.error) {
            $scope.accuracy = response.data.accuracy;
            $scope.confusion_matrix = response.data.confusion_matrix;
            console.log(response.data.accuracy);
            console.log("resposta: ", response.data.confusion_matrix);

            $scope.$createScreenAlgorithmExecutionResult(response.data);
          }
          else {
            var errorMessage = "Algorithm cannot be executed.";
            if (response.data.error) {
              errorMessage = response.data.error;
            }
            notify({
              message: errorMessage,
              classes: "alert-danger"
            });
            $scope.$previousStep();
          }
        }, function errorCallback(responseError) {
          notify({
            message: "Sorry, an error has occurred. Try again!",
            classes: "alert-danger"
          });
          console.log(responseError);
          $scope.$previousStep();
        });
    }

    $scope.$createScreenAlgorithmExecutionResult = function(data) {
      hideLoading($("#laboratory-content"));
    }


    /*
    * Functions usage
    */
    $timeout(function() {

      // Retrieve data from previous steps
      var stepOneSharedData = tutorialService.getStepOneData();
      var stepTwoSharedData = tutorialService.getStepTwoData();
      var stepThreeSharedData = tutorialService.getStepThreeData();

      // prepare data to send
      var algorithmId = stepOneSharedData["algorithmId"];
      var datasetId = stepThreeSharedData["datasetId"];
      var testSize = stepThreeSharedData["testSize"];

      var parametersData = [];

      $.each(stepTwoSharedData, function(key, value) {
        parametersData.push({"parameterId": key, "value": value});
      });

      // call algorithm execution
      $scope.$getAlgorithmExecution(algorithmId, datasetId, testSize, parametersData);

      console.log("StepFourCtrl Controller as been loaded!");
    });

  });
