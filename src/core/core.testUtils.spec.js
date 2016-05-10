(function() {
   'use strict';

   jasmine.utils = {
      fakePromise: fakePromise,
      paramToArray: paramToArray
   };

   function fakePromise(sendToFn, fn) {
      fn = fn instanceof Function ? fn : () => {};
      return function() {
         var resource = {
            $promise: {
               then: function(thenFn) {thenFn(sendToFn);}
            },
            then: function(thenFn) {thenFn(sendToFn);}
         };

         fn(sendToFn);

         return resource;
      };
   }

   function paramToArray(byDefault) {
      return function(input, property) {
         return input.map(element => element[property || byDefault]);
      };
   }

})();
