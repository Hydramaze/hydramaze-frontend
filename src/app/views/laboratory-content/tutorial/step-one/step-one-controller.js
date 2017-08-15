'use strict';

/**
 * @ngdoc overview
 * @name hydramaze.controller:StepOneCtrl
 * @description Step One Controller.
 */

angular.module('hydramaze')
  .controller('StepOneCtrl', function($scope, $compile, $timeout, $http) {

    $scope.tutorial.StepOneCtrl = getStepOneConfiguration();
    /*
    if ($scope.tutorial.StepOneCtrl) {
      console.log($scope.tutorial.StepOneCtrl);
    } else {
      console.log("Sem dado.");
    } */

    $timeout(function() {

      angular.forEach($scope.tutorial.StepOneCtrl, function (val, key) {

        var newBlock = document.createElement("div");
        newBlock.setAttribute("id", "component-" + key);
        newBlock.setAttribute("class", "block");

        var content = document.createElement(val.component);
        content.setAttribute("data", val.data);
        newBlock.append(content);

        $('#step-one-content').append(newBlock);

      });

      $compile($('#step-one-content').contents())($scope);
      console.log('Scope: ',$scope);

    });

    console.log("StepOneCtrl Controller as been loaded!");

  });

function getStepOneConfiguration() {

  var screenConfiguration = [
      {
        component: 'algorithms-list-directive',
      }
  ];

  return screenConfiguration;
}
