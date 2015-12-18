/**
 * Created by Oleg Galaburda on 16.12.15.
 */
(function() {
  /**
   * @param noteService {NoteService}
   * @param dataService {DataService}
   * @constructor
   */
  function MenuController(noteService, dataService) {
    var _this = this;
    var _list = dataService.getList();

    _this.getTitle = noteService.getTitle;

    _this.clear = function() {
      dataService.clear();
    };

    _this.remove = function(item) {
      dataService.removeItem(item);
    };

    Object.defineProperties(this, {
      list: {
        get: function() {
          return _list;
        }
      }
    });

    function reload() {
      _list = dataService.getList();
    }

    dataService.onChange(reload);
  }

  MenuController.$inject = ['noteService', 'dataService'];

  angular.module('starter.controllers').controller('MenuController', MenuController);
})();
