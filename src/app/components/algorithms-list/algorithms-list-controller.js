'use strict';

/**
 * @ngdoc overview
 * @name hydramaze.controller:algorithmsListCtrl
 * @description algorithms List Controller.
 */

angular.module('hydramaze')
  .controller('AlgorithmsListCtrl', function($scope, $attrs, $http, stepOneService) {

    console.log('Algorithms list has been loaded');

    $scope.algorithms = formatterData($scope.data);

    $scope.algorithmClick = function(algorithmId) {
      console.log("Selected id = " + algorithmId);
      stepOneService.addData("algorithmId", algorithmId);
    };

    $scope.toggleDown = true;
    $scope.toggleUp = true;

});

function formatterData(algorithms) {
  var algorithmsObj = {};
  angular.forEach(algorithms, function(value, key) {
    if (!algorithmsObj[value.learningType]) {
      algorithmsObj[value.learningType] = {};
    }
    if (!algorithmsObj[value.learningType][value.type]) {
      algorithmsObj[value.learningType][value.type] = [];
    }
    algorithmsObj[value.learningType][value.type].push({
      id: value.id, name: value.name,
      completeDescription: value.completeDescription,
      simpleDescription: value.simpleDescription
    });
  });
  return algorithmsObj;
};
