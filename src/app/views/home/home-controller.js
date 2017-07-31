'use strict';

/**
 * @ngdoc overview
 * @name hydramaze.controller:HomeCtrl
 * @description Home Controller.
 */

angular.module('hydramaze')
  .controller('HomeCtrl', function($scope) {
    // Load home template
    $scope.defaultContent = '/app/views/home/home.html';
    
    console.log("Home Controller as been loaded!");

  });
