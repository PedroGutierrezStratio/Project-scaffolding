(function() {
   'use strict';

   angular
      .module('app.mock')
      .provider('MockStorage', MockStorage);

   MockStorage.$inject = ['API_URL', 'MockBaseAbstract'];

   /* @ngInject */
   function MockStorage(API_URL, MockBaseAbstract) {
      var self = this;

      var _mockStorage = new Map();

      this.storeMock = storeMock;
      this.getMockBase = getMockBase;

      this.$get = $get;

      ////////////////

      function $get() {
         return {
            hasMock: hasMock,
            getMock: getMock,
            getMockByName: getMockByName,
            getData: getData
         };
      }

      function getMockBase() {
         return new MockBaseAbstract(self, API_URL);
      }

      function storeMock(mock) {
         _mockStorage.set(mock.getName(), mock);
      }

      function hasMock(url, method) {
         return !!getMock(url, method);
      }
      function getMock(url, method) {
         var result = false;
         _mockStorage.forEach(mock => {
            if (!result && mock.hasMethod(method) && mock.matchUrl(url)) {
               result = mock;
            }
         });
         return result;
      }
      function getMockByName(name) {
         return _mockStorage.get(name) || false;
      }
      function getData(url, method) {
         return getMock(url, method).getData(_prepareUrl(url));
      }
      function _prepareUrl(url) {
         url = url.replace(API_URL, '');
         return url.split('/');
      }
   }
})();
