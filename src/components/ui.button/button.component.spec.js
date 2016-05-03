describe('component: Button', () => {

   beforeEach(module('app.components'));

   beforeEach(inject(function($rootScope, _$componentController_) {
      this.scope = $rootScope.$new();
      this.$componentController = _$componentController_;
   }));

   it('should to have a left icon if is not defined', function() {
      this.component = this.$componentController('stButton',
         null,
         {}
      );
      expect(this.component.isIconRight()).toBeFalsy();
   });

   it('should to have a right icon if has the attribute icon-right', function() {
      this.component = this.$componentController('stButton',
         null,
         {iconRight: ''}
      );
      expect(this.component.isIconRight()).toBeTruthy();
   });

   it('should to have a right icon if is defined', function() {
      this.component = this.$componentController('stButton',
         null,
         {iconRight: 'true'}
      );
      expect(this.component.isIconRight()).toBeTruthy();
   });
});
