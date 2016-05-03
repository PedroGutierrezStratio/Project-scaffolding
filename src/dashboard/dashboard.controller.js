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
         var r = [0, 0, ...[1, 2]]
            .filter(_=>_ > 0)
            .map(_=>_ * 2);
         while (r.pop()) {

         }
      }
   }
})();
