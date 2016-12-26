'use strict';

/**
 * @ngdoc function
 * @name diatestApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the diatestApp
 */
angular.module('diatestApp')
  .controller('MainCtrl', ['$scope','$timeout','visHelper',
    function ($scope, $timeout, visHelper) {
      $scope.current = {};
      $scope.currentStr = '';
      $scope.diagrammOptions = visHelper.options({
        style:{
          position: 'absolute',
          width: '100%',
          height: '100%'
        },
        nodes: [
          {id: 1, label: 'Pagina n°1', group:'orange' },
          {id: 2, label: 'Pagina n°2'},
          {id: 3, label: 'Pagina n°3'},
          {id: 4, label: 'Pagina n°4'},
          {id: 5, label: 'Pagina n°5'},
          {id: 6, label: 'Pagina n°6', group:'blue'},
          {id: 7, label: 'Pagina n°7', group:'blue'},
          {id: 8, label: 'Pagina n°8'},
          {id: 9, label: 'Pagina n°9'},
          {id: 10, label: 'Pagina n°10'}],

        // {id: 1, label: 'Node in\nthe center', shape: 'text', font:{strokeWidth:4}},
        // {id: 2, label: 'Node\nwith\nmultiple\nlines', shape: 'circle'},
        // {id: 3, label: 'This is a lot of text\nbut luckily we can spread\nover multiple lines', shape: 'database'},
        // {id: 4, label: 'This is text\non multiple lines', shape: 'box'},
        // {id: 5, label: 'Little text', shape: 'ellipse'}

        edges: [
          {from: 1, to: 2, color: 'red', width: 3, length: 200}, // individual length definition is possible
          {from: 1, to: 3, dashes:true, width: 1, length: 200},
          {from: 1, to: 4, width: 1, length: 200, label:'I\'m an edge!'},
          {from: 1, to: 5, arrows:'to', width: 3, length: 200, label:'arrows\nare cool'},
          {from: 3, to: 6},
          {from: 3, to: 7},
          {from: 3, to: 8},
          {from: 5, to: 9}],
        selectionChanged: function(params) {
          var self = this;
          $timeout(function(){
            $scope.current.selection = params.nodes.map(function(p){
              return _.find(self.nodes, function(n){
                return n.id==p;
              });
            });
            $scope.currentStr = JSON.stringify($scope.current, null, 2);
          }, 100);
        }
      });

      $scope.diagrammOptions.watch('click', function(a){
        $timeout(function(){
          $scope.selection = JSON.stringify(a, null, 2);
        });
      });

      $scope.changeDiagramm = function() {
        $scope.diagrammOptions.nodes[0].label = 'STICAZZI\nnel mezzo';
      };
    }]);
