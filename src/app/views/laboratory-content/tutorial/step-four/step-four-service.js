'use strict';

/**
 * @ngdoc overview
 * @name hydramaze.service:stepFourService
 * @description Step Four Service
 */

angular.module('hydramaze')
  .service('stepFourService', function() {

    var stepFourMapData = {};

    var initData = function(starterMap) {
      stepFourMapData = starterMap;
    };

    var addData = function(key, value) {
      stepFourMapData[key] = value;
    };

    var getAllData = function(){
      return stepFourMapData;
    };

    var empty = function() {
      stepFourMapData = {};
    };

    return {
      $initData: initData,
      $addData: addData,
      $getAllData: getAllData,
      $empty: empty
    };

  });
