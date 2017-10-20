'use strict';

/**
 * @ngdoc overview
 * @name hydramaze.controller:StepTwoCtrl
 * @description Step Two Controller.
 */

angular.module('hydramaze')
  .controller('StepTwoCtrl', function($scope, $http, $timeout, $compile, tutorialService, stepTwoService, notify) {

    /*
    * Declared scope functions
    */

    // Scope functions
    $scope.saveDataServiceTutorialStep = function() {

      $(".algorithm-parameter").each(function() {
        var elementScope = angular.element("#" + $(this).attr("id")).scope();
        console.log(angular.element("#" + $(this).attr("id")));
        stepTwoService.addData(elementScope.getComponentKey(), elementScope.getComponentValue());
      });

      tutorialService.setStepTwoData(stepTwoService.getAllData());
    };

    $scope.$getParametersByAlgorithmID = function(idValue) {
      $http.get('http://localhost:8080/api/algorithm/' + idValue + '/parameter')
        .then(function successCallback(response) {
          if (response.status == 200) {
            console.log(response);
            $scope.$createScreenAlgorithmsParameters(response.data);
          }
          else {
            notify({
              message: "Algorithm parameters not found.",
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

    $scope.$createScreenAlgorithmsParameters = function(data) {


      var component = 'parameters-list-directive';

      var newBlock = document.createElement("div");
      newBlock.setAttribute("id", "parameters-list-directive");
      newBlock.setAttribute("class", "block container-fluid");

      var content = document.createElement(component);
      newBlock.append(content);

      $('#step-two-content').append(newBlock);

      var newScope = $scope.$new(true);
      newScope.data = data;

      $compile($('#step-two-content').contents())(newScope);
    }


    /*
    * Functions usage
    */
    $timeout(function() {

      // retrieve previous data and init data
      if (tutorialService.getStepTwoData() === undefined) {
        stepTwoService.initData({});
      } else {
        stepTwoService.initData(angular.copy(tutorialService.getStepTwoData()));
      }

      var stepOneSharedData = tutorialService.getStepOneData();
      var algorithmId = stepOneSharedData["algorithmId"];

      if (algorithmId) {
          $scope.$getParametersByAlgorithmID(algorithmId);
      } else {
        notify({
          message: "AlgorithmId is not a valid value",
          classes: "alert-warning"
        });
        $scope.$previousStep();
      }

      console.log("StepTwoCtrl Controller as been loaded!");
    });
  });
