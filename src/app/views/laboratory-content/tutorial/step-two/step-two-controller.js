'use strict';

/**
 * @ngdoc overview
 * @name hydramaze.controller:StepTwoCtrl
 * @description Step Two Controller.
 */

angular.module('hydramaze')
  .controller('StepTwoCtrl', function($scope, $http) {

    console.log("StepTwoCtrl Controller as been loaded!");

    $http.get('http://localhost:8080/greeting').
    then(function(response) {
        $scope.greeting = response.data;
    });

  });