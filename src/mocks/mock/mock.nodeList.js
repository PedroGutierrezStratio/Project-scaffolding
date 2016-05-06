(function() {
   'use strict';

   angular
      .module('app.mock')
      .config(MockNodeList);

   MockNodeList.$inject = ['MockStorageProvider'];

   /* @ngInject */
   function MockNodeList(MockStorageProvider) {
      var self = MockStorageProvider.getMockBase();

      self
         .setName('NodeList')
         .addMethod('GET')
         .setUrl('node')
         .setDataGenerator(dataGenerator)
         .storeMock();

      function dataGenerator() {
         return [
            {id: 0, ip: '10.200.0.12', type: 'master', status: 'OK', cpu: 0.3},
            {id: 1, ip: '10.200.0.13', type: 'slave', status: 'OK', cpu: 0.63},
            {id: 2, ip: '10.200.0.14', type: 'slave', status: 'OK', cpu: 0.68},
            {id: 3, ip: '10.200.0.15', type: 'master', status: 'OK', cpu: 0.01},
            {id: 4, ip: '10.200.0.16', type: 'slave', status: 'OK', cpu: 0.84},
            {id: 5, ip: '10.200.0.17', type: 'slave', status: 'KO', cpu: 0.57},
            {id: 6, ip: '10.200.0.18', type: 'slave', status: 'KO', cpu: 1},
            {id: 7, ip: '10.200.0.19', type: 'slave', status: 'OK', cpu: 0.92},
            {id: 8, ip: '10.200.0.20', type: 'master', status: 'OK', cpu: 0.12},
            {id: 9, ip: '10.200.0.21', type: 'slave', status: 'OK', cpu: 0.41},
            {id: 10, ip: '10.200.0.22', type: 'slave', status: 'OK', cpu: 0.2},
            {id: 11, ip: '10.200.0.23', type: 'slave', status: 'OK', cpu: 0.2}
         ];
      }
   }
})();
