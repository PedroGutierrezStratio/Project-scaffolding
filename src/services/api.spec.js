describe('service Api*', () => {

   beforeEach(module('app.service'));

   beforeEach(inject(function(_$injector_) {
      this.$injector = _$injector_;

      this._APIS = angular.module('app.service')._invokeQueue
         .filter(_ => _[1] === 'service')
         .filter(_ => _[2][0].match(/^Api/))
         .map(_ => _[2][0]);
   }));

   it('should return a promise', function() {
      var self = this;
      this._APIS.forEach(function(service) {
         var actualService = self.$injector.get(service);
         expect([service, actualService.name]).toEqual([service, 'Resource']);
      });
   });
});
