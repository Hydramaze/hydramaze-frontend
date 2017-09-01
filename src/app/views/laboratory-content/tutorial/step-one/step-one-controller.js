'use strict';

/**
 * @ngdoc overview
 * @name hydramaze.controller:StepOneCtrl
 * @description Step One Controller.
 */

angular.module('hydramaze')
  .controller('StepOneCtrl', function($scope, $compile, $timeout, $http) {

    console.log("StepOneCtrl Controller as been loaded!");

    $timeout(function() {
      getAlgorithmsList($http, $scope, $compile);
    });

  });

function getAlgorithmsList($http, $scope, $compile) {
  $http.get('http://localhost:8080/api/algorithm')
    .then(function(response) {
      createScreenAlgorithmsList($scope, response.data, $compile);
    });
}

function createScreenAlgorithmsList($scope, data, $compile) {
  var component = 'algorithms-list-directive';

  var newBlock = document.createElement("div");
  newBlock.setAttribute("id", "algorithms-list-directive");
  newBlock.setAttribute("class", "block container-fluid");

  var content = document.createElement(component);
  newBlock.append(content);

  $('#step-one-content').append(newBlock);

  var newScope = $scope.$new(true);
  newScope.data = data;

  $compile($('#step-one-content').contents())(newScope);
}
