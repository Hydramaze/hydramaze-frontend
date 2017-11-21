'use strict';

/**
 * @ngdoc function
 * @name hydramaze.directive
 * @description
 * # downloadButtonDirective
 */

angular.module('hydramaze')
  .directive('downloadButtonDirective', function() {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: '/app/components/download-button/download-button.html',
      controller: 'DownloadButtonCtrl'
    }
  });
