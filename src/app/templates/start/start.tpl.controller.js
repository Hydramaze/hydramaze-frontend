'use strict';

/**
 * @ngdoc overview
 * @name hydramaze.controller:StartTplCtrl
 * @description Start Template Controller.
 */

angular.module('hydramaze')
  .controller('StartTplCtrl', function($timeout) {
    
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
      console.log("StartTplCtrl as been loaded!");
    });

  });
