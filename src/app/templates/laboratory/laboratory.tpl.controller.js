'use strict';

/**
 * @ngdoc overview
 * @name hydramaze.controller:LaboratoryTplCtrl
 * @description Laboratory Template Controller.
 */

angular.module('hydramaze')
  .controller('LaboratoryTplCtrl', function($timeout) {

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
      console.log("LaboratoryTplCtrl as been loaded!");
    });

  });
