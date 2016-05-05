(function() {
   'use strict';

   angular
      .module('app.core')
      .config(ResourceConfiguration);

   ResourceConfiguration.$inject = ['$resourceProvider'];

   /* @ngInject */
   function ResourceConfiguration($resourceProvider) {
      $resourceProvider.defaults.stripTrailingSlashes = false;
   }
})();
