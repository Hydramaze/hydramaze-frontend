'use strict';

/**
 * @ngdoc overview
 * @name hydramaze.controller:ExerciseBaseCtrl
 * @description Step One Controller.
 */

angular.module('hydramaze')
  .controller('ExerciseBaseCtrl', function($scope, $compile, $timeout, $http, $sce) {

    console.log("ExerciseBaseCtrl Controller as been loaded!");

    $scope.detailFrame = $sce.trustAsResourceUrl($scope.steps[$scope.$getActiveIndex()-1].exercise);

  });

function successIframeCall() {
  alert("It works!");
}

function resizeIframe(obj) {
  obj.style.height = obj.contentWindow.document.body.scrollHeight + 'px';
  $(obj).removeClass("ng-hide");
  $(obj).contents().find("head").append('<link rel="stylesheet" href="/tmp/assets/css/main.css" type="text/css" />');
}