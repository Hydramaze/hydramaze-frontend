'use strict';

/**
 * @ngdoc overview
 * @name hydramaze.controller:ConfusionMatrixCtrl
 * @description Confusion Matrix Controller.
 */

angular.module('hydramaze')
  .controller('ConfusionMatrixCtrl', function($scope, $timeout) {

    /*
    * Declared scope functions
    */

    /*
    * Declared scope variables
    */

    $scope.classNames = $scope.data["class_names"];
    $scope.matrix = $scope.data["matrix"];
    $scope.reference = $scope.data["reference"];

    /*
    * Functions usage
    */

    // Called when finish render
    $timeout(function () {

    });

  });
