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

    /*
    * Declared scope variables
    */

    $scope.accuracy = $scope.data;

    /*
    * Functions usage
    */

    // Called when finish render
    $timeout(function () {
      console.log("AccuracyCtrl has been loaded");
    });

  });
