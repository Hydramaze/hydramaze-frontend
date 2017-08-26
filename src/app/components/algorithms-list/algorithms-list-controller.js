'use strict';

/**
 * @ngdoc overview
 * @name hydramaze.controller:HomeCtrl
 * @description Home Controller.
 */

angular.module('hydramaze')
  .controller('algorithmsListCtrl', function($scope, $attrs, $http) {

    console.log('Algorithms list has been loaded');

    $http.get('http://localhost:8080/api/algorithm')
      .then(function(response) {
        $scope.algorithms = formatterData(response.data);
      });

    $scope.helpModal = function(e) {
      e.preventDefault();
    };

    $scope.init = function() {
      jQuery('#button-next').prop('disabled', true);
    };

    $scope.algorithmClick = function(value) {
      jQuery('#button-next').prop('disabled', false);
      localStorage.setItem("value", (value));
    };


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
});
