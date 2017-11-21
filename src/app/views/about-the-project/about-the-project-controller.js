'use strict';

/**
 * @ngdoc overview
 * @name hydramaze.controller:AboutTheProjectCtrl
 * @description About The Project Controller.
 */

angular.module('hydramaze')
  .controller('AboutTheProjectCtrl', function($scope, $timeout) {
    
    /*
    * Declared scope functions
    */

    $scope.$addControllerNameAsBodyClass = function () {
      $("body").addClass("about-the-project");
    }

    $scope.$removeControllerNameAsBodyClass = function () {
      $("body").removeClass("about-the-project");
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

    });

    $scope.$on("$destroy", function() {
      $scope.$removeControllerNameAsBodyClass();
    });

  });
