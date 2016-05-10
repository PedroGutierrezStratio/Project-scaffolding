describe('provider: MockStorage', () => {
   const _url = 'test/test';
   const _method = 'GET';
   const _name = 'Test';

   beforeEach(module('app.mock'));

   beforeEach(module(function($provide) {
      $provide.value('API_URL', '/api/');
   }));

   beforeEach(function() {
      var self = this;

      angular
         .module('test', [])
         .config(function(_MockStorageProvider_) {
            self.MockStorageProvider = _MockStorageProvider_;
         });

      module('app.mock', 'test');

      inject(function(_MockBaseAbstract_, _MockStorage_) {
         self.MockBaseAbstract = _MockBaseAbstract_;
         self.MockStorage = _MockStorage_;
      });
   });

   beforeEach(function() {
      this.mock = this.MockStorageProvider.getMockBase();
      this.spyDataGenerator = jasmine.createSpy('DataGenerator');

      this.mock
         .setName(_name)
         .addMethod(_method)
         .setUrl(_url)
         .setDataGenerator(this.spyDataGenerator)
         .storeMock();
   });

   it('should has a storeMock method', function() {
      expect(this.MockStorageProvider.storeMock).toBeDefined();
   });

   it('should has a getMockBase method', function() {
      expect(this.MockStorageProvider.getMockBase).toBeDefined();
   });

   it('should return a MockBaseAbstract instance', function() {
      expect(this.MockStorageProvider.getMockBase() instanceof this.MockBaseAbstract).toBeTruthy();
   });

   it('should return the list of all mocks', function() {
      expect(this.MockStorage.getMocksName()).toEqual(['Test']);
   });

   it('should return false when don\'t match any mock', function() {
      expect(this.MockStorage.getMock('not_exist', 'GET')).toBeFalsy();
   });

   it('should return true if has a mock', function() {
      expect(this.MockStorage.hasMock(_url, _method)).toBeTruthy();
      expect(this.MockStorage.hasMock('', _method)).toBeFalsy();
   });

   it('should return a mock setted', function() {
      expect(this.MockStorage.getMock(_url, _method)).toBe(this.mock);
   });

   it('should return the generated data passing the url parsed', function() {
      this.MockStorage.getData(_url, _method);

      expect(this.spyDataGenerator).toHaveBeenCalledWith(jasmine.anything(), ['test', 'test']);
   });

   it('should return the mock by name', function() {
      expect(this.MockStorage.getMockByName(_name)).toBe(this.mock);
      expect(this.MockStorage.getMockByName('not_exist')).toBeFalsy();
   });
});
