(function() {
   'use strict';

   angular
      .module('app.dashboard')
      .config(AppRoutes);

   AppRoutes.$inject = ['$stateProvider'];

   function AppRoutes($stateProvider) {
      $stateProvider
         .state('dashboard', {
            url: '/',
            controller: 'DashboardController',
            controllerAs: 'vm',
            templateUrl: 'dashboard/dashboard.html'
         });
   }
})();
