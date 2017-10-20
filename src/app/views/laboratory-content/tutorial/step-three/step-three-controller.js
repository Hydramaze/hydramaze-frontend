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

    // Scope functions
    $scope.saveDataServiceTutorialStep = function() {
      tutorialService.setStepThreeData(stepThreeService.getAllData());
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

      hideLoading($("#laboratory-content"));
    }


    /*
    * Functions usage
    */
    $timeout(function() {

      // retrieve previous data and init data
      if (tutorialService.getStepThreeData() === undefined) {
        stepThreeService.initData({});
      } else {
        stepThreeService.initData(angular.copy(tutorialService.getStepThreeData()));
      }

      $scope.$getDatasetList(4);
    });

    console.log("StepThreeCtrl Controller as been loaded!");

  });
