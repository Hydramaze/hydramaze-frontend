'use strict';

/**
 * @ngdoc overview
 * @name hydramaze.controller:DownloadButtonCtrl
 * @description DownloadButton Controller.
 */

angular.module('hydramaze')
  .controller('DownloadButtonCtrl', function($scope) {
    console.log('Download: ',$scope.downloadUrl);
  })
  .config(['$compileProvider', function($compileProvider) {
    $compileProvider.aHrefSanitizationWhitelist(/^\s*(http?|file|tel):/);
  }]);
