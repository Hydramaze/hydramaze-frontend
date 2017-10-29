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

    $scope.$on('$destroy', function() {
      window.onresize = null;
    });

  });

function successIframeCall() {
  alert("It works!");
}

function iframeInitializer(obj) {
  $(obj).contents().find("head").append('<link rel="stylesheet" href="/tmp/assets/css/main.css" type="text/css" />');
  
  $(obj).ready(function() {
    resizeIframe(obj);
  });

  window.onresize = function(event) {
    resizeIframe(obj);
  };
}

function resizeIframe(obj) {
  obj.style.height = obj.contentWindow.document.body.scrollHeight + 'px';
  showIframe(obj);
}

function showIframe(obj) {
  $(obj).removeClass("ng-hide");
}