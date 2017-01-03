'use strict';

angular.module('diatestApp')
  .controller('MainCtrl', ['$scope','$timeout','visHelper','builder','dataService',
    function ($scope, $timeout, visHelper, builder, dataService) {
      dataService.getData('data')
        .then(function(data){
          builder.build(data.rows, function(o){
            $scope.diagrammOptions = o;
            $scope.diagrammOptions.watch('click', function(a){
              $timeout(function(){
                $scope.selection = JSON.stringify(a, null, 2);
              });
            });
          });
        });
    }]);
