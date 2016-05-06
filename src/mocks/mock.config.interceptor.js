(function() {
   'use strict';

   angular
      .module('app.mock')
      .config(InterceptorConfiguration);

   InterceptorConfiguration.$inject = ['$httpProvider'];

   /* @ngInject */
   function InterceptorConfiguration($httpProvider) {
      $httpProvider.interceptors.push('MockInterceptorService');
   }
})();
