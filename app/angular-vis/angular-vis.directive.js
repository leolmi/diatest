'use strict';

angular.module('diatestApp')
  .factory('visHelper', ['util',
    function(util) {
      var __orange = {
        background: "#ed7d31",
        border: "#ad592a",
        highlight: {
          background: "#ed7d31",
          border: "#ad592a"
        }
      };
      var __green = {
        background: "#548235",
        border: "#3b602b",
        highlight: {
          background: "#548235",
          border: "#3b602b"
        }
      };
      var __grey = {
        background: "#999",
        border: "#666",
        highlight: {
          background: "#999",
          border: "#666"
        }
      };
      var __blue = {
        background: "#5b9bd5",
        border: "#4d739f",
        highlight: {
          background: "#5b9bd5",
          border: "#4d739f"
        }
      };


      var _eli_groups = {
        // verde
        ordine_eseguito: {
          color: __green,
          shape: 'circle'
        },
        //arancione
        ordine_revocato: {
          color: __orange,
          shape: 'circle'
        },
        //celeste
        modifica: {
          color: __blue,
          shape: 'circle'
        },
        revoca: {

        },
        conf_mkt: {
          color: __grey,
          shape: 'box',
          shapeProperties: {
            borderRadius: 0
          }
        },
        //verde
        action_eseguito: {
          color: __green,
          shape: 'ellipse'
        },
        //arancione
        action_ineseguito: {
          color: __orange,
          shape: 'ellipse'
        }
      };

      var _default = {
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

      var _groups = {
        eli: _eli_groups,
        default: _default
      };

      var _events = [
        'click',
        'doubleClick',
        'oncontext',
        'hold',
        'release',
        'selectNode',
        'selectEdge',
        'deselectNode',
        'deselectEdge',
        'dragStart',
        'dragging',
        'dragEnd',
        'hoverNode',
        'hoverEdge',
        'blurNode',
        'blurEdge',
        'zoom',
        'showPopup',
        'hidePopup',
        'startStabilizing',
        'stabilizationProgress',
        'stabilizationIterationsDone',
        'stabilized',
        'resize',
        'initRedraw',
        'beforeDrawing',
        'afterDrawing',
        'animationFinished'
      ];


      var VisOptions = function (info) {
        this.edges = [];
        this.nodes = [];
        this.style = {};
        this.events = [];
        this.diagram = {
          autoResize: true,
          height: '100%',
          width: '100%',
          // locale: 'en',
          // locales: [],
          clickToUse: false,
          configure: {              // defined in the configure module.
            enabled: true,
            filter: 'nodes, edges',
            // container: undefined,
            showButton: true
          },
          edges: {                  // defined in the edges module.
            arrows: {
              to: {
                enabled: true,
                scaleFactor: 0.4
              }
            },
            font: {
              size: 12,
              color: '#111',
              strokeWidth: 0,
              strokeColor: "#111"
            },
            hoverWidth: 2,
            selectionWidth: 2,
            smooth: {
              type: "cubicBezier",
              forceDirection: "vertical",
              roundness: 1
            },
            color: {
              color: '#5a9ad5',
              highlight: '#5a9ad5'
            },
            shadow:true
          },
          nodes: {          // defined in the nodes module.
            shape: "dot",
            font: {
              size: 14,
              color: "#eee"
              // strokeWidth: 1
              // strokeColor: "#101010"
            },
            size: 80,
            color: "yellowgreen",
            borderWidthSelected: 1,
            shadow: true,
            scaling: {
              min: 10,
              max: 500,
              label: {
                enabled: true,
                maxVisible: 15
              }
            }
          },
          groups: _groups.eli,       // defined in the groups module.
          layout: {                     // defined in the layout module.
            randomSeed: 12,
            improvedLayout: true,
            hierarchical: {
              enabled: true,
              levelSeparation: 100,
              nodeSpacing: 100,
              treeSpacing: 100,
              blockShifting: true,
              edgeMinimization: true,
              parentCentralization: true,
              direction: 'UD',        // UD, DU, LR, RL
              sortMethod: 'hubsize'   // hubsize, directed
            }
          },
          interaction: {                // defined in the interaction module.
            dragNodes: true,
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
            // editNode: undefined,
            editEdge: true,
            deleteNode: true,
            deleteEdge: true,
            controlNodeStyle: {}
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
        };
        if (info)
          _.extend(this, info);
      };
      VisOptions.prototype = {
        fit: function (fto) {
        },
        redraw: function () {
        },
        focus: function (nodeId, fo) {
        },
        moveTo: function (mto) {
        },
        onload: function () {
        },
        watch: function (e, callback) {
          this.events.push({event: e, callback: callback});
        },
        setnode: function (id, cb) {
          var n = _.find(this.nodes, function (xn) {
            return xn.id == id;
          });
          if (n) cb(n);
        }
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


      var VisNode = function (info) {
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
          color: '#2B7CE9'
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
          customScalingFunction: function (min, max, total, value) {
            if (max === min) {
              return 0.5;
            }
            else {
              var scale = 1 / (max - min);
              return Math.max(0, (value - min) * scale);
            }
          }
        };
        this.shadow = {
          enabled: false,
          color: 'rgba(0,0,0,0.5)',
          size: 10,
          x: 5,
          y: 5
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


      var VisEdge = function (info) {
        this.from = undefined;
        this.to = undefined;
        this.arrows = {
          to: {enabled: false, scaleFactor: 1, type: 'arrow'},
          middle: {enabled: false, scaleFactor: 1, type: 'arrow'},
          from: {enabled: false, scaleFactor: 1, type: 'arrow'}
        };
        this.arrowStrikethrough = true;
        this.color = {
          color: '#848484',
          highlight: '#848484',
          hover: '#848484',
          inherit: 'from',
          opacity: 1.0
        };
        this.dashes = false;
        this.font = {
          color: '#343434',
          size: 14, // px
          face: 'arial',
          background: 'none',
          strokeWidth: 2, // px
          strokeColor: '#ffffff',
          align: 'horizontal'
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
          customScalingFunction: function (min, max, total, value) {
            if (max === min) {
              return 0.5;
            }
            else {
              var scale = 1 / (max - min);
              return Math.max(0, (value - min) * scale);
            }
          }
        };
        this.selectionWidth = 1;
        this.selfReferenceSize = 20;
        this.shadow = {
          enabled: false,
          color: 'rgba(0,0,0,0.5)',
          size: 10,
          x: 5,
          y: 5
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
        styles: _groups,
        events: _events,
        options: function (info) {
          return new VisOptions(info);
        },
        node: function (info) {
          return new VisNode(info);
        },
        edge: function (info) {
          return new VisEdge(info);
        }
      };
    }])
  .directive('angularVis', ['util','visHelper',
    function (util,visHelper) {
      return {
        restrict: 'E',
        template: '<div class="vis-container"></div>',
        replace: true,
        scope: {options: '='},
        link: function (scope, ele, atr) {
          var _defaults = visHelper.options();
          _.defaults(scope.options, _defaults);
          var _container =  ele[0];
          var _self = scope;
          var _timeout = new util.TimeoutHandler();
          var _seed;


          function _refresh() {
            var css = _self.options.style || {};
            $(_container).css(css);
            var data = {
              nodes: _self.options.nodes,
              edges: _self.options.edges,
              isEmpty: function() {

              }
            };

            if (_self.network != null) {
              _self.network.destroy();
            }

            if (data.isEmpty()) {
              console.warn('[visjs - network] no data!');
              return;
            }

            _self.network = new vis.Network(_container, data, _self.options.diagram);

            if (_self.options.events && _.isArray(_self.options.events)) {
              _self.options.events.forEach(function (e) {
                _.find(visHelper.events, function (ev) {
                  if (e.event == ev)
                    _self.network.on(ev, e.callback);
                });
              });
            }


            if (_self.options.onload && _.isFunction(_self.options.onload)) {
              _self.options.onload(_self.network);
            }
          }

          scope.$watch('options', function(n) {
            // if (_self.network)
            //   _seed = _self.network.getSeed();
             _timeout.exec(_refresh);

            // if (_self.network) {
            //   var data = {
            //     nodes: _self.options.nodes,
            //     edges: _self.options.edges
            //   };
            //   _self.network.setData(data);
            // }
          }, true);

          _timeout.exec(_refresh);
        }
      }
    }]);

