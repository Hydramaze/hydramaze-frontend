'use strict';

/**
 * @ngdoc overview
 * @name hydramaze.controller:DefaultTplCtrl
 * @description Default Template Controller.
 */

angular.module('hydramaze')
  .controller('DefaultTplCtrl', function($timeout) {
    
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
      console.log("DefaultTplCtrl as been loaded!");
    });

  });
