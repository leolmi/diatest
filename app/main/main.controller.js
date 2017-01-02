'use strict';

angular.module('diatestApp')
  .controller('MainCtrl', ['$scope','$timeout','visHelper','builder',
    function ($scope, $timeout, visHelper, builder) {
      $scope.current = {};
      $scope.currentStr = '';

      $scope.diagrammOptions = {};

      builder.build(function(o){
        $scope.diagrammOptions = visHelper.options(o);
        $scope.diagrammOptions.groups = visHelper.styles.eli;
        $scope.diagrammOptions.watch('click', function(a){
          $timeout(function(){
            $scope.selection = JSON.stringify(a, null, 2);
          });
        });
      });

    }]);
