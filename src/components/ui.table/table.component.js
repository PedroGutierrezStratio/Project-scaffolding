/**
 * Table UI component
 *
 * @memberOf app.components
 * @namespace app.components.table
 */

(function() {
   'use strict';

   angular
      .module('app.components.table', [])
      .component('stTable', stTable());

   function stTable() {
      var component = {
         templateUrl: 'components/ui.table/table.html',
         controller: Controller,
         bindings: {
            caption: '@',
            heading: '=',
            content: '=',
            keys: '='
         }
      };

      return component;
   }

   Controller.$inject = ['ComponentVariant'];

   /* @ngInject */
   function Controller(ComponentVariant) {
      var vm = this;

      vm.hasVariant = ComponentVariant.setVariant(vm.variant).hasVariant;
      vm.hasKeys = hasKeys;

      /**
       * @name hasKeys
       * @description check if is defined the column keys
       * @return {Boolean}
       * @memberOf app.components.table
       */
      function hasKeys() {
         return vm.keys instanceof Array && vm.keys.length > 0;
      }
   }
})();
