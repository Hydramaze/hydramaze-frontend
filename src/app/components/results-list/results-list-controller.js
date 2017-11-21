'use strict';

/**
 * @ngdoc overview
 * @name hydramaze.controller:RestultsListCtrl
 * @description Restults List Controller.
 */

angular.module('hydramaze')
  .controller('ResultsListCtrl', function($scope, $compile, $timeout, $http, notify, stepFourService, tutorialService) {

    /*
    * Declared scope functions
    */

    $scope.$createScreenResults = function(data) {

      var components = document.createElement("div");
      components.setAttribute("class", "components");

      angular.forEach(data, function (val, key) {
        var newBlock = document.createElement("div");
        newBlock.setAttribute("id", "result-" + key);
        newBlock.setAttribute("class", "result block container-fluid col-xs-12 col-sm-6 col-lg-6");

        var directiveComponent = document.createElement(key + "-directive");

        newBlock.append(directiveComponent);

        var newScope = $scope.$new(true);
        newScope.data = val;

        var el = $compile(newBlock)(newScope);

        components.append(newBlock);
        
        $('#download-component').before(components);
      });
    };

    $scope.$getPythonFile = function(algorithmId, datasetId, testSize, parametersData) {
      var config = {
          headers : {
            'Content-Type': 'application/json;charset=utf-8;'
          }
        }

      $http.post('http://localhost:8080/api/algorithm/' + algorithmId + '/download?&dataSetId=' + datasetId + "&testSize=" + testSize, parametersData, config)
        .then(function successCallback(response) {
          if (response.status == 200 && !response.data.error) {
            var blob = new Blob([response.data], {type: 'text/x-python'});
            $scope.$generateDownload(blob);
          }
          else {
            var errorMessage = "Algorithm file cannot be downloaded.";
            if (response.data.error) {
              errorMessage = response.data.error;
            }
            notify({
              message: errorMessage,
              classes: "alert-danger"
            });
            $scope.$previousStep();
          }
        }, function errorCallback(responseError) {
          var errorMessage = "Sorry, an error has occurred. Try again!";
          if (responseError.data && responseError.data.message) errorMessage = responseError.data.message;
          notify({
            message: errorMessage,
            classes: "alert-danger"
          });
        });
    }

    $scope.$generateDownload = function(blob) {
      $scope.downloadUrl = window.URL.createObjectURL(blob);
      $scope.downloadFileName = "algorithm-script.py";
      $scope.isGeneratedDownload = true;
      $timeout(function() {
        $("#generated-download")[0].click();
      });
    };

    $scope.$downloadCode = function() {
      if (!$scope.isGeneratedDownload) {
        $scope.$getPythonFile(
          stepFourService.$getAllData()["algorithmId"],
          stepFourService.$getAllData()["datasetId"],
          stepFourService.$getAllData()["testSize"],
          stepFourService.$getAllData()["parametersData"]
        );
      } else {
        $("#generated-download")[0].click();
      }
    };

    $scope.$hideLoading = function() {
      $timeout(function() {
        hideLoading(tutorialService.$getLoadingContainer()); 
      }, 1000);
    };

    /*
    * Declared scope variables
    */

    /*
    * Functions usage
    */

    // Called when finish render
    $timeout(function () {
      $scope.$createScreenResults($scope.data);

      $scope.$hideLoading();
    });

  });
