'use strict';

/**
 * @ngdoc overview
 * @name hydramaze.controller:CheckBoxCtrl
 * @description Checkbox Controller.
 */

angular.module('hydramaze')
  .controller('CheckBoxCtrl', function($scope, $attrs, $http) {

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
      return $scope.defaultValue;
    };

    console.log('check box has been loaded');

});
