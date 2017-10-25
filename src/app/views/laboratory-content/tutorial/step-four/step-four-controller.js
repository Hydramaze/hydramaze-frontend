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

    $scope.$stepValidation = function() {
      // Do nothing just return true
      return true;
    };

    $scope.$saveDataServiceTutorialStep = function() {
      // Do nothing
    };

    $scope.$getAlgorithmExecution = function(algorithmId, datasetId, testSize, parametersData) {
      var config = {
          headers : {
            'Content-Type': 'application/json;charset=utf-8;'
          }
        }

      $http.post('http://localhost:8080/api/algorithm/' + algorithmId + '/execute?&dataSetId=' + datasetId + "&testSize=" + testSize, parametersData, config)
        .then(function successCallback(response) {
          if (response.status == 200 && !response.data.error) {
            tutorialService.$setStepFourData(response.data);
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
          $scope.$previousStep();
        });
    }

    $scope.$createScreenAlgorithmExecutionResult = function(data) {
      var component = 'results-list-directive';

      var newBlock = document.createElement("div");
      newBlock.setAttribute("id", "results-list-directive");
      newBlock.setAttribute("class", "block container-fluid");

      var content = document.createElement(component);
      newBlock.append(content);

      $('#step-four-content').append(newBlock);

      var newScope = $scope.$new(true);
      newScope.data = data;

      $compile($('#step-four-content').contents())(newScope)
    }

    /*
    * Declared scope variables
    */

    /*
    * Functions usage
    */

    // Called when finish render
    $timeout(function () {
      // Retrieve prvious execution result
      var stepFourRetrievedData = tutorialService.$getStepFourData();

      if (stepFourRetrievedData == undefined) {
        // Retrieve data from previous steps
        var stepOneSharedData = tutorialService.$getStepOneData();
        var stepTwoSharedData = tutorialService.$getStepTwoData();
        var stepThreeSharedData = tutorialService.$getStepThreeData();

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
      } else {
        $scope.$createScreenAlgorithmExecutionResult(stepFourRetrievedData);
      }

      console.log("StepFourCtrl Controller as been loaded!");
    });

  });
