'use strict';

/**
 * @ngdoc overview
 * @name hydramaze.controller:Combo BoxCtrl
 * @description Combo Box Controller.
 */

angular.module('hydramaze')
  .controller('ComboBoxCtrl', function($scope, $attrs, $http) {

    $scope.completeDescription = $scope.data["completeDescription"];
    $scope.defaultValue = $scope.data["defaultValue"];
    $scope.comboValues = $scope.data["listData"];
    $scope.name = $scope.data["name"];
    $scope.observation = $scope.data["observation"];
    $scope.title = $scope.data["simpleDescription"];

    console.log($scope.title);

    console.log('combo box has been loaded');

});
