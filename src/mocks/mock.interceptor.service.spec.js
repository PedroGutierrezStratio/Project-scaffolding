describe('service: MockInterceptorService', () => {

   beforeEach(module('app.mock'));

   beforeEach(inject(function(_MockInterceptorService_) {
      this.MockInterceptorService = _MockInterceptorService_;
   }));

   it('should have a responseError method', function() {
      expect(this.MockInterceptorService.responseError).toBeDefined();
   });
});
