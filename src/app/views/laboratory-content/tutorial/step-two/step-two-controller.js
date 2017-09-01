'use strict';

/**
 * @ngdoc overview
 * @name hydramaze.controller:StepTwoCtrl
 * @description Step Two Controller.
 */

angular.module('hydramaze')
  .controller('StepTwoCtrl', function($scope, $http, $timeout, $compile) {
    $timeout(function() {
      getParametersByAlgorithmID($http, $scope, $compile, '4');
    });
/*
    $scope.init = function() {
      $scope.algorithmId = localStorage.getItem("value");
    };
    $timeout(function() {
      $http.get("http://localhost:8080/api/parameter/getByAlgorithmId?id=" + $scope.algorithmId).
      then(function(response) {
        $scope.algorithm = response.data;
        $scope.tutorial.StepTwoCtrl = defineParameters($scope.algorithm);

        angular.forEach($scope.tutorial.StepTwoCtrl, function (val, key) {

          var newBlock = document.createElement("div");
          newBlock.setAttribute("id", "component-" + key);
          newBlock.setAttribute("class", "block container-fluid");

          var content = document.createElement(val.component);
          content.setAttribute("data", val.data);
          newBlock.append(content);

          $('#step-two-content').append(newBlock);

        });

        $compile($('#step-two-content').contents())($scope);
      });
    });*/
    console.log("StepTwoCtrl Controller as been loaded!");

  });

/*
function defineParameters(algorithm) {
  var parameters = [];
  $.each(algorithm, function(key, value) {
    parameters.push(value.component);
  });
  return getStepTwoConfiguration(parameters);
}

function getStepTwoConfiguration(parameters) {
  var screenConfiguration = [];
  $.each(parameters, function(key, value) {
    screenConfiguration.push(value + "-directive");
  });
  return screenConfiguration;
}
*/

function getParametersByAlgorithmID($http, $scope, $compile, idValue) {
  $http.get('http://localhost:8080/api/parameter/getByAlgorithmId?id=' + idValue)
    .then(function(response) {
      console.log(response);
      createScreenAlgorithmsParameters($scope, response.data, $compile);
    });
}

function createScreenAlgorithmsParameters($scope, data, $compile) {

  angular.forEach(data, function (val, key) {
    
    var newBlock = document.createElement("div");
    newBlock.setAttribute("id", "algorithm-parameter-" + key);
    newBlock.setAttribute("class", "block col-xs-12 col-sm-6 col-md-4 container-fluid");

    var directiveComponent = document.createElement(val.component + "-directive");
    newBlock.append(directiveComponent);

    var newScope = $scope.$new(true);
    newScope.data = val;
    
    var el = $compile(newBlock)(newScope);

    $('#step-two-content').append(newBlock);
  });

}
