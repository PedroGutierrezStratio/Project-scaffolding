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
            controller: 'dashboardController',
            controllerAs: 'vm',
            templateUrl: 'dashboard/dashboard.html'
         });
   }
})();
