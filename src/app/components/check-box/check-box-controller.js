'use strict';

/**
 * @ngdoc overview
 * @name hydramaze.controller:CheckBoxCtrl
 * @description Checkbox Controller.
 */

angular.module('hydramaze')
  .controller('CheckBoxCtrl', function($scope, $timeout) {

    $scope.id = $scope.data["id"];
    $scope.completeDescription = $scope.data["completeDescription"];
    $scope.value = $scope.data["defaultValue"];
    $scope.comboValues = $scope.data["listData"];
    $scope.name = $scope.data["name"];
    $scope.observation = $scope.data["observation"];
    $scope.title = $scope.data["simpleDescription"];

    $scope.getComponentKey = function() {
      return $scope.id;
    };

    $scope.getComponentValue = function() {
      return $scope.value;
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

    console.log('check box has been loaded');

});
