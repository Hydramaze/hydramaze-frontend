'use strict';

/**
 * @ngdoc overview
 * @name hydramaze.controller:InputNumberCtrl
 * @description InputNumberCtrl Controller.
 */

angular.module('hydramaze')
  .controller('InputNumberCtrl', function($scope) {
  	
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

  	$scope.click = function() {
  		console.log($scope.value);
  	};

  	console.log('input has been loaded');
  });