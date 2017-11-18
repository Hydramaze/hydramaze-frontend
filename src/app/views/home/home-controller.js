'use strict';

/**
 * @ngdoc overview
 * @name hydramaze.controller:HomeCtrl
 * @description Home Controller.
 */

angular.module('hydramaze')
  .controller('HomeCtrl', function($scope, $timeout) {
    
    /*
    * Declared scope functions
    */

    $scope.$scaleVideoContainer = function() {
      var width = $(window).width();
      var height = $(window).height();
      var unitWidth = parseInt(width) + 'px';
      var unitHeight = parseInt(height) + 'px';
      $('.homepage-hero-module').css('width', unitWidth);
      $('.homepage-hero-module').css('height', unitHeight);
    }

    $scope.$initBannerVideoSize = function(element){
      $(element).each(function(){
          $(this).data('height', $(this).height());
          $(this).data('width', $(this).width());
      });

      $scope.$scaleBannerVideoSize(element);
    }

    $scope.$scaleBannerVideoSize = function(element) {
      var windowWidth = $(window).width(),
      windowHeight = $(window).height(),
      videoWidth,
      videoHeight;

      $(element).each(function(){
          var videoAspectRatio = 9/16;

          if ((windowWidth * videoAspectRatio) > windowHeight) {
            $(this).width(windowWidth);
            $(this).height("auto");
          } else if ((windowWidth * videoAspectRatio) < windowHeight) {
            $(this).width("auto");
            $(this).height(windowHeight);
          } else {
            $(this).width(windowWidth);
            $(this).height(windowHeight);
          }

          $('.homepage-hero-module .video-container video').addClass('fadeIn animated');
      });
    }

    $scope.$addControllerNameAsBodyClass = function () {
      $("body").addClass("home");
    }

    $scope.$removeControllerNameAsBodyClass = function () {
      $("body").removeClass("home");
    }

    /*
    * Declared scope variables
    */

    /*
    * Functions usage
    */

    $scope.$addControllerNameAsBodyClass();

    // Called when finish render
    $timeout(function () {  
      $scope.$scaleVideoContainer();

      $scope.$initBannerVideoSize('.video-container .poster img');
      $scope.$initBannerVideoSize('.video-container video');

      $(window).on('resize', function() {
        $timeout(function() {
          console.log("funcionou");
          $scope.$scaleVideoContainer();
          $scope.$scaleBannerVideoSize('.video-container .poster img');
          $scope.$scaleBannerVideoSize('.video-container video');
        });
      });

      console.log("Home Controller as been loaded!");
    });

    $scope.$on("$destroy", function() {
      $scope.$removeControllerNameAsBodyClass();
    });

  });
