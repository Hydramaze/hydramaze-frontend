'use strict';

/**
 * @ngdoc overview
 * @name hydramaze.controller:EnvironmentConfigurationCtrl
 * @description Environment Configuration Controller.
 */

angular.module('hydramaze')
  .controller('EnvironmentConfigurationCtrl', function($scope, $timeout) {
    
    /*
    * Declared scope functions
    */

    $scope.$addControllerNameAsBodyClass = function () {
      $("body").addClass("environment-configuration");
    }

    $scope.$removeControllerNameAsBodyClass = function () {
      $("body").removeClass("environment-configuration");
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
