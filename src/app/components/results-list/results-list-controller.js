'use strict';

/**
 * @ngdoc overview
 * @name hydramaze.controller:restultsListCtrl
 * @description restults List Controller.
 */

angular.module('hydramaze')
  .controller('ResultsListCtrl', function($scope, $attrs, $compile, $timeout, $http, stepFourService) {

    $scope.$createScreenResults = function(data) {
      var previousData = stepFourService.getAllData();

      var components = document.createElement("div");
      components.setAttribute("class", "components");

      angular.forEach(data, function (val, key) {
        var newBlock = document.createElement("div");
        newBlock.setAttribute("id", "result-" + key);
        newBlock.setAttribute("class", "result block container-fluid");

        var directiveComponent = document.createElement(key + "-directive");

        newBlock.append(directiveComponent);

        var newScope = $scope.$new(true);
        newScope.data = val;

        var el = $compile(newBlock)(newScope);

        components.append(newBlock);
        
        $('#results-list').append(components);
      });
    }

    /* Called when finish render */
    $timeout(function () {
      $scope.$createScreenResults($scope.data);
    });

    console.log('Results list has been loaded');

});
