'use strict';
angular.module('diatestApp')
  .factory('dataService', ['$q','$http',
    function($q, $http) {
      var _files = {
        ordini: 'ordini',
        conferme: 'conferme',
        confcancellazioni: 'confcancellazioni',
        modifiche: 'modifiche',
        eseguiti: 'eseguiti',
        ineseguiti: 'ineseguiti',
        revoche: 'revoche',
        data: 'data'
      };

      var _cache = {};

      function read(type) {
        return $q(function (resolve, reject) {
          if (_cache[type]) {
            resolve(_cache[type]);
          } else {
            $http.get('data/eli_'+_files[type]+'.csv')
              .then(function (response) {
                _cache[type] = response.data || {};
                resolve(_cache[type]);
              }, function () {
                console.warn('No ' + type + ' file founded!');
                resolve({});
              });
          }
        });
      }

      function tojson(content, linesep) {
        linesep = linesep || '\r\n';
        var lines = content.split(linesep);
        var cols;
        var rows = [];

        function onLine(l, cb){
          l.split(';').forEach(function(f, i){
            cb((f||'').trim(), i);
          });
        }

        for (var i = 0;i<lines.length;i++) {
          if (lines[i]) {

            if (!cols) {
              cols = [];
              onLine(lines[i], function(c){
                if (c) cols.push(c);
              });
            } else {
              var o = {};
              onLine(lines[i], function(c, i){
                if (i<cols.length) o[cols[i]] = c;
              });
              rows.push(o);
            }
          }
        }

        return rows;
      }

      function save(type, data){
        var txt = JSON.stringify(data, null, 2);
        var file = new File([txt], type+'.json', {type: "text/plain;charset=utf-8"});
        saveAs(file);
      }


      function parse(type, linesep) {
        read(type)
          .then(function(o){
            var j = tojson(o, linesep);
            save(type, j);
          }, function(err){
            console.error(err);
          });
      }

      function parseAll() {
        for (var pn in _files) {
          parse(pn);
        }
      }

      function getData(type) {
        return $q(function (resolve) {
          if (_cache[type]) {
            resolve({type:type, rows:_cache[type]});
          } else {
            $http.get('data/'+_files[type]+'.json')
              .then(function (response) {
                _cache[type] = response.data || {};
                resolve({type:type, rows:_cache[type]});
              }, function () {
                console.warn('No ' + type + ' file founded!');
                resolve({});
              });
          }
        });
      }

      // parse('data', '\n');

      return {
        types: _files,
        parseAll: parseAll,
        getData: getData
      }
    }]);

