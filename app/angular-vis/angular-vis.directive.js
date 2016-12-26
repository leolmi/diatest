'use strict';

angular.module('diatestApp')
  .factory('visHelper', ['util',
    function(util) {
    var _defaultGroups = {
      blue: {
        color: {
          background: "#5BC0DE",
          border: "#5BC0DE",
          highlight: {
            background: "#5BC0DE",
            border: "#5BC0DE"
          }
        }
      },
      orange: {
        color: {
          background: "#FAA123",
          border: "#FAA123",
          highlight: {
            background: "#FAA123",
            border: "#FAA123"
          }
        },
        font: {
          size: 13
          // strokeWidth: 2,
          // strokeColor: "#101010"
        }
      },
      green: {
        color: {
          border: "#42A442",
          background: "#62C462",
          highlight: {
            border: "#42A442",
            background: "#62C462"
          }
        },
        font: {
          size: 12,
          strokeWidth: 1,
          strokeColor: "#101010"
        }
      }
    };

    var VisOptions = function(info) {
      this.edges = [];
      this.nodes = [];
      this.style = {};
      this.diagram = {
        autoResize: true,
        height: '100%',
        width: '100%',
        // locale: 'en',
        // locales: [],
        clickToUse: false,
        configure: {              // defined in the configure module.
          enabled: true,
          filter: 'nodes,edges',
          container: undefined,
          showButton: true
        },
        edges: {                  // defined in the edges module.
          arrows: {
            to: {
              enabled: true,
              scaleFactor: 1
            }
          },
          font: {
            size: 12,
            color: '#999',
            strokeWidth: 1,
            strokeColor: "#101010"
          },
          hoverWidth: 0,
          selectionWidth: 1,
          smooth: {
            enabled: false,
            type: "dynamic",
            roundness: 0.5
          }
        },
        nodes: {          // defined in the nodes module.
          shape: "box",
          font: {
            size: 14,
            color: "#111"
            // strokeWidth: 1,
            // strokeColor: "#101010"
          },
          size: 40,
          color: "yellowgreen",
          borderWidthSelected: 20
        },
        groups: _defaultGroups,       // defined in the groups module.
        layout: {                     // defined in the layout module.
          randomSeed: 12,
          improvedLayout:true,
          hierarchical: {
            enabled:false,
            levelSeparation: 150,
            nodeSpacing: 100,
            treeSpacing: 200,
            blockShifting: true,
            edgeMinimization: true,
            parentCentralization: true,
            direction: 'UD',        // UD, DU, LR, RL
            sortMethod: 'hubsize'   // hubsize, directed
          }
        },
        interaction: {                // defined in the interaction module.
          dragNodes:true,
          dragView: true,
          hideEdgesOnDrag: false,
          hideNodesOnDrag: false,
          hover: false,
          hoverConnectedEdges: true,
          keyboard: {
            enabled: false,
            speed: {x: 10, y: 10, zoom: 0.02},
            bindToWindow: true
          },
          multiselect: false,
          navigationButtons: false,
          selectable: true,
          selectConnectedEdges: true,
          tooltipDelay: 300,
          zoomView: true
        },
        manipulation: {               // defined in the manipulation module.
          enabled: false,
          initiallyActive: false,
          addNode: true,
          addEdge: true,
          editNode: undefined,
          editEdge: true,
          deleteNode: true,
          deleteEdge: true,
          controlNodeStyle:{}
        },
        physics: {                    // defined in the physics module.
          enabled: true,
          barnesHut: {
            gravitationalConstant: -2000,
            centralGravity: 0.3,
            springLength: 95,
            springConstant: 0.04,
            damping: 0.09,
            avoidOverlap: 0
          },
          forceAtlas2Based: {
            gravitationalConstant: -50,
            centralGravity: 0.01,
            springConstant: 0.08,
            springLength: 100,
            damping: 0.4,
            avoidOverlap: 0
          },
          repulsion: {
            centralGravity: 0.2,
            springLength: 200,
            springConstant: 0.05,
            nodeDistance: 100,
            damping: 0.09
          },
          hierarchicalRepulsion: {
            centralGravity: 0.0,
            springLength: 100,
            springConstant: 0.01,
            nodeDistance: 120,
            damping: 0.09
          },
          maxVelocity: 50,
          minVelocity: 0.1,
          solver: 'barnesHut',
          stabilization: {
            enabled: true,
            iterations: 1000,
            updateInterval: 100,
            onlyDynamicEdges: false,
            fit: true
          },
          timestep: 0.5,
          adaptiveTimestep: true
        }

      // this.nodes = [];
      // this.edges = [];
      // this.layout = {
      //   randomSeed: 12
      // };
      // this.diagram = {
      //   layout: {
      //     randomSeed: 12
      //   },
      //   // interaction: {
      //   //   selectConnectedEdges: true,
      //   //   keyboard: {
      //   //     bindToWindow: true
      //   //   },
      //   //   tooltipDelay: 150,
      //   //   navigationButtons: false
      //   // },
      //   // physics: {
      //   //   barnesHut: {
      //   //     centralGravity: .15
      //   //   },
      //   //   solver: "barnesHut",
      //   //   timestep: .6
      //   // },
      //   edges: {
      //     arrows: {
      //       to: {
      //         enabled: true,
      //         scaleFactor: 1
      //       }
      //     },
      //     font: {
      //       size: 12,
      //       color: '#999',
      //       strokeWidth: 1,
      //       strokeColor: "#101010"
      //     },
      //     hoverWidth: 0,
      //     selectionWidth: 1,
      //     smooth: {
      //       enabled: false,
      //       type: "dynamic",
      //       roundness: 0.5
      //     }
      //   },
      //   nodes: {
      //     shape: "box",
      //     font: {
      //       size: 14,
      //       color: "#111"
      //       // strokeWidth: 1,
      //       // strokeColor: "#101010"
      //     },
      //     size: 40,
      //     color: "yellowgreen",
      //     borderWidthSelected: 20
      //   },
      //   groups: _defaultGroups
      // };
      };
      if (info)
        _.extend(this, info);
    };
    VisOptions.prototype = {
      fit: function(fto) {},
      redraw: function() {},
      focus: function(nodeId, fo) {},
      moveTo: function(mto) {},
      onClick: function() {},
      onSelectNode: function() {},
      onDeselectNode: function() {},
      onSelectEdge: function() {},
      onDeselectEdge: function() {}
    };

    // var fto = {
    //   nodes:[Array of nodeIds],
    //   animation: { // -------------------> can be a boolean too!
    //     duration: Number
    //     easingFunction: String
    //   }
    // }

    // var fo = {
    //   scale: Number,
    //   offset: {x:Number, y:Number}
    //   locked: boolean
    //   animation: { // -------------------> can be a boolean too!
    //     duration: Number
    //     easingFunction: String
    //   }
    // }

    // var mto = {
    //   position: {x:Number, y:Number},
    //   scale: Number,
    //   offset: {x:Number, y:Number}
    //   animation: { // -------------------> can be a boolean too!
    //     duration: Number
    //     easingFunction: String
    //   }
    // }


    var VisNode = function(info) {
      this.id = util.guid();
      this.borderWidth = 1;
      this.borderWidthSelected = 2;
      this.brokenImage = undefined;
      this.color = {
        border: '#2B7CE9',
        background: '#97C2FC',
        highlight: {
          border: '#2B7CE9',
          background: '#D2E5FF'
        },
        hover: {
          border: '#2B7CE9',
          background: '#D2E5FF'
        }
      };
      this.fixed = {
        x: false,
        y: false
      };
      this.font = {
        color: '#343434',
          size: 14, // px
          face: 'arial',
          background: 'none',
          strokeWidth: 0, // px
          strokeColor: '#ffffff',
          align: 'center'
      };
      this.group = undefined;
      this.hidden = false;
      this.icon = {
        face: 'FontAwesome',
          code: undefined,
          size: 50,  //50,
          color:'#2B7CE9'
      };
      this.image = undefined;
      this.label = undefined;
      this.labelHighlightBold = true;
      this.level = undefined;
      this.mass = 1;
      this.physics = true;
      this.scaling = {
        min: 10,
          max: 30,
          label: {
          enabled: false,
            min: 14,
            max: 30,
            maxVisible: 30,
            drawThreshold: 5
        },
        customScalingFunction: function (min,max,total,value) {
          if (max === min) {
            return 0.5;
          }
          else {
            var scale = 1 / (max - min);
            return Math.max(0,(value - min)*scale);
          }
        }
      };
      this.shadow = {
        enabled: false,
          color: 'rgba(0,0,0,0.5)',
          size:10,
          x:5,
          y:5
      };
      this.shape = 'ellipse';
      this.shapeProperties = {
        borderDashes: false, // only for borders
          borderRadius: 6,     // only for box shape
          interpolation: false,  // only for image and circularImage shapes
          useImageSize: false,  // only for image and circularImage shapes
          useBorderWithImage: false  // only for image shape
      };
      this.size = 25;
      this.title = undefined;
      this.value = undefined;
      this.x = undefined;
      this.y = undefined;
      if (info)
        _.extend(this, info);
    };
    VisNode.prototype = {};


    var VisEdge = function(info) {
      this.from = undefined;
      this.to = undefined;
      this.arrows = {
        to:     {enabled: false, scaleFactor:1, type:'arrow'},
        middle: {enabled: false, scaleFactor:1, type:'arrow'},
        from:   {enabled: false, scaleFactor:1, type:'arrow'}
      };
      this.arrowStrikethrough = true;
      this.color = {
        color:'#848484',
        highlight:'#848484',
        hover: '#848484',
        inherit: 'from',
        opacity:1.0
      };
      this.dashes = false;
      this.font = {
        color: '#343434',
        size: 14, // px
        face: 'arial',
        background: 'none',
        strokeWidth: 2, // px
        strokeColor: '#ffffff',
        align:'horizontal'
      };
      this.hidden = false;
      this.hoverWidth = 1.5;
      this.label = undefined;
      this.labelHighlightBold = true;
      this.length = undefined;
      this.physics = true;
      this.scaling = {
        min: 1,
        max: 15,
        label: {
          enabled: true,
          min: 14,
          max: 30,
          maxVisible: 30,
          drawThreshold: 5
        },
        customScalingFunction: function (min,max,total,value) {
          if (max === min) {
            return 0.5;
          }
          else {
            var scale = 1 / (max - min);
            return Math.max(0,(value - min)*scale);
          }
        }
      };
      this.selectionWidth = 1;
      this.selfReferenceSize = 20;
      this.shadow = {
        enabled: false,
        color: 'rgba(0,0,0,0.5)',
        size:10,
        x:5,
        y:5
      };
      this.smooth = {
        enabled: true,
        type: "dynamic",
        roundness: 0.5
      };
      this.title = undefined;
      this.width = 1;
      this.value = undefined;
      if (info)
        _.extend(this, info);
    };
    VisEdge.prototype = {};

    return {
      options: function(info) { return new VisOptions(info); },
      node: function(info) { return new VisNode(info); },
      edge: function(info) { return new VisEdge(info); }
    };
  }])
  .directive('angularVis', ['util','visHelper',
    function (util,visHelper) {
      return {
        restrict: 'E',
        template: '<div></div>',
        replace: true,
        scope: {options: '='},
        link: function (scope, ele, atr) {
          var _defaults = visHelper.options();
          _.defaults(scope.options, _defaults);
          var _container =  ele[0];
          var _self = scope;
          var _refresh = new util.TimeoutHandler();

          function _execAction(name, params) {
            if (_self.options[name] && _.isFunction(_self.options[name])) {
              _self.options[name](params);
              console.log(name+' event:', params);
            }
          }

          function refresh() {
            var css = _self.options.style || {};
            $(_container).css(css);
            var data = {
              nodes: _self.options.nodes,
              edges: _self.options.edges
            };
            _self.network = new vis.Network(_container, data, _self.options.diagram);
            _self.network.on("click", function (params) {
              _execAction('onClick', params);
            });
            _self.network.on("selectNode", function (params) {
              _execAction('onSelectNode', params);
            });
            _self.network.on("deselectNode", function (params) {
              _execAction('onDeselectNode', params);
            });
            _self.network.on("selectEdge", function (params) {
              _execAction('onSelectEdge', params);
            });
            _self.network.on("deselectNode", function (params) {
              _execAction('onDeselectEdge', params);
            });
          }

          scope.$watch('options', function() {
            _refresh.exec(refresh);
          }, true);
        }
      }
    }]);
