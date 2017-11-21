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

    $scope.$getUpdatedPathArray = function(value, statesList) {
      var breadcrumbValue = "";
      var pathArray = value.split("/");

      $.each(pathArray, function(key, value) {

        if (value == "") {
          value = "home";         
        }

        var strToCompare = "/" + value;

        $.each(statesList, function(key, value) {
          if (value.url == strToCompare) {
            breadcrumbValue = value.breadcrumbName;
            return 0;
          }
        });

        if (breadcrumbValue != undefined && breadcrumbValue != "") {
          pathArray[key] = breadcrumbValue;
        }

      });

      return pathArray;
    }

    $scope.$breadcrumbUpdate = function(value, statesList) {
      $timeout(function () {
        $scope.pathArray = $scope.$getUpdatedPathArray(value, statesList);
      });
    }

    /*
    * Declared scope variables
    */

    // Watch path url changes and update the breadcrumb value
    $scope.$watch(function(){
      return $location.path();
    }, function(value){
      $scope.$breadcrumbUpdate(value, $state.get());
    });

    /*
    * Functions usage
    */

    // Called when finish render
    $timeout(function () {
      
    });
    
  });
