(function() {
   'use strict';

   angular
      .module('app.mock')
      .config(MockNode);

   MockNode.$inject = ['MockStorageProvider'];

   /* @ngInject */
   function MockNode(MockStorageProvider) {
      var self = MockStorageProvider.getMockBase();

      self
         .setName('Node')
         .addMethod('GET')
         .setUrl('node/*')
         .setDataGenerator(dataGenerator)
         .storeMock();

      function dataGenerator(MockStorage, url = 0) {
         return MockStorage
            .getMockByName('NodeList')
            .getData()
            .filter(node => ~~node.id === ~~url[1])[0];
      }
   }
})();
