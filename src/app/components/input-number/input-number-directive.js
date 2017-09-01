'use strict';

/**
 * @ngdoc function
 * @name hydramaze.directive
 * @description
 * # inputNumberDirective
 */

angular.module('hydramaze')
  .directive('inputNumberDirective', function() {
  	return {
  	  restrict: 'E',
      replace: true,
      templateUrl: '/app/components/input-number/input-number.html',
      controller: 'InputNumberCtrl'
  	}
  });