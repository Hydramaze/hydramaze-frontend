'use strict';

/**
 * @ngdoc overview
 * @name hydramaze.controller:StepOneCtrl
 * @description Step One Controller.
 */

angular.module('hydramaze')
  .controller('StepOneCtrl', function($scope, $compile, $timeout, $http, tutorialService, stepOneService, notify) {

    /*
    * Declared scope functions
    */

    $scope.$stepValidation = function() {
      var isValid = false;
      var stepData = tutorialService.$getStepOneData();

      if (stepData && stepData["algorithmId"]) {
          isValid = true;
      } else {
        notify({
          message: "Please select an algorithm",
          classes: "alert-warning"
        });
      }

      return isValid;
    }

    $scope.$saveDataServiceTutorialStep = function() {
      // validate if had change on this step
      if (!arraysEqual(tutorialService.$getStepOneData(), stepOneService.$getAllData())) {
        // clear all data
        tutorialService.$emptyAllData();
        // save state
        tutorialService.$setStepOneData(stepOneService.$getAllData());
      }
    };

    $scope.$createScreenAlgorithmsList = function(data) {
      var component = 'algorithms-list-directive';

      var newBlock = document.createElement("div");
      newBlock.setAttribute("id", "algorithms-list-directive");
      newBlock.setAttribute("class", "block container-fluid");

      var content = document.createElement(component);
      newBlock.append(content);

      $('#step-one-content').append(newBlock);

      var newScope = $scope.$new(true);
      newScope.data = data;

      $compile($('#step-one-content').contents())(newScope);
    };

    $scope.$getAlgorithmsList = function() {      
      $http.get('http://localhost:8080/api/algorithm')
        .then(function successCallback(response) {
          if (response.status == 200) {
            $scope.$createScreenAlgorithmsList(response.data);
          }
          else {
            notify({
              message: "Algorithms list not found.",
              classes: "alert-danger"
            });
          }
        }, function errorCallback(responseError) {
          notify({
            message: "Sorry, an error has occurred. Try again!",
            classes: "alert-danger"
          });
        });
    };

    /*
    * Declared scope variables
    */

    /*
    * Functions usage
    */

    // Called when finish render
    $timeout(function () {
      // retrieve previous data and init data
      if (tutorialService.$getStepOneData() === undefined) {
        stepOneService.$initData({});
      } else {
        stepOneService.$initData(angular.copy(tutorialService.$getStepOneData()));
      }

      $scope.$getAlgorithmsList();

      console.log("StepOneCtrl Controller as been loaded!");
    });

  });
