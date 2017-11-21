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
    var data;
    var downloadComponent;
    var downloadUrl;
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

            $scope.$createScreenAlgorithmExecutionResult(response.data, downloadUrl);
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
    }
    $scope.$getPythonFile = function(algorithmId, datasetId, testSize, parametersData) {
      var config = {
          headers : {
            'Content-Type': 'application/json;charset=utf-8;'
          }
        }

      $http.post('http://localhost:8080/api/algorithm/' + algorithmId + '/download?&dataSetId=' + datasetId + "&testSize=" + testSize, parametersData, config)
        .then(function successCallback(response) {
          if (response.status == 200 && !response.data.error) {
            var blob = new Blob([response.data], {type: 'text/x-python'});

            downloadUrl = window.URL.createObjectURL(blob);
            downloadComponent = document.createElement('download-button-directive');
          }
          else {
            var errorMessage = "Algorithm cannot be downloaded.";
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
        });
    }

    $scope.$createScreenAlgorithmExecutionResult = function(data) {
      var component = 'results-list-directive';

      var newBlock = document.createElement("div");
      newBlock.setAttribute("id", "results-list-directive");
      newBlock.setAttribute("class", "block container-fluid");

      var content = document.createElement(component);
      newBlock.append(content);
      newBlock.append(downloadComponent);

      $('#step-four-content').append(newBlock);

      var newScope = $scope.$new(true);
      newScope.data = data;
      newScope.downloadUrl = downloadUrl;

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
      showLoading(tutorialService.$getLoadingContainer());

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
        $scope.$getPythonFile(algorithmId, datasetId, testSize, parametersData);
      } else {
        $scope.$createScreenAlgorithmExecutionResult(stepFourRetrievedData, downloadUrl);
      }

      console.log("StepFourCtrl Controller as been loaded!");
    });

  });
