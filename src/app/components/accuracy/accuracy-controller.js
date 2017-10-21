'use strict';

/**
 * @ngdoc overview
 * @name hydramaze.controller:AccuracyCtrl
 * @description Accuracy Controller.
 */

angular.module('hydramaze')
  .controller('AccuracyCtrl', function($scope) {

    $scope.accuracy = $scope.data;

    console.log("AccuracyCtrl has been loaded");
  });
