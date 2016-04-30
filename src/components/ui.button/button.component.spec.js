
describe('component: Button', () => {

   beforeEach(module('app.components'));

   beforeEach(inject(function($rootScope, _$componentController_) {
      this.scope = $rootScope.$new();
      this.$componentController = _$componentController_;
   }));

   it('should has a left icon if is not defined', function() {
      this.component = this.$componentController('stButton',
         null,
         {}
      );
      expect(this.component.isIconRight()).toBeFalsy();
   });

   it('should has a right icon if is defined', function() {
      this.component = this.$componentController('stButton',
         null,
         {iconRight: 'true'}
      );
      expect(this.component.isIconRight()).toBeTruthy();
   });
});
