(function() {
   'use strict';

   angular
      .module('app.core')
      .constant('HOST_URL', location.protocol + '//' + location.host + '/')
      .constant('API_URL', '//' + location.host + '/api/');
})();
