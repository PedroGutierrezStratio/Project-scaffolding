(function() {
   'use strict';

   angular
      .module('app.core')
      .config(ResourceConfiguration);

   ResourceConfiguration.$inject = ['$translateProvider'];

   /* @ngInject */
   function ResourceConfiguration($translateProvider) {
      $translateProvider.preferredLanguage('en');
      $translateProvider.useSanitizeValueStrategy('sanitize');
   }
})();
