'use strict';

/**
 * @ngdoc overview
 * @name hydramaze.controller:DownloadButtonCtrl
 * @description DownloadButton Controller.
 */

angular.module('hydramaze')
  .controller('DownloadButtonCtrl', function($scope) {

  })
  .filter('trusted', ['$sce', function ($sce) {
    return function(url) {
      return $sce.trustAsResourceUrl(url);
    };
  }]);

