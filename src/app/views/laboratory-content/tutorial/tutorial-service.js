'use strict';

/**
 * @ngdoc overview
 * @name hydramaze.service:tutorialService
 * @description Tutorial Service
 */

angular.module('hydramaze')
  .service('tutorialService', function() {

  var tutorialStepOneData = undefined;
  var tutorialStepTwoData = undefined;
  var tutorialStepThreeData = undefined;
  var tutorialStepFourData = undefined;

  // Step one
  var setStepOneData = function(data) {
      tutorialStepOneData = angular.copy(data);
  };

  var getStepOneData = function() {
      return tutorialStepOneData;
  };

  // Step two
  var setStepTwoData = function(data) {
      tutorialStepTwoData = angular.copy(data);
  };

  var getStepTwoData = function() {
      return tutorialStepTwoData;
  };

  // Step three
  var setStepThreeData = function(data) {
      tutorialStepThreeData = angular.copy(data);
  };

  var getStepThreeData = function() {
      return tutorialStepThreeData;
  };

  // Step four
  var setStepFourData = function(data) {
      tutorialStepFourData = angular.copy(data);
  };

  var getStepFourData = function() {
      return tutorialStepFourData;
  };

  var emptyAllData = function() {
    tutorialStepOneData = undefined;
    tutorialStepTwoData = undefined;
    tutorialStepThreeData = undefined;
    tutorialStepFourData = undefined;
  };

  var hasDataInStep = function(step) {
    var hasData;

    switch(step) {
      case 0:
        if (tutorialStepOneData != undefined) {
          hasData = true;
        }
        break;
      case 1:
        if (tutorialStepTwoData != undefined) {
          hasData = true;
        }
        break;
      case 2:
        if (tutorialStepThreeData != undefined) {
          hasData = true;
        }
        break;
      case 3:
        if (tutorialStepFourData != undefined) {
          hasData = true;
        }
        break;
      default:
        hasData = false;
    }

    return hasData;
  };

  return {
    setStepOneData: setStepOneData,
    getStepOneData: getStepOneData,

    setStepTwoData: setStepTwoData,
    getStepTwoData: getStepTwoData,

    setStepThreeData: setStepThreeData,
    getStepThreeData: getStepThreeData,

    setStepFourData: setStepFourData,
    getStepFourData: getStepFourData,

    emptyAllData: emptyAllData,
    hasDataInStep: hasDataInStep
  };

});