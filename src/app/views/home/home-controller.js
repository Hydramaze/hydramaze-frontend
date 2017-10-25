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
      var height = $(window).height() + 5;
      var unitHeight = parseInt(height) + 'px';
      $('.homepage-hero-module').css('height',unitHeight);
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
      windowHeight = $(window).height() + 5,
      videoWidth,
      videoHeight;

      $(element).each(function(){
          var videoAspectRatio = $(this).data('height') / $(this).data('width');

          $(this).width(windowWidth);

          if(windowWidth < 1000){
              videoHeight = windowHeight;
              videoWidth = videoHeight / videoAspectRatio;
              $(this).css({'margin-top' : 0, 'margin-left' : -(videoWidth - windowWidth) / 2 + 'px'});

              $(this).width(videoWidth).height(videoHeight);
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
      $scope.$initBannerVideoSize('.video-container .filter');
      $scope.$initBannerVideoSize('.video-container video');

      $(window).on('resize', function() {
        $scope.$scaleVideoContainer();
        $scope.$scaleBannerVideoSize('.video-container .poster img');
        $scope.$scaleBannerVideoSize('.video-container .filter');
        $scope.$scaleBannerVideoSize('.video-container video');
      });

      console.log("Home Controller as been loaded!");
    });

    $scope.$on("$destroy", function() {
      $scope.$removeControllerNameAsBodyClass();
    });

  });
