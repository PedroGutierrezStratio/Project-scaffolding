(function() {
   'use strict';

   angular
      .module('app.dashboard')
      .controller('DashboardController', DashboardController);

   DashboardController.$inject = [];

   /* @ngInject */
   function DashboardController() {
      var vm = this;
      vm.title = 'DashboardController';

      activate();

      ////////////////

      function activate() {
         [...[1,2]].map(_=>_ * 2);
      }
   }
})();
