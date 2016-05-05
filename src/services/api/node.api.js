(function() {
   'use strict';

   angular
      .module('app.service')
      .service('ApiNode', ApiNode);

   ApiNode.$inject = ['API_URL', '$resource'];

   function ApiNode(API_URL, $resource) {
      var url = API_URL + 'node/:id';
      return $resource(url);
   }
})();
