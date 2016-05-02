(function() {
   'use strict';

   angular
      .module('app.core')
      .service('ComponentVariant', ComponentVariant);

   ComponentVariant.$inject = [];
   /* @ngInject */
   function ComponentVariant() {
      var self = this;

      self.setVariant = setVariant;

      ////////////////

      /**
       * @name setVariant
       * @description set the variants list (separated with spaces)
       * @param {string} variant is a list separated with strings
       * @return {variantChecker}
       */
      function setVariant(variant) {
         var _variants = [];
         if (variant) {
            _variants = variant.split(' ');
         }

         return {hasVariant: function(variant) {
            return _variants.indexOf(variant) !== -1;
         }};
      }
   }
})();
