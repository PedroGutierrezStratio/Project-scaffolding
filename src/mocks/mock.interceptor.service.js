(function() {
   'use strict';

   angular
      .module('app.mock')
      .service('MockInterceptorService', MockInterceptorService);

   MockInterceptorService.$inject = ['MockStorage'];

   /* @ngInject */
   function MockInterceptorService(MockStorage) {
      this.responseError = responseError;

      function responseError(rejection) {
         if (MockStorage.hasMock(rejection.config.url, rejection.config.method)) {
            rejection.data = MockStorage.getData(rejection.config.url, rejection.config.method);
         }

         return rejection;
      }
   }
})();
