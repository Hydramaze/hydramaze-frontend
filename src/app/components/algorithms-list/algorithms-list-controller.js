'use strict';

/**
 * @ngdoc overview
 * @name hydramaze.controller:algorithmsListCtrl
 * @description algorithms List Controller.
 */

angular.module('hydramaze')
  .controller('AlgorithmsListCtrl', function($scope, $attrs, $http) {

    console.log('Algorithms list has been loaded');

    $scope.algorithms = formatterData($scope.data);

    $scope.helpModal = function(e) {
      e.preventDefault();
    };

    $scope.init = function() {
      jQuery('#button-next').prop('disabled', true);
    };

    $scope.algorithmClick = function() {
      $('#button-next').prop('disabled', false);
    };

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