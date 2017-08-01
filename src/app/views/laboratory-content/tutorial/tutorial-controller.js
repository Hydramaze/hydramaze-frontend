'use strict';

/**
 * @ngdoc overview
 * @name hydramaze.controller:TutorialCtrl
 * @description Tutorial Controller.
 */

angular.module('hydramaze')
  .controller('TutorialCtrl', function($scope) {
    
    $scope.tutorial = {};

    $scope.steps = [
      {
        templateUrl: '/app/views/laboratory-content/tutorial/step-one/step-one.html',
        title: 'Escolha um dataset',
        controller: 'StepOneCtrl'
      },
      {
        templateUrl: '/app/views/laboratory-content/tutorial/step-two/step-two.html',
        title: 'Selecione um algoritmo e configure-o',
        controller: 'StepTwoCtrl'
      },
      {
        templateUrl: '/app/views/laboratory-content/tutorial/step-three/step-three.html',
        title: 'Apresentação dos resultados',
        controller: 'StepThreeCtrl'
      }
    ];
  
    start();

    console.log("Tutorial Controller as been loaded!");
 
  });


function start() {
  console.log("Hello World!");
}
