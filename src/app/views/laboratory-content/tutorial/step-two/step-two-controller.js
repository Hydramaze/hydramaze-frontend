'use strict';

/**
 * @ngdoc overview
 * @name hydramaze.controller:StepTwoCtrl
 * @description Step Two Controller.
 */

angular.module('hydramaze')
  .controller('StepTwoCtrl', function($scope, $http, $timeout) {

    console.log("StepTwoCtrl Controller as been loaded!");

    $scope.init = function() {
      $scope.algorithmId = localStorage.getItem("value");
    };
    $timeout(function() {
      $http.get("http://localhost:8080/api/parameter/getByAlgorithmId?id=" + $scope.algorithmId).
      then(function(response) {
        $scope.algorithm = response.data;
      });
    });
  });
