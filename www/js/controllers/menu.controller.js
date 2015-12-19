/**
 * Created by Oleg Galaburda on 16.12.15.
 */
(function() {
  /**
   * @param $stateParams
   * @param noteService {NoteService}
   * @param dataService {DataService}
   * @constructor
   */
  function MenuController($stateParams, noteService, dataService) {
    var _this = this;
    var _list = dataService.getList();

    _this.getTitle = noteService.getTitle;

    _this.clear = function() {
      dataService.clear();
    };

    _this.showCreate = function() {
      noteService.goToCreate();
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

    function reload(event, list) {
      _list = list;
    }

    dataService.onChange(reload);
  }

  MenuController.$inject = ['$stateParams', 'noteService', 'dataService'];

  angular.module('starter.controllers').controller('MenuController', MenuController);
})();
