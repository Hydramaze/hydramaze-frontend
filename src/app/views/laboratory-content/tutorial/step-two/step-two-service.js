'use strict';

/**
 * @ngdoc overview
 * @name hydramaze.service:stepTwoService
 * @description Step Two Service
 */

angular.module('hydramaze')
  .service('stepTwoService', function() {

    var stepTwoMapData = [];

    var initData = function(starterMap) {
      stepTwoMapData = starterMap;
    };

    var addData = function(key, value) {
      stepTwoMapData.push({"parameterId": key, "value": value});
    };

    var getAllData = function(){
      return stepTwoMapData;
    };

    return {
      initData: initData,
      addData: addData,
      getAllData: getAllData
    };

  });
