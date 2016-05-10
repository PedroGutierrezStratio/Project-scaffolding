(function() {
   'use strict';

   angular
      .module('app.service')
      .config(NodeMock);

   NodeMock.$inject = ['MockStorageProvider'];

   /* @ngInject */
   function NodeMock(MockStorageProvider) {
      var self = MockStorageProvider.getMockBase();

      self
         .setName('Node')
         .addMethod('GET')
         .setUrl('node/*')
         .setDataGenerator(dataGenerator)
         .storeMock();

      function dataGenerator(url = [null, 0]) {
         return self
            .getMockStorage()
            .getMockByName('NodeList')
            .getData()
            .filter(node => ~~node.id === ~~url[1])[0];
      }
   }
})();
