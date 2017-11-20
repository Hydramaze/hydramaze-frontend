'use strict';

/**
 * @ngdoc overview
 * @name hydramaze.service:exercisesService
 * @description Step One Service
 */

angular.module('hydramaze')
  .service('exercisesService', function() {

    var loadingContainer = undefined;

    var exercisesMapData = {};

    // Loading
    var setLoadingContainer = function(container) {
      loadingContainer = container;
    };

    var getLoadingContainer = function() {
      return loadingContainer;
    }

    var initData = function(starterMap) {
      exercisesMapData = starterMap;
    };

    var addData = function(key, value) {
      exercisesMapData[key] = value;
    };

    var getAllData = function(){
      return exercisesMapData;
    };

    var empty = function() {
      exercisesMapData = {};
    };

    return {
      $setLoadingContainer: setLoadingContainer,
      $getLoadingContainer: getLoadingContainer,
      $initData: initData,
      $addData: addData,
      $getAllData: getAllData,
      $empty: empty
    };

  });
