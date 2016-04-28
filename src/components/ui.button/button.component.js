/**
 * Components collection
 * @namespace app.components
 */

(function() {
   'use strict';

   /**
    * @description Button UI component 
    * @namespace app.components
    * @memberOf components
    */

   angular
      .module('app.components.button', [])
      .component('stButton', stButton());

   function stButton() {
      var component = {
         templateUrl: 'components/ui.button/button.html',
         controller: Controller,
         transclude: true,
         bindings: {
            icon: '@',
            iconRight: '@'
         }
      };
      
      return component;
   }

   stButton.$inject = [];
   /* @ngInject */
   function Controller() {
      var vm = this;

      vm.isIconRight = isIconRight;

      /**
       * @return {Boolean}
       */
      function isIconRight(){
         return !!vm.iconRight;
      }
   }
})();
