/**
 * Created by Oleg Galaburda on 17.12.15.
 */
(function() {
  'use strict';

  /**
   * @constructor
   */
  function NoteService($state) {

    this.getTitle = function(item) {
      var title = item.title;
      if (!title) {
        title = item.text;
        if (title.length > 25) {
          var space = title.replace(/\s+/g, ' ').match(/.{20,25}(?=\s)/);
          if (space) {
            title = space[0];
          } else {
            title = title.substr(0, 25);
          }
          title += '...';
        }
      }
      return title;
    };

    this.getId = function () {
      return String(Date.now());
    };

    this.goToCreate = function(){
      $state.go('app.create', {
        id: this.getId()
      });
    };
  }

  NoteService.$inject = ['$state'];

  angular.module('app.core').service('noteService', NoteService);
})();
