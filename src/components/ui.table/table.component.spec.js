describe('component: Table', () => {

   beforeEach(module('app.components'));

   beforeEach(inject(function($rootScope, _$componentController_) {
      this.scope = $rootScope.$new();
      this.$componentController = _$componentController_;
   }));

   it('should has a method hasKeys', function() {
      var component = this.$componentController('stTable',
         null,
         {}
      );
      expect(component.hasKeys).toBeDefined();
   });

   it('should has a method hasKeys witch return false when hasn\'t keys', function() {
      var component = this.$componentController('stTable',
         null,
         {}
      );
      expect(component.hasKeys()).toBeFalsy();
   });

   it('should has a method hasKeys witch return false when has a empty array', function() {
      var component = this.$componentController('stTable',
         null,
         {keys: []}
      );
      expect(component.hasKeys()).toBeFalsy();
   });

   it('should has a method hasKeys witch return true when has a array of keys', function() {
      var component = this.$componentController('stTable',
         null,
         {keys: ['key1', 'key2']}
      );
      expect(component.hasKeys()).toBeTruthy();
   });
});
