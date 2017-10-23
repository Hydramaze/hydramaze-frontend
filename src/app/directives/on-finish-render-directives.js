'use strict';

/**
 * @ngdoc function
 * @name hydramaze.directive
 * @description
 * # Trigger an event when angular finish render objects
 * Directives of hydramaze
 */

angular.module('hydramaze').directive('onFinishRender', function ($timeout) {
    return {
        restrict: 'A',
        link: function (scope, element, attr) {
            if (scope.$last === true) {
                $timeout(function () {
                    scope.$emit(attr.onFinishRender);
                });
            }
        }
    }
});
