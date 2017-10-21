'use strict';

/**
 * @ngdoc overview
 * @name hydramaze.controller:ConfusionMatrixCtrl
 * @description Confusion Matrix Controller.
 */

angular.module('hydramaze')
  .controller('ConfusionMatrixCtrl', function($scope) {

    $scope.classNames = $scope.data["class_names"];
    $scope.matrix = $scope.data["matrix"];

    console.log("ConfusionMatrixCtrl has been loaded");
  });
