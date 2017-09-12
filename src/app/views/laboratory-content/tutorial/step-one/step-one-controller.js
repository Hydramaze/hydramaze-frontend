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

    // Scope functions
    $scope.saveDataServiceTutorialStep = function() {
      tutorialService.setStepOneData(stepOneService.getAllData());
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
    }

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
    }

    /*
    * Functions usage
    */
    $timeout(function() {

      // clear previous selected options
      stepOneService.initData([]);

      // Wait for components render to trigger internal code
      $timeout(function() {
        $scope.$getAlgorithmsList();
      });

      console.log("StepOneCtrl Controller as been loaded!");
    });

  });
