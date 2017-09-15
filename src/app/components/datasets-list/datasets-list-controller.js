'use strict';

/**
 * @ngdoc overview
 * @name hydramaze.controller:datasetsListCtrl
 * @description Datasets List Controller.
 */

angular.module('hydramaze')
  .controller('DatasetsListCtrl', function($scope, $attrs, $http, stepThreeService) {

    /*
    * Declared scope functions
    */
    $scope.toggleVisibility = false;
    $scope.toggleClass = false;

    $scope.$init = function() {
      jQuery('#button-next').prop('disabled', true);
    };

    $scope.helpModal = function(e) {
      e.preventDefault();
    };

    $scope.$datasetClick = function(datasetId) {
      console.log("Selected id = " + datasetId);
      stepThreeService.addData("datasetId", datasetId);
      stepThreeService.addData("test_size", 0.1);
    };

    $scope.$formatterData = function(dataset) {
      var datasetObj = {};
      angular.forEach(dataset, function(value, key) {
        if (!datasetObj[value.learningType]) {
          datasetObj[value.learningType] = {};
        }
        if (!datasetObj[value.learningType][value.type]) {
          datasetObj[value.learningType][value.type] = [];
        }
        datasetObj[value.learningType][value.type].push({
          id: value.id, name: value.name,
          completeDescription: value.completeDescription,
          simpleDescription: value.simpleDescription
        });
      });
      return datasetObj;
    };

    /*
    * Functions usage
    */

    $scope.datasets = $scope.data;

    console.log('Dataset list has been loaded');

});
