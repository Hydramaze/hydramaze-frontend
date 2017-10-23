'use strict';

/**
 * @ngdoc overview
 * @name hydramaze.service:stepThreeService
 * @description Step Three Service
 */

angular.module('hydramaze')
  .service('stepThreeService', function() {

    var stepThreeMapData = {};

    var initData = function(starterMap) {
      stepThreeMapData = starterMap;
    };

    var addData = function(key, value) {
      stepThreeMapData[key] = value;
    };

    var getAllData = function(){
      return stepThreeMapData;
    };

    var empty = function() {
      stepThreeMapData = {};
    };

    return {
      $initData: initData,
      $addData: addData,
      $getAllData: getAllData,
      $empty: empty
    };

  });
