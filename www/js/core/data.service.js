/**
 * Created by Oleg Galaburda on 16.12.15.
 */
(function() {

  /**
   * @private
   * @constructor
   */
  function Note() {
    this.id = getId();
    this.title = '';
    this.text = '';
    this.createdDate = new Date();
    this.modifiedDate = new Date();
  }

  function getId() {
    return String(Date.now());
  }

  /**
   * @param $window
   * @constructor
   */
  function DataService($q, $window) {
    /**
     * @type Deferred
     */
    var _change = $q.defer();

    /**
     * @type Object<string, Note>
     */
    var _ids = {};
    /**
     * @type Array<Note>
     */
    var _list;

    this.getList = function() {
      return _list.slice();
    };

    this.getItem = function(id) {
      return _ids[id];
    };

    this.hasItem = function(id) {
      return _ids.hasOwnProperty(id);
    };

    /**
     * @returns Note
     */
    this.createItem = function() {
      return new Note();
    };

    /**
     * @param item Note
     */
    this.saveItem = function(item) {
      if (this.hasItem(item.id)) {
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
    this.removeItem = function(item) {
      var index = _list.indexOf(item);
      if (index >= 0) {
        _list.splice(index, 1);
        delete _ids[item.id];
        write();
      }
    };

    this.clear = function() {
      _ids = {};
      _list = [];
      write();
    };

    this.onChange = function(handler) {
      if (handler) {
        _change.promise.then(null, null, handler);
      }
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
      _change.notify();
    }

    read();
  }

  DataService.$inject = ['$q', '$window'];

  angular.module('app.core').service('dataService', DataService);
})();
