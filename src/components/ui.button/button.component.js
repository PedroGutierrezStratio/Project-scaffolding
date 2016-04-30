/**
 * Button UI component
 *
 * @memberOf app.components
 * @namespace app.components.button
 */

(function() {
   'use strict';

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
       * @name  isIconRight
       * @description check the position of the button
       * @return {Boolean}
       * @memberOf app.components.button
       */
      function isIconRight() {
         return !!vm.iconRight;
      }
   }
})();
