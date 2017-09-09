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

  $urlRouterProvider.when('', '/inicio');
  $urlRouterProvider.otherwise('/404');

  $stateProvider
  .state('default', {
      abstract: true,
      url: '',
      templateUrl: 'app/templates/default/default.tpl.html',
      controller: 'DefaultTplCtrl'
  })
  .state('default.home', {
      url: '/inicio',
      views: {
        'defaultcontent': {
          templateUrl: 'app/views/home/home.html',
          controller: 'HomeCtrl'
        }
      }
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
      url: '/laboratorio',
      templateUrl: 'app/templates/laboratory/laboratory.tpl.html',
      controller: 'LaboratoryTplCtrl'
  })
  .state('laboratory.tutorial', {
      url: '/tutorial',
      views: {
        'laboratorycontent': {
          templateUrl: 'app/views/laboratory-content/tutorial/tutorial.html',
          controller: 'TutorialCtrl'
        }
      }
  })
  .state('laboratory.exercises', {
      url: '/exercises',
      views: {
        'laboratorycontent': {
          templateUrl: 'app/views/laboratory-content/exercises/exercises.html',
          controller: 'ExercisesCtrl'
        }
      }
  });

}]);