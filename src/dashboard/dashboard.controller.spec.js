describe('controller: DashboardController', () => {

   beforeEach(module('app.dashboard'));

   beforeEach(inject(function(_$controller_) {
      this.ctrl = _$controller_('DashboardController', {});
   }));

   it('should to be initialized without errors', function() {
      expect(this.ctrl).toBeDefined();
   });
});
