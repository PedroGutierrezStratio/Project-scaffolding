(function() {
    'use strict';

    angular
        .module('app.dashboard')
        .controller('dashboardController', dashboardController);

    dashboardController.$inject = [];

    /* @ngInject */
    function dashboardController() {
        var vm = this;
        vm.title = 'dashboardController';

        activate();

        ////////////////

        function activate() {
        	
        }
    }
})();