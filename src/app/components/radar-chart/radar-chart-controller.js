'use strict';

/**
 * @ngdoc overview
 * @name hydramaze.controller:RadarChartCtrl
 * @description Radar Chart Controller.
 */

angular.module('hydramaze')
  .controller('RadarChartCtrl', function($scope, $timeout) {

    /*
    * Declared scope functions
    */

    /*
    * Declared scope variables
    */

    $scope.labels = ["Eating", "Drinking", "Sleeping", "Designing", "Coding", "Cycling", "Running"];

    $scope.data = [
      [65, 59, 90, 81, 56, 55, 40],
      [28, 48, 40, 19, 96, 27, 100]
    ];

    /*
    * Functions usage
    */

    // Called when finish render
    $timeout(function () {

    });

  });
