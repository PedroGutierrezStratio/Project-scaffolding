(function() {
   'use strict';

   angular
      .module('app.dashboard')
      .controller('DashboardController', DashboardController);

   DashboardController.$inject = ['NodeService'];

   /* @ngInject */
   function DashboardController(NodeService) {
      var vm = this;
      vm.title = 'DashboardController';

      vm.nodeList = [];

      activate();

      ////////////////

      function activate() {
         _loadNodes();
      }

      function _loadNodes() {
         NodeService.getNodes()
            .then(success);

         function success(data) {
            vm.nodeList = data;
         }
      }
   }
})();
