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
      tutorialStepOneData = data;
  };

  var getStepOneData = function() {
      return tutorialStepOneData;
  };

  // Step two
  var setStepTwoData = function(data) {
      tutorialStepTwoData = data;
  };

  var getStepTwoData = function() {
      return tutorialStepTwoData;
  };

  // Step three
  var setStepThreeData = function(data) {
      tutorialStepThreeData = data;
  };

  var getStepThreeData = function() {
      return tutorialStepThreeData;
  };

  // Step four
  var setStepFourData = function(data) {
      tutorialStepFourData = data;
  };

  var getStepFourData = function() {
      return tutorialStepFourData;
  };

  return {
    setStepOneData: setStepOneData,
    getStepOneData: getStepOneData,

    setStepTwoData: setStepTwoData,
    getStepTwoData: getStepTwoData,

    setStepThreeData: setStepThreeData,
    getStepThreeData: getStepThreeData,

    setStepFourData: setStepFourData,
    getStepFourData: getStepFourData
  };

});