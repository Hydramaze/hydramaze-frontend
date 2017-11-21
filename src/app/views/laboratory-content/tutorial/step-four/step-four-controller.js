'use strict';

/**
 * @ngdoc overview
 * @name hydramaze.controller:StepFourCtrl
 * @description Step Four Controller.
 */

angular.module('hydramaze')
  .controller('StepFourCtrl', function($scope, $http, $timeout, $compile, stepFourService, tutorialService, notify) {

    /*
    * Declared scope functions
    */
    var data;

    $scope.$stepValidation = function() {
      // Do nothing just return true
      return true;
    };

    $scope.$saveDataServiceTutorialStep = function() {
      // validate if had change on this step
      if (!arraysEqual(tutorialService.$getStepFourData(), stepFourService.$getAllData())) {
        // clear all data
        tutorialService.$emptyFourData();
        // save state
        tutorialService.$setStepFourData(stepFourService.$getAllData());
      }
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
            stepFourService.$addData("retrievedData", response.data);
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
          var errorMessage = "Sorry, an error has occurred. Try again!";
          if (responseError.data && responseError.data.message) errorMessage = responseError.data.message;
          notify({
            message: errorMessage,
            classes: "alert-danger"
          });
          $scope.$previousStep();
        });
    };
    
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
    };

    /*
    * Declared scope variables
    */

    /*
    * Functions usage
    */

    // Called when finish render
    $timeout(function () {
      showLoading(tutorialService.$getLoadingContainer());

      // retrieve previous data and init data
      if (tutorialService.$getStepFourData() === undefined) {
        stepFourService.$initData({});
      } else {
        stepFourService.$initData(angular.copy(tutorialService.$getStepFourData()));
      }

      // Retrieve prvious execution result
      var stepFourRetrievedData = stepFourService.$getAllData()["retrievedData"];

      if (stepFourRetrievedData == undefined) {
        // Retrieve data from previous steps
        var stepOneSharedData = tutorialService.$getStepOneData();
        var stepTwoSharedData = tutorialService.$getStepTwoData();
        var stepThreeSharedData = tutorialService.$getStepThreeData();

        // prepare data to send
        stepFourService.$addData("algorithmId", stepOneSharedData["algorithmId"]);
        stepFourService.$addData("datasetId", stepThreeSharedData["datasetId"]);
        stepFourService.$addData("testSize", stepThreeSharedData["testSize"]);

        var parametersData = [];

        $.each(stepTwoSharedData, function(key, value) {
          parametersData.push({"parameterId": key, "value": value});
        });

        // store the data on shared service data
        stepFourService.$addData("parametersData", parametersData);

        // call algorithm execution
        $scope.$getAlgorithmExecution(
          stepFourService.$getAllData()["algorithmId"],
          stepFourService.$getAllData()["datasetId"],
          stepFourService.$getAllData()["testSize"],
          stepFourService.$getAllData()["parametersData"]
        );
        
      } else {
        $scope.$createScreenAlgorithmExecutionResult(stepFourRetrievedData);
      }
    });

  });
