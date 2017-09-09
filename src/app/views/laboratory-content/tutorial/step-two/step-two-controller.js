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
      $http.get('http://localhost:8080/api/parameter/getByAlgorithmId?id=' + idValue)
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
          }
        }, function errorCallback(responseError) {
          notify({
            message: "Sorry, an error has occurred. Try again!",
            classes: "alert-danger"
          });
        });
    }

    $scope.$createScreenAlgorithmsParameters = function(data) {
      angular.forEach(data, function (val, key) {
        
        var newBlock = document.createElement("div");
        newBlock.setAttribute("id", "algorithm-parameter-" + key);
        newBlock.setAttribute("class", "algorithm-parameter block col-xs-12 col-sm-6 col-md-4 container-fluid");

        var directiveComponent = document.createElement(val.component + "-directive");
        newBlock.append(directiveComponent);

        var newScope = $scope.$new(true);
        newScope.data = val;
        
        var el = $compile(newBlock)(newScope);

        $('#step-two-content').append(newBlock);
      });
    }


    /*
    * Functions usage
    */
    $timeout(function() {

      // clear previous selected options
      stepTwoService.initData([]);

      var stepOneSharedData = tutorialService.getStepOneData();
      var algorithmId = stepOneSharedData[0].value;

      console.log(algorithmId);

      if (algorithmId) {
        
          $scope.$getParametersByAlgorithmID(algorithmId);
        
      } else {
        notify({
          message: "AlgorithmId is not a valid value",
          classes: "alert-warning"
        });
      }

      console.log("StepTwoCtrl Controller as been loaded!");
    });
  });
