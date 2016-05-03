describe('component: heading', () => {

   beforeEach(module('app.components'));

   beforeEach(inject(function(_$compile_, _$rootScope_) {
      this.$compile = _$compile_;
      this.$rootScope = _$rootScope_;
   }));

   it('should return false for hasTransclude when hasn\'t transclude', function() {
      var element = this.$compile('<st-heading></st-heading>')(this.$rootScope);

      this.$rootScope.$digest();

      expect(element.controller('stHeading').hasTransclude()).toBeFalsy();
   });

   it('should return true for hasTransclude when has transclude', function() {
      var element = this.$compile('<st-heading>has transclude</st-heading>')(this.$rootScope);

      this.$rootScope.$digest();

      expect(element.controller('stHeading').hasTransclude()).toBeTruthy();
   });
});
