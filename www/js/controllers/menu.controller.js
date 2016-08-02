/**
 * Created by Oleg Galaburda on 16.12.15.
 */
(function() {
  'use strict';

  /**
   * @param $stateParams
   * @param $ionicPopup
   * @param noteService {NoteService}
   * @param dataService {DataService}
   * @constructor
   */
  function MenuController($stateParams, $ionicPopup, noteService, dataService) {
    var _this = this;
    var _list = dataService.getList();

    _this.getTitle = noteService.getTitle;

    _this.clear = function() {
      dataService.clear();
    };

    _this.confirmClear = function() {
      $ionicPopup.confirm({
        title: 'Clear notes',
        template: 'Are you sure you want to clear the data and destroy all notes stored in this application?',
        okText: 'Confirm'
      }).then(function(res) {
        if (res) {
          _this.clear();
        }
      });
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

  MenuController.$inject = ['$stateParams', '$ionicPopup', 'noteService', 'dataService'];

  angular.module('starter.controllers').controller('MenuController', MenuController);
})();
