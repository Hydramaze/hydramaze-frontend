'use strict';

/**
 * @ngdoc overview
 * @name hydramaze.controller:DatasetsListCtrl
 * @description Datasets List Controller.
 */

angular.module('hydramaze')
  .controller('DatasetsListCtrl', function($scope, $timeout, stepThreeService, tutorialService) {

    /*
    * Declared scope functions
    */

    $scope.$toggleVisibility = function($event) {
      var bla = $($event.target);
      bla.closest('.flipper').toggleClass('card-hidden');
      bla.closest('.datasets').toggleClass('col-sm-6 col-lg-4');
    };
    
    $scope.$toggleSelected = function(e) {
      if (e.target.nodeName == "DIV") {
        $(e.currentTarget).toggleClass('selected');
      }
    };

    $scope.$init = function() {
      jQuery('#button-next').prop('disabled', true);
    };

    $scope.$helpModal = function(e) {
      e.preventDefault();
    };

    $scope.$datasetClick = function(datasetId) {
      stepThreeService.$addData("datasetId", datasetId);
    };

    $scope.$onSliderRangeChange = function() {
      stepThreeService.$addData("testSize", ($scope.testSize / 100));
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
          simpleDescription: value.simpleDescription,
          references: $scope.$prepareReferences(value.references)
        });
      });
      return datasetObj;
    };

    $scope.$prepareReferences = function(references) {
      var sites = [];
      var videos = [];

      $.each(references, function(key, value) {
        if (value.type == "site") {
          sites.push(value);
        } else if (value.type == "video") {
          value.url = value.url.replace('watch?v=', 'embed/');
          videos.push(value);
        }
      });

      return {
        sites: sites,
        videos: videos
      };

    };

    $scope.$setupPreviousChoices = function() {
      var previousData = stepThreeService.$getAllData();

      if (Object.keys(previousData).length > 0) {
        $("#dataset-" + previousData["datasetId"]).prop("checked", true);
        $scope.testSize = previousData["testSize"] * 100;
      }

      stepThreeService.$addData("testSize", ($scope.testSize / 100));
    };

    $scope.$hideLoading = function() {
      $timeout(function() {
        hideLoading(tutorialService.$getLoadingContainer()); 
      }, 1000);
    };

    /*
    * Declared scope variables
    */

    $scope.datasets = $scope.data;
    $scope.testSize = 50;
    
    /*
    * Functions usage
    */

    // Called when finish render
    $timeout(function () {
      $scope.$setupPreviousChoices();

      $scope.$hideLoading();
    });

  });
