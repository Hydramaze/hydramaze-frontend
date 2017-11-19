'use strict';

/**
 * @ngdoc overview
 * @name hydramaze.controller:ExercisesCtrl
 * @description Exercises Controller.
 */

var major;

angular.module('hydramaze')
  .controller('ExercisesCtrl', function($scope, $timeout, $compile, notify) {

    /*
    * Declared scope functions
    */

    $scope.$previousStepCall = function(elementScope) {
      showLoading($("#step-content-container"));
      elementScope.$previousStep();
      notify.closeAll();
    };

    $scope.$nextStepCall = function(elementScope) {
      showLoading($("#step-content-container"));
      elementScope.$nextStep();
      notify.closeAll();
    };

    $scope.$setStepAsActive = function(elementScope, index) {
      if (elementScope.$getActiveIndex() != index + 1) {
        if ($scope.$isAllowed(index)) {
          // set an active step
          showLoading($("#step-content-container"));
          elementScope.$setActiveIndex(index + 1);
          notify.closeAll();
        }
      }
    };

    // Validate if step is allowed for changes between tabs
    $scope.$isAllowed = function (index) {
      return true;
    };

    $scope.$addControllerNameAsBodyClass = function() {
      $("body").addClass("laboratory-exercises");
    };

    $scope.$removeControllerNameAsBodyClass = function() {
      $("body").removeClass("laboratory-exercises");
    };

    $scope.$createSteps = function() {
      var steps = [];
      var template = '<div id="exercise-{{exerciseNumber}}" class="exercise"><p>{{problemIntroduction}}<br></p><div data-datacamp-exercise data-lang="python"><code data-type="pre-exercise-code">{{preExerciseCode}}</code><code data-type="sample-code">{{sampleCode}}</code><code data-type="solution">{{solution}}</code><code data-type="sct">{{validation}}</code><div data-type="hint">{{hint}}</div></div><script src="https://cdn.datacamp.com/datacamp-light-latest.min.js"></script></div>';
      

      var problemIntroduction = "First of all let's import some libraries which will make some tasks easily. It is important to know which library we are using and why, so be curious and look for that";
      //var references = var $prepareReferences(var data[""]);
      var preExerciseCode = "# None declared";
      var sampleCode = "# Import numpy as np \n# Import matplotlib.pyplot as plt";
      var solution = "# Import numpy as np \nimport numpy as np \n# Import matplotlib.pyplot as plt \nimport matplotlib.pyplot as plt";
      var validation = 'test_object("np") \ntest_object("plt") \nsuccess_msg("We are making progress!")';
      var hint = "Use the function (<code>print</code>).";

      var newTemplateRequest = template;
      newTemplateRequest = newTemplateRequest.replace('{{problemIntroduction}}', problemIntroduction);
      newTemplateRequest = newTemplateRequest.replace('{{preExerciseCode}}', preExerciseCode);
      newTemplateRequest = newTemplateRequest.replace('{{sampleCode}}', sampleCode);
      newTemplateRequest = newTemplateRequest.replace('{{solution}}', solution);
      newTemplateRequest = newTemplateRequest.replace('{{validation}}', validation);
      newTemplateRequest = newTemplateRequest.replace('{{hint}}', hint);
      
      var newStep = {};
      newStep['templateUrl'] = tplUrl;
      newStep['controller'] = tplCtrl;
      newStep['title'] = 'Learning how to use the profsfrface';
      newStep['exercise'] = newTemplateRequest;
      steps.push(newStep);

      newStep = {};
      newStep['templateUrl'] = tplUrl;
      newStep['controller'] = tplCtrl;
      newStep['title'] = 'Learning how to use the programming fdffdfdinterface';
      newStep['exercise'] = newTemplateRequest;
      steps.push(newStep);

      newStep = {};
      newStep['templateUrl'] = tplUrl;
      newStep['controller'] = tplCtrl;
      newStep['title'] = 'Learning how to use the pfefdfdfrogramming interface';
      newStep['exercise'] = newTemplateRequest;
      steps.push(newStep);

      newStep = {};
      newStep['templateUrl'] = tplUrl;
      newStep['controller'] = tplCtrl;
      newStep['title'] = 'Learning how to use the prografefdfmming interface';
      newStep['exercise'] = newTemplateRequest;
      steps.push(newStep);

      return steps;
    };

    /*
    * Declared scope variables
    */

    var tplUrl = '/app/views/laboratory-content/exercises/exercise-base/exercise-base.html';
    var tplCtrl = 'ExerciseBaseCtrl';

    $scope.exercises = {};

    $scope.steps = $scope.$createSteps();

    /*
    * Functions usage
    */

    $scope.$addControllerNameAsBodyClass();

    // Called when finish render
    $timeout(function () {
      showLoading($("#step-content-container"));
      console.log("Exercises Controller as been loaded!");
    });

    $scope.$on("$destroy", function() {
      $scope.$removeControllerNameAsBodyClass();
    });

  });
