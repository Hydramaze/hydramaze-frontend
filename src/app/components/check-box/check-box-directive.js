'use strict';

/**
 * @ngdoc function
 * @name hydramaze.directive
 * @description
 * # checkboxDirective
 */

angular.module('hydramaze')
  .directive('checkBoxDirective', function() {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: '/app/components/check-box/check-box.html',
      controller: 'CheckBoxCtrl'
    }
  });
