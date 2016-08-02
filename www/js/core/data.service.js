/**
 * Created by Oleg Galaburda on 16.12.15.
 */
(function() {
  'use strict';

  /**
   * @private
   * @constructor
   */
  function Note() {
    this.id = '';
    this.title = '';
    this.text = '';
    this.createdDate = new Date();
    this.modifiedDate = new Date();
  }

  /**
   *
   * @param $rootScope
   * @param $window
   * @param noteService {NoteService}
   * @constructor
   */
  function DataService($rootScope, $window, noteService) {
    /**
     * @type DataService
     */
    var _this = this;

    /**
     * @type Object<string, Note>
     */
    var _ids = {};
    /**
     * @type Array<Note>
     */
    var _list;

    _this.getList = function() {
      return _list.slice();
    };

    _this.getItem = function(id) {
      return _ids[id];
    };

    _this.hasItem = function(id) {
      return _ids.hasOwnProperty(id);
    };

    /**
     * @returns Note
     */
    _this.createItem = function() {
      var item = new Note();
      item.id = noteService.getId();
      return item;
    };

    /**
     * @param item Note
     */
    _this.saveItem = function(item) {
      if (_this.hasItem(item.id)) {
        var index = _list.indexOf(item);
        if (index >= 0) {
          item.modifiedDate = new Date();
          _list.splice(index, 1, item);
        }
      } else {
        _list.push(item);
      }
      _ids[item.id] = item;
      write();
    };

    /**
     * @param item Note
     */
    _this.removeItem = function(item) {
      var index = _list.indexOf(item);
      if (index >= 0) {
        _list.splice(index, 1);
        delete _ids[item.id];
        write();
      }
    };

    _this.clear = function() {
      _ids = {};
      _list = [];
      write();
    };

    _this.onChange = function(handler) {
      var remover = null;
      if (handler) {
        remover = $rootScope.$on('data.change', handler);
      }
      return remover;
    };

    function read() {
      var data = $window.localStorage.getItem('notes');
      _list = data ? angular.fromJson(data) : [];
      _list.forEach(function(item) {
        _ids[item.id] = item;
      });
    }

    function write() {
      $window.localStorage.setItem('notes', angular.toJson(_list));
      $rootScope.$emit('data.change', _this.getList());
    }

    read();
  }

  DataService.$inject = ['$rootScope', '$window', 'noteService'];

  angular.module('app.core').service('dataService', DataService);
})();
