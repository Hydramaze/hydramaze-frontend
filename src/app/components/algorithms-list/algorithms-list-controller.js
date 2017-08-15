'use strict';

/**
 * @ngdoc overview
 * @name hydramaze.controller:HomeCtrl
 * @description Home Controller.
 */

angular.module('hydramaze')
  .controller('algorithmsListCtrl', function($scope, $attrs) {

    console.log('Algorithms list has been loaded');

    $scope.fields = {
        "Supervisionado": [
          {
            name: "Regressão",
            algorithms: ["K-means", "SOM"]
          },
          {
            name: "Classificação",
            algorithms: ["K-means2", "SOM2"]
          }
        ],
        "Não Supervisionado": [
          {
            name: "Associação",
            algorithms: ["K-means3", "SOM3"]
          },
          {
            name: "Agrupamento",
            algorithms: ["K-means4", "SOM4"]
          }
        ]
      };
  });
