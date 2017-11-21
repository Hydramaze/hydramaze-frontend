'use strict';

/**
 * @ngdoc overview
 * @name hydramaze.controller:ExerciseBaseCtrl
 * @description Step One Controller.
 */

angular.module('hydramaze')
  .controller('ExerciseBaseCtrl', function($scope, $compile, $timeout, $http, $sce) {

    $scope.detailFrame = $sce.trustAsHtml($scope.steps[$scope.$getActiveIndex()-1].exercise);

    // Called when finish render
    $timeout(function () {
      
    });

    $scope.$on('$destroy', function() {
      window.onresize = null;
    });

  });

function successIframeCall() {
  alert("It works!");
}

function iframeInitializer(obj) {
  resizeIframe(obj);

  $(obj).contents().find("head").append('<link rel="stylesheet" href="/tmp/assets/css/main.css" type="text/css" />');
  
  $(obj).ready(function() {
    setTimeout(function() {
      hideLoading($("#exercises #step-content-container"));
      resizeIframe(obj);
    }, 1000);
  });

  window.onresize = function(event) {
    resizeIframe(obj);
  };
}

function resizeIframe(obj) {
  $(obj).height($(obj).contents().find('body').prop('scrollHeight'));
  showIframe(obj);
}


function showIframe(obj) {
  $(obj).removeClass("ng-hide");
}
