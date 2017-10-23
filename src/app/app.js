'use strict';

/**
 * @ngdoc overview
 * @name hydramaze
 * @description
 *
 * Main module of the application.
 */

var app = angular.module('hydramaze', ['ngRoute', 'ui.router', 'chart.js', 'multiStepForm', 'cgNotify']);

app.config(['$stateProvider', 
            '$urlRouterProvider', 
            '$locationProvider', 
            function($stateProvider, $urlRouterProvider, $locationProvider) {

  $locationProvider.hashPrefix('');

  $urlRouterProvider.when('', '/home');
  $urlRouterProvider.otherwise('/404');

  $stateProvider
  .state('start', {
      abstract: true,
      url: '',
      templateUrl: 'app/templates/start/start.tpl.html',
      controller: 'StartTplCtrl'
  })
  .state('start.home', {
      url: '/home',
      views: {
        'startcontent': {
          templateUrl: 'app/views/home/home.html',
          controller: 'HomeCtrl'
        }
      }
  })
  .state('default', {
      abstract: true,
      url: '',
      templateUrl: 'app/templates/default/default.tpl.html',
      controller: 'DefaultTplCtrl'
  })
  .state('default.404', {
      url: '/404',
      views: {
        'defaultcontent': {
          templateUrl: 'app/views/404/404.html',
          controller: '404Ctrl'
        }
      }
  })
  .state('laboratory', {
      abstract: true,
      url: '/lab',
      templateUrl: 'app/templates/laboratory/laboratory.tpl.html',
      controller: 'LaboratoryTplCtrl',
      breadcrumbName: 'Laboratory'
  })
  .state('laboratory.tutorial', {
      url: '/tutorial',
      views: {
        'laboratorycontent': {
          templateUrl: 'app/views/laboratory-content/tutorial/tutorial.html',
          controller: 'TutorialCtrl'
        }
      },
      breadcrumbName: 'Tutorial — Machine Learning'
  })
  .state('laboratory.exercises', {
      url: '/exercises',
      views: {
        'laboratorycontent': {
          templateUrl: 'app/views/laboratory-content/exercises/exercises.html',
          controller: 'ExercisesCtrl'
        }
      },
      breadcrumbName: 'Exercises — Machine Learning'
  });

}]);

function showLoading(loadingContainer) {
  loadingContainer.append('<div id="loading-container"><div class="center-vertical-horizontal"><i class="fa fa-spinner fa-pulse fa-5x fa-fw"></i><span class="sr-only">Loading...</span></div></div>');
  loadingContainer.addClass("disable-scroll");
  $("#loading-container").fadeIn("slow");

}

function hideLoading(loadingContainer) {
  $("#loading-container").fadeOut( "slow", function() {
    $("#loading-container").remove();
    loadingContainer.removeClass("disable-scroll");
  });
}

function arraysEqual(a,b) {
    if (JSON.stringify(a) == JSON.stringify(b)) {
      return true;
    }

    return false;
}