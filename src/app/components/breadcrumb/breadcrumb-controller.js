'use strict';

/**
 * @ngdoc overview
 * @name hydramaze.controller:breadcrumbCtrl
 * @description Breadcrumb Controller.
 */

angular.module('hydramaze')
  .controller('breadcrumbCtrl', function($scope, $attrs, $location) {

    console.log("Breadcrumb Controller as been loaded!");

    // Watch path url changes and update the breadcrumb value
    $scope.$watch(function(){
      return $location.path();
    }, function(value){
      $scope.pathArray = breadcrumbUpdate(value);
    });

  });

function breadcrumbUpdate(value) {
  var pathArray = value.split("/");
  return pathArray.splice(1, pathArray.length);
}

function toTitleCase(str) {
  return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}
