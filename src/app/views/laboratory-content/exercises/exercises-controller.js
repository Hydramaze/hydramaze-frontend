'use strict';

/**
 * @ngdoc overview
 * @name hydramaze.controller:ExercisesCtrl
 * @description Exercises Controller.
 */

var major;

angular.module('hydramaze')
  .controller('ExercisesCtrl', function($scope, $timeout, $http, $compile, notify, exercisesService) {

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
      var stepChildScope = angular.element($("multi-step-container")).scope();
      if (stepChildScope.$getActiveIndex() != index + 1) {
        if ($scope.$isAllowed(index)) {
          // set an active step
          showLoading($("#step-content-container"));
          stepChildScope.$setActiveIndex(index + 1);
          notify.closeAll();
        }
      }
    };

    $scope.$getActiveMultiStepContainerIndex = function() {
      var stepChildScope = angular.element($("multi-step-container")).scope();
      return stepChildScope.$getActiveIndex() - 1;
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

    $scope.$createSteps = function(data) {
      var steps = [];
      var template = '<div id="exercise-{{exerciseNumber}}" class="exercise"><p class="exercise-introduction">{{problemIntroduction}} {{references}} <br></p><div data-datacamp-exercise data-lang="python"><code data-type="pre-exercise-code">{{preExerciseCode}}</code><code data-type="sample-code">{{sampleCode}}</code><code data-type="solution">{{solution}}</code><code data-type="sct">{{validation}}</code><div data-type="hint">{{hint}}</div></div><script src="https://cdn.datacamp.com/datacamp-light-latest.min.js"></script></div>';

      $.each(data, function(key, value) {

        var references = "";

        if (value.references.length > 0) {
          var referencesContainer = $('<div/>');
          
          var title = $('<p/>');
          title.text( "References:" );
          title.appendTo(referencesContainer);

          var cList = $('<ul/>');
          $.each(value.references, function(key, value) {
            var li = $('<li/>')
              .appendTo(cList);
            var a = $('<a/>')
              .text( value.description )
              .attr("href", value.url)
              .attr("target", "_blank")
              .appendTo(li);
          });
          cList.appendTo(referencesContainer);

          references = referencesContainer[0].outerHTML;
        }

        var newTemplateRequest = template;
        newTemplateRequest = newTemplateRequest.replace('{{problemIntroduction}}', value.problemIntroduction.replace(/\\n/g, "&#13;"));
        newTemplateRequest = newTemplateRequest.replace('{{preExerciseCode}}', value.preExerciseCode.replace(/\\n/g, "&#13;"));
        newTemplateRequest = newTemplateRequest.replace('{{sampleCode}}', value.sampleCode.replace(/\\n/g, "&#13;"));
        newTemplateRequest = newTemplateRequest.replace('{{solution}}', value.solution.replace(/\\n/g, "&#13;"));
        newTemplateRequest = newTemplateRequest.replace('{{validation}}', value.validation.replace(/\\n/g, "&#13;"));
        newTemplateRequest = newTemplateRequest.replace('{{hint}}', value.hint.replace(/\\n/g, "&#13;"));
        newTemplateRequest = newTemplateRequest.replace('{{references}}', references);
        
        var newStep = {};
        newStep['templateUrl'] = tplUrl;
        newStep['controller'] = tplCtrl;
        newStep['title'] = 'Exercise ' + (parseInt(value.exerciseNumber) + 1);
        newStep['exercise'] = newTemplateRequest;

        steps.push(newStep);
      });

      return steps;
    };

    $scope.$removeDuplicateItems = function(id) {
      var ul = $('#' + id);

      $('li', ul).each(function() {
        if($('li:contains("' + $(this).text() + '")', ul).length > 1)
          $(this).remove();
      });
    }

    $scope.$isValidStep = function(text) {
      var isValid = false;
      if (text != "") {
        isValid = true;
      }
      return isValid;
    };

    $scope.$reloadPage = function() {
      window.location.reload();
    };

    $scope.$createScreenAlgorithmsList = function(data) {
      var component = 'algorithms-list-with-exercise-directive';

      var newBlock = document.createElement("div");
      newBlock.setAttribute("id", "algorithms-list-directive");
      newBlock.setAttribute("class", "block container-fluid");

      var content = document.createElement(component);
      newBlock.append(content);

      $('.form-step').append(newBlock);

      var newScope = $scope.$new(true);
      newScope.data = data;

      $compile($('.form-step').contents())(newScope);
    };

    $scope.$getAlgorithmsListWithExercise = function() { 
      $http.get('http://localhost:8080/api/algorithm/exercises')
        .then(function successCallback(response) {
          if (response.status == 200) {
            $scope.$createScreenAlgorithmsList(response.data);
          }
          else {
            notify({
              message: "Algorithms list not found.",
              classes: "alert-danger"
            });
            hideLoading(exercisesService.$getLoadingContainer());
          }
        }, function errorCallback(responseError) {
          notify({
            message: "Sorry, an error has occurred. Try again!",
            classes: "alert-danger"
          });
          hideLoading(exercisesService.$getLoadingContainer());
        });
    };

    $scope.$getExercisesListByAlgorithmId = function(idValue) { 
      $http.get('http://localhost:8080/api/algorithm/' + idValue + '/exercise')
        .then(function successCallback(response) {
          if (response.status == 200) {
            $scope.isExercisesLoaded = true;
            $scope.$renderExercises(response.data);
          }
          else {
            notify({
              message: "Algorithms list not found.",
              classes: "alert-danger"
            });
            hideLoading(exercisesService.$getLoadingContainer());
          }
        }, function errorCallback(responseError) {
          notify({
            message: "Sorry, an error has occurred. Try again!",
            classes: "alert-danger"
          });
          hideLoading(exercisesService.$getLoadingContainer());
        });
    };

    $scope.$loadExercises = function() {
      var exercisesData = exercisesService.$getAllData();
      var algorithmId = exercisesData["algorithmId"];

      if (algorithmId) {
          showLoading(exercisesService.$getLoadingContainer());
          $scope.$getExercisesListByAlgorithmId(algorithmId);
      } else {
        notify({
          message: "Please select an algorithm.",
          classes: "alert-warning"
        });
      }
    };

    $scope.$renderExercises = function(data) {
      $scope.steps = $scope.$createSteps(data);
      $timeout(function() {
        $scope.$apply();
        $compile($('#exercises'))($scope);
      });
    };

    /*
    * Declared scope variables
    */

    var tplUrl = '/app/views/laboratory-content/exercises/exercise-base/exercise-base.html';
    var tplCtrl = 'ExerciseBaseCtrl';

    $scope.isExercisesLoaded = false;

    //$scope.steps = $scope.$createSteps();

    $scope.steps = [
      {
        templateUrl: '/app/components/exercise/empty.html',
        title: 'Choose an algorithm and load the exercises',
        controller: ''
      }
    ];

    /*
    * Functions usage
    */

    $scope.$addControllerNameAsBodyClass();

    exercisesService.$setLoadingContainer($("#exercises #step-content-container"));

    // Called when finish render
    $timeout(function () {

      showLoading(exercisesService.$getLoadingContainer());

      $scope.$getAlgorithmsListWithExercise();
    });

    $scope.$on("$destroy", function() {
      $scope.$removeControllerNameAsBodyClass();
    });

  });
