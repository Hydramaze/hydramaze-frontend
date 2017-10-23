'use strict';

/**
 * @ngdoc overview
 * @name hydramaze.controller:BreadcrumbCtrl
 * @description Breadcrumb Controller.
 */

angular.module('hydramaze')
  .controller('BreadcrumbCtrl', function($scope, $timeout, $location, $state) {

    /*
    * Declared scope functions
    */

    $scope.$breadcrumbUpdate = function(value, statesList) {
      var breadcrumbValue = "";
      var pathArray = value.split("/");

      pathArray = pathArray.splice(1, pathArray.length);

      $.each(pathArray, function(key, value) {
        var strToCompare = "/" + value;

        $.each(statesList, function(key, value) {
          if (value.url == strToCompare) {
            breadcrumbValue = value.breadcrumbName;
            return 0;
          }
        });

        if (breadcrumbValue != undefined && breadcrumbValue != "") {
          pathArray[key] = breadcrumbValue;
          console.log
        }

      });

      return pathArray;
    }

    /*
    * Declared scope variables
    */

    // Watch path url changes and update the breadcrumb value
    $scope.$watch(function(){
      return $location.path();
    }, function(value){
      $scope.pathArray = $scope.$breadcrumbUpdate(value, $state.get());
    });

    /*
    * Functions usage
    */

    $timeout(function () {
      console.log("Breadcrumb Controller as been loaded!");
    });
    
  });
