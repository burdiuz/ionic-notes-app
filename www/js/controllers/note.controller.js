/**
 * Created by Oleg Galaburda on 16.12.15.
 */
(function() {

  function NoteController(dataService) {
  }

  NoteController.$inject = ['$ionicModal', 'dataService'];

  angular.module('starter.controllers').controller('NoteController', NoteController);
})();
