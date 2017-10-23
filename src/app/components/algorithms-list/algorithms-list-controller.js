'use strict';

/**
 * @ngdoc overview
 * @name hydramaze.controller:AlgorithmsListCtrl
 * @description Algorithms List Controller.
 */

angular.module('hydramaze')
  .controller('AlgorithmsListCtrl', function($scope, $timeout, stepOneService) {

    /*
    * Declared scope functions
    */

    $scope.$formatterData = function(algorithms) {
      var algorithmsObj = {};
      angular.forEach(algorithms, function(value, key) {
        if (!algorithmsObj[value.learningType]) {
          algorithmsObj[value.learningType] = {};
        }
        if (!algorithmsObj[value.learningType][value.type]) {
          algorithmsObj[value.learningType][value.type] = [];
        }
        algorithmsObj[value.learningType][value.type].push({
          id: value.id, name: value.name,
          completeDescription: value.completeDescription,
          simpleDescription: value.simpleDescription
        });
      });
      return algorithmsObj;
    }

    $scope.$algorithmClick = function(algorithmId) {
      stepOneService.$addData("algorithmId", algorithmId);
    };

    $scope.$setupPreviousChoices = function() {
      var previousData = stepOneService.$getAllData();

      if (Object.keys(previousData).length > 0) {
        $("#algorithm-" + previousData["algorithmId"]).prop("checked", true);
      }
    };

    /*
    * Declared scope variables
    */

    $scope.toggleDown = true;
    $scope.toggleUp = true;
    $scope.algorithms = $scope.$formatterData($scope.data);

    /*
    * Functions usage
    */

    // Called when finish render
    $timeout(function () {
      $scope.$setupPreviousChoices();

      console.log('Algorithms list has been loaded');
    });

  });
