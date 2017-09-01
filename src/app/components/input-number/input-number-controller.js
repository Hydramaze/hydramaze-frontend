'use strict';

/**
 * @ngdoc overview
 * @name hydramaze.controller:InputNumberCtrl
 * @description InputNumberCtrl Controller.
 */

angular.module('hydramaze')
  .controller('InputNumberCtrl', function($scope) {
  	
    $scope.completeDescription = $scope.data["completeDescription"];
    $scope.defaultValue = $scope.data["defaultValue"];
    $scope.comboValues = $scope.data["listData"];
    $scope.name = $scope.data["name"];
    $scope.observation = $scope.data["observation"];
    $scope.title = $scope.data["simpleDescription"];

  	$scope.click = function() {
  		console.log($scope.value);
  	};
  	console.log('input has been loaded');
  });