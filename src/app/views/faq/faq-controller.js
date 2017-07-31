'use strict';

/**
 * @ngdoc overview
 * @name hydramaze.controller:FaqCtrl
 * @description Faq Controller.
 */

angular.module('hydramaze')
  .controller('FaqCtrl', function($scope) {
    // Load home template
    $scope.defaultContent = '/app/views/home/home.html';
    
    console.log("Faq Controller as been loaded!");

  });
