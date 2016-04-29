
/* global angular:false */
(function() {
   'use strict';

   angular
      .module('app.core')
      .constant('angular', angular)
      .constant('$', angular.element)
      .constant('jQuery', angular.element);
})();
