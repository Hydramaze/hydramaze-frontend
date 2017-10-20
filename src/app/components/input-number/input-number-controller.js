'use strict';

/**
 * @ngdoc overview
 * @name hydramaze.controller:InputNumberCtrl
 * @description InputNumberCtrl Controller.
 */

angular.module('hydramaze')
  .controller('InputNumberCtrl', function($scope, $timeout) {
  	
    $scope.id = $scope.data["id"];
    $scope.completeDescription = $scope.data["completeDescription"];
    $scope.defaultValue = $scope.data["defaultValue"];
    $scope.comboValues = $scope.data["listData"];
    $scope.name = $scope.data["name"];
    $scope.observation = $scope.data["observation"];
    $scope.title = $scope.data["simpleDescription"];

    $scope.getComponentKey = function() {
      return $scope.id;
    };

    $scope.getComponentValue = function() {
      var returnValue = undefined;
      
      if ($scope.value === undefined) {
        returnValue = $scope.defaultValue;
      } else {
        returnValue = $scope.value;
      }
      return returnValue;
    };
    
    $scope.$setupPreviousChoice = function() {
      if ($scope.data["previousValue"] != undefined &&
        $scope.data["previousValue"] != $scope.data["defaultValue"]) {
        $scope.value = $scope.data["previousValue"];
      }
    };

    /* Called when finish render */
    $timeout(function () {
      $scope.$setupPreviousChoice();
    });

  	console.log('input has been loaded');
  });