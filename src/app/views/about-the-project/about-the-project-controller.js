'use strict';

/**
 * @ngdoc overview
 * @name hydramaze.controller:AboutTheProjectCtrl
 * @description About The Project Controller.
 */

angular.module('hydramaze')
  .controller('AboutTheProjectCtrl', function($timeout) {
    
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
      console.log("About The Project Controller as been loaded!");
    });

  });
