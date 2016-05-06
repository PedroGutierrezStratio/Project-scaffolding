(function() {
   'use strict';

   angular
      .module('app.mock')
      .service('MockInterceptorService', MockInterceptorService);

   MockInterceptorService.$inject = ['MockStorage'];

   /* @ngInject */
   function MockInterceptorService(MockStorage) {
      this.response = response;
      this.responseError = responseError;

      function response(response) {
         return response;
      }

      function responseError(rejection) {
         if (MockStorage.hasMock(rejection.config.url, rejection.config.method)) {
            rejection.data = MockStorage.getData(rejection.config.url, rejection.config.method);
         } else {
            console.warn('$http error', rejection);
         }

         return rejection;
      }
   }
})();
