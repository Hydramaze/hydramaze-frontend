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
      $http.get('http://localhost:8080/api/data-set/getByAlgorithmId?id=' + idValue)
      .then(function successCallback(response) {
        console.log(response);
        $scope.$createScreenDatasetList(response.data);
      }, function errorCallback(response) {
        console.log(response);
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
    * Functions usage
    */
    $timeout(function() {

      // clear previous selected options
      stepThreeService.initData([]);

      $scope.$getDatasetList(4);
    });

    console.log("StepThreeCtrl Controller as been loaded!");

  });
