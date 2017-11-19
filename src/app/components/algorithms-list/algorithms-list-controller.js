'use strict';

/**
 * @ngdoc overview
 * @name hydramaze.controller:AlgorithmsListCtrl
 * @description Algorithms List Controller.
 */

angular.module('hydramaze')
  .controller('AlgorithmsListCtrl', function($scope, $timeout, stepOneService, tutorialService) {

    /*
    * Declared scope functions
    */

    $scope.$formatterData = function(algorithms) {
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
          simpleDescription: value.simpleDescription,
          references: $scope.$prepareReferences(value.references)
        });
      });
      return algorithmsObj;
    }

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

    $scope.$algorithmClick = function(algorithmId, algorithmName) {
      stepOneService.$addData("algorithmId", algorithmId);
      stepOneService.$addData("algorithmName", algorithmName);
    };

    $scope.$setupPreviousChoices = function() {
      var previousData = stepOneService.$getAllData();

      if (Object.keys(previousData).length > 0) {
        $("#algorithm-" + previousData["algorithmId"]).prop("checked", true);
      }
    };

    $scope.$hideLoading = function() {
      $timeout(function() {
        hideLoading(tutorialService.$getLoadingContainer()); 
      }, 1000);
    };

    /*
    * Declared scope variables
    */

    $scope.toggleDown = true;
    $scope.toggleUp = true;
    $scope.algorithms = $scope.$formatterData($scope.data);

    /*
    * Functions usage
    */

    // Called when finish render
    $timeout(function() {
      $scope.$setupPreviousChoices();

      $scope.$hideLoading();

      console.log('Algorithms list has been loaded');
    });

  })
  .filter('trusted', ['$sce', function ($sce) {
    return function(url) {
      return $sce.trustAsResourceUrl(url);
    };
  }]);
