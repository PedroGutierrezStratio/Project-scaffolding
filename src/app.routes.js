(function() {
   'use strict';

   angular
      .module('app')
      .config(AppRoutes);

   AppRoutes.$inject = ['$urlRouterProvider'];

   function AppRoutes($urlRouterProvider) {
      $urlRouterProvider.otherwise('/');
   }
})();
