'use strict';

/**
 * @ngdoc overview
 * @name hydramaze.controller:AccuracyCtrl
 * @description Accuracy Controller.
 */

angular.module('hydramaze')
  .controller('AccuracyCtrl', function($scope, $timeout) {

    /*
    * Declared scope functions
    */

    $scope.$getResultAnalysisText = function(originalValue) {
        var resultText;
        var value = originalValue * 100;
        switch(true) {
            case value <= 50:
                resultText = "Oops! Seems like that configuration isn’t a good one. Try to return on step 2 and change some parameters.";
                break;

            case value > 50 && value <= 85:
                resultText = "Almost there! This configuration can be improved.";
                break;

            case value > 85:
                resultText = "Excellent! You’ve found a good model for this case.";
                break;

            default:
                resultText = "";
        }

        return resultText;
    };

    /*
    * Declared scope variables
    */

    $scope.name = $scope.data.name;
    $scope.value = $scope.data.value.toFixed(3);
    $scope.resultAnalysis = $scope.$getResultAnalysisText($scope.value);
    $scope.reference = $scope.data.reference;

    /*
    * Functions usage
    */

    // Called when finish render
    $timeout(function () {
      
    });

  });
