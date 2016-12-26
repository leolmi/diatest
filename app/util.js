'use strict';

angular.module("diatestApp")
  .factory('_',[
    function() {

      function findOne(arr, validator) {
        var found = [];
        arr.forEach(function(i, idx) {
          if (validator(i, idx, arr))
            found.push(i);
        });
        return found[0];
      }

      return {
        find: findOne
      }
    }
  ])
  .factory('util', ['$q','$timeout',
    function($q,$timeout) {
      /**
       * Generate new GUID
       * @returns {string}
       */
      function guid() {
        function s4() {
          return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
        }

        return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
          s4() + '-' + s4() + s4() + s4();
      }

      /**
       * Crea un gestore di timeout
       * @param delay
       * @returns {object} TimeoutHandler
       * @constructor
       */
      function TimeoutHandler(delay) {
        return {
          timeout: null,
          exec: function(cb) {
            var self = this;
            if (self.timeout) $timeout.cancel(self.timeout);
            self.timeout = $timeout(function(){
              $q.when(cb())
                .finally(function(){
                  self.timeout = null;
                });
            }, delay);
          },
          delay: delay || 250
        };
      }

      return {
        TimeoutHandler: TimeoutHandler,
        guid:guid
      }
    }]);
