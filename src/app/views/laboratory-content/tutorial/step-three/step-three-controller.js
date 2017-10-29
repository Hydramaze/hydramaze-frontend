'use strict';

/**
 * @ngdoc overview
 * @name hydramaze.controller:StepThreeCtrl
 * @description Step Three Controller.
 */

angular.module('hydramaze')
  .controller('StepThreeCtrl', function($scope, $http, $timeout, $compile, stepTwoService, stepThreeService, tutorialService, notify) {

    /*
    * Declared scope functions
    */

    $scope.$stepValidation = function() {
      var isValid = false;
      var stepData = tutorialService.$getStepThreeData();

      if (stepData && stepData["datasetId"] && stepData["testSize"]) {
          isValid = true;
      } else {
        notify({
          message: "Please set a dataset choice and the test percentage size",
          classes: "alert-warning"
        });
      }
      
      return isValid;
    }

    $scope.$saveDataServiceTutorialStep = function() {
      // validate if had change on this step
      if (!arraysEqual(tutorialService.$getStepThreeData(), stepThreeService.$getAllData())) {
        // clear all data
        tutorialService.$emptyFourData();
        // save state
        tutorialService.$setStepThreeData(stepThreeService.$getAllData());
      }
    };

    $scope.$getDatasetList = function(idValue) {
      $http.get('http://localhost:8080/api/algorithm/' + idValue + '/data-set')
        .then(function successCallback(response) {
          if (response.status == 200) {
            $scope.$createScreenDatasetList(response.data);
          }
          else {
            notify({
              message: "Datasets not found.",
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

    $scope.$createScreenDatasetList = function(data) {
      var component = 'datasets-list-directive';

      var newBlock = document.createElement("div");
      newBlock.setAttribute("id", "datasets-list-directive");
      newBlock.setAttribute("class", "block container-fluid");

      var directiveComponent = document.createElement(component);
      newBlock.append(directiveComponent);

      var newScope = $scope.$new(true);
      newScope.data = data;
      
      var el = $compile(newBlock)(newScope);

      $('#step-three-content').append(newBlock);
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
      
      // retrieve previous data and init data
      if (tutorialService.$getStepThreeData() === undefined) {
        stepThreeService.$initData({});
      } else {
        stepThreeService.$initData(angular.copy(tutorialService.$getStepThreeData()));
      }

      var stepOneSharedData = tutorialService.$getStepOneData();
      var algorithmId = stepOneSharedData["algorithmId"];

      if (algorithmId) {
          $scope.$getDatasetList(algorithmId);
      } else {
        notify({
          message: "AlgorithmId is not a valid value",
          classes: "alert-warning"
        });
        $scope.$previousStep();
      }

      console.log("StepThreeCtrl Controller as been loaded!");
    });

  });
