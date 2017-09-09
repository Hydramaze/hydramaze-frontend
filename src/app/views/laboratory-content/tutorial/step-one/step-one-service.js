'use strict';

/**
 * @ngdoc overview
 * @name hydramaze.service:stepOneService
 * @description Step One Service
 */

angular.module('hydramaze')
  .service('stepOneService', function() {

    var stepOneMapData = [];

    var initData = function(starterMap) {
      stepOneMapData = starterMap;
    };

    var addData = function(key, value) {
      stepOneMapData.push({"parameterId": key, "value": value});
    };

    var getAllData = function(){
      return stepOneMapData;
    };

    return {
      initData: initData,
      addData: addData,
      getAllData: getAllData
    };

  });
