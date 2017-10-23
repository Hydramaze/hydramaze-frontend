'use strict';

/**
 * @ngdoc overview
 * @name hydramaze.controller:ParametersListCtrl
 * @description Parameters List Controller.
 */

angular.module('hydramaze')
  .controller('ParametersListCtrl', function($scope, $compile, $timeout, stepTwoService) {

    /*
    * Declared scope functions
    */

    $scope.$createScreenAlgorithmsParameters = function(data) {
      var previousData = stepTwoService.$getAllData();

      var components = document.createElement("div");
      var components2 = document.createElement("div");
      components.setAttribute("class", "components");
      components2.setAttribute("class", "components");

      angular.forEach(data, function (val, key) {

        if (Object.keys(previousData).length > 0) {
          val.previousValue = previousData[val.id];
        }

        var newBlock = document.createElement("div");
        newBlock.setAttribute("id", "algorithm-parameter-" + key);
        newBlock.setAttribute("class", "algorithm-parameter block col-xs-12 col-sm-6 col-md-4 container-fluid ");

        var directiveComponent = document.createElement(val.component + "-directive");

        if (val.component != 'check-box') {
          var directiveName = document.createElement("h3");
          directiveName.innerHTML = val.name;
          newBlock.append(directiveName);
          newBlock.append(directiveComponent);

          var newScope = $scope.$new(true);
          newScope.data = val;

          var el = $compile(newBlock)(newScope);

          components.append(newBlock);
        }
        else {
          newBlock.append(directiveComponent);

          var newScope = $scope.$new(true);
          newScope.data = val;

          var el = $compile(newBlock)(newScope);

          components2.append(newBlock);
        }
        $('#parameters-list').append(components);
        $('#parameters-list').append(components2);

      });
    }

    /*
    * Declared scope variables
    */

    /*
    * Functions usage
    */

    // Called when finish render
    $timeout(function () {
      $scope.$createScreenAlgorithmsParameters($scope.data);

      console.log('Parameters list has been loaded');
    });

  });
