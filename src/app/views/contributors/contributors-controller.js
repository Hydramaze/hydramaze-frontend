'use strict';

/**
 * @ngdoc overview
 * @name hydramaze.controller:ContributorsCtrl
 * @description Contributors Controller.
 */

angular.module('hydramaze')
  .controller('ContributorsCtrl', function($timeout) {
    
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
      console.log("Contributors Controller as been loaded!");
    });

  });
