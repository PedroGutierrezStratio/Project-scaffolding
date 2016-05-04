/**
 * Heading UI component
 *
 * @memberOf app.components
 * @namespace app.components.heading
 */

(function() {
   'use strict';

   angular
      .module('app.components.heading', [])
      .component('stHeading', stHeading());

   function stHeading() {
      var component = {
         templateUrl: 'components/ui.heading/heading.html',
         controller: Controller,
         transclude: true,
         replace: true,
         bindings: {
            icon: '@',
            message: '@',
            variant: '@'
         }
      };

      return component;
   }

   stHeading.$inject = ['ComponentVariant', '$transclude'];
   /* @ngInject */
   function Controller(ComponentVariant, $transclude) {
      var vm = this;

      var _hasTransclude = false;

      vm.hasTransclude = hasTransclude;
      vm.hasVariant = ComponentVariant.setVariant(vm.variant).hasVariant;

      vm.$onInit = $onInit;

      function $onInit() {
         $transclude(clone => _hasTransclude = !!clone.length);
      }

      /**
       * @name hasTransclude
       * @description check if has a transclude
       * @return {Boolean}
       * @memberOf app.components.heading
       */
      function hasTransclude() {
         return _hasTransclude;
      }
   }
})();
