'use strict';

/**
 * @ngdoc overview
 * @name hydramaze.controller:EnvironmentConfigurationCtrl
 * @description Environment Configuration Controller.
 */

angular.module('hydramaze')
  .controller('EnvironmentConfigurationCtrl', function($timeout) {
    
    /*
    * Declared scope functions
    */

    /*
    * Declared scope variables
    */

    /*
    * Functions usage
    */

    // Called when finish render
    $timeout(function () {
      console.log("Environment Configuration Controller as been loaded!");
    });

  });
