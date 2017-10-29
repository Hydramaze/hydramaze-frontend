'use strict';

/**
 * @ngdoc overview
 * @name hydramaze.controller:ContributorsCtrl
 * @description Contributors Controller.
 */

angular.module('hydramaze')
  .controller('ContributorsCtrl', function($scope, $timeout, $http, notify) {
    
    /*
    * Declared scope functions
    */

    $scope.$createScreenContributorsList = function(data) {
      $scope.contributors = data;
    };

    $scope.$getContributorsList = function() {      
      $http.get('http://localhost:8080/api/git/contributor')
        .then(function successCallback(response) {
          if (response.status == 200) {
            $scope.$createScreenContributorsList(response.data);
          }
          else {
            notify({
              message: "Contributors list not found.",
              classes: "alert-danger"
            });
          }
          $scope.$hideLoading();
        }, function errorCallback(responseError) {
          notify({
            message: "Sorry, an error has occurred. Try again!",
            classes: "alert-danger"
          });
          $scope.$hideLoading();
        });
    };

    $scope.$addControllerNameAsBodyClass = function () {
      $("body").addClass("contributors");
    };

    $scope.$removeControllerNameAsBodyClass = function () {
      $("body").removeClass("contributors");
    };

    $scope.$showLoading = function() {
      showLoading($("#contributor-page-content")); 
    };

    $scope.$hideLoading = function() {
      $timeout(function() {
        hideLoading($("#contributor-page-content")); 
      }, 1000);
    };

    /*
    * Declared scope variables
    */

    /*
    * Functions usage
    */

    $scope.$addControllerNameAsBodyClass();
    $scope.$showLoading();

    // Called when finish render
    $timeout(function () {
      $scope.$getContributorsList();

      console.log("Contributors Controller as been loaded!");
    });

    $scope.$on("$destroy", function() {
      $scope.$removeControllerNameAsBodyClass();
    });

  });
