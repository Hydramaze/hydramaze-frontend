'use strict';

/**
 * @ngdoc overview
 * @name hydramaze.controller:ContributorsCtrl
 * @description Contributors Controller.
 */

angular.module('hydramaze')
  .controller('ContributorsCtrl', function($scope, $timeout) {
    
    /*
    * Declared scope functions
    */

    $scope.$addControllerNameAsBodyClass = function () {
      $("body").addClass("contributors");
    }

    $scope.$removeControllerNameAsBodyClass = function () {
      $("body").removeClass("contributors");
    }

    /*
    * Declared scope variables
    */

    /*
    * Functions usage
    */

    $scope.$addControllerNameAsBodyClass();

    // Called when finish render
    $timeout(function () {  
      console.log("Contributors Controller as been loaded!");
    });

    $scope.$on("$destroy", function() {
      $scope.$removeControllerNameAsBodyClass();
    });

  });
