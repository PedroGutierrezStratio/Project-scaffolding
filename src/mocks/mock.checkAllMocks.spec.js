describe('config: All configurated mocks', () => {

   beforeEach(module('app'));

   beforeEach(module(function($provide) {
      $provide.value('API_URL', '/api/');
   }));

   beforeEach(inject(function(_MockStorage_) {
      this.MockStorage = _MockStorage_;
   }));

   it('should be return data without errors', function() {
      var self = this;

      this.MockStorage.getMocksName().forEach(mockName => {
         var dataGenerator = self.MockStorage.getMockByName(mockName).getDataGenerator();
         expect(dataGenerator).not.toThrow();
      });
   });

});
