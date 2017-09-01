'use strict';

/**
 * @ngdoc function
 * @name hydramaze.directive
 * @description
 * # comboBoxDirective
 */

angular.module('hydramaze')
  .directive('comboBoxDirective', function() {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: '/app/components/combo-box/combo-box.html',
      controller: 'ComboBoxCtrl'
    }
  });
