'use strict';

/**
 * @ngdoc overview
 * @name hydramaze.service:stepTwoService
 * @description Step Two Service
 */

angular.module('hydramaze')
  .service('stepTwoService', function() {

    var stepTwoMapData = {};

    var initData = function(starterMap) {
      stepTwoMapData = starterMap;
    };

    var addData = function(key, value) {
      stepTwoMapData[key] = value;
    };

    var getAllData = function(){
      return stepTwoMapData;
    };

    var empty = function() {
      stepTwoMapData = {};
    };

    return {
      initData: initData,
      addData: addData,
      getAllData: getAllData,
      empty: empty
    };

  });
