'use strict';

/**
 * @ngdoc overview
 * @name hydramaze.controller:HomeCtrl
 * @description Home Controller.
 */

angular.module('hydramaze')
  .controller('algorithmsListCtrl', function($scope, $attrs, $http) {

    console.log('Algorithms list has been loaded');

    // $scope.fields = {
    //     "Supervisionado": [
    //       {
    //         name: "Regressão",
    //         algorithms: ["K-means", "SOM"]
    //       },
    //       {
    //         name: "Classificação",
    //         algorithms: ["K-means2", "SOM2"]
    //       }
    //     ],
    //     "Não Supervisionado": [
    //       {
    //         name: "Associação",
    //         algorithms: ["K-means3", "SOM3"]
    //       },
    //       {
    //         name: "Agrupamento",
    //         algorithms: ["K-means4", "SOM4"]
    //       }
    //     ]
    //   };
    $http.get('http://localhost:8080/api/algorithm')
      .then(function(response) {
        $scope.algorithms = response.data;
        $scope.learningTypes = categories($scope.algorithms);
        $scope.types = algorithmTypes($scope.algorithms);
        // algorithmsStructure($scope.algorithms);
        console.log(response.data);
        // formatData(response.data);
      });

    function categories(algorithms) {
      var learningTypes = {};

      // var dict = {}; dict.key1 = "value1"; dict.key2 = "value2";
      angular.forEach(algorithms, function(value, key) {
        if (!learningTypes.hasOwnProperty(value.learningType)) {
          // learningTypes.push(value);
          // learningTypes.push({ key: value.learningType, value: ["b"] });
          learningTypes.value.learningType = value;
        }
      });
      console.log("learningTypes: ",learningTypes);
      return learningTypes;
    };

    function algorithmTypes(algorithms) {
      var types = [];
      angular.forEach(algorithms, function(value, key) {
        if ($.inArray(value.type, types) == -1) {
          types.push(value.type);
        }
      });
      console.log("types: ",types);
      return types;
    };

    // function algorithmsStructure(algorithms) {
    //   var algorithm = [];
    //   var json = [];
    //   // angular.forEach($scope.types, function(typeName, typeKey) {
    //   //   algorithm.push(typeName);
    //   // });
    //   angular.forEach(algorithms, function(value, key) {
    //     algorithm[value.type] = value;
    //   });
    //   console.log("Churros: ", algorithm);
    // }
    //
    // function formatData(algorithms) {
    //   angular.forEach(algorithms, function(value, key) {
    //
    //   });
    // }
    //
    // function
  });
