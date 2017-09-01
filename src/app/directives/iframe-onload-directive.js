'use strict';

/**
 * @ngdoc function
 * @name hydramaze.directive
 * @description
 * # Trigger an event when angular finish render objects
 * Directives of hydramaze
 */

angular.module('hydramaze').directive('iframeOnload', function ($timeout) {
    return {
        restrict: 'A',
        scope: {
            callBack: '&iframeOnload'
        },
        link: function(scope, element, attrs){
            element.on('load', function(){
                return scope.callBack();
            })
        }
    }
});
