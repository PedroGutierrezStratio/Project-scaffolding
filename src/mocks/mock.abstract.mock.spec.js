describe('class: MockBaseAbstract', () => {

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

      inject(function(_MockBaseAbstract_, _MockStorage_, _API_URL_) {
         self.MockBaseAbstract = _MockBaseAbstract_;
         self.MockStorage = _MockStorage_;
         self.API_URL = _API_URL_;
      });
   });

   beforeEach(function() {
      this.MockInstance = new this.MockBaseAbstract(this.MockStorageProvider, this.API_URL);
   });

   it('should be a instanciable class', function() {
      expect(this.MockBaseAbstract.prototype).toBeDefined();
   });

   it('should has a MockStorage service', function() {
      expect(this.MockInstance.getMockStorage()).toEqual(this.MockStorage);
   });

   it('should has a setters witch return the instance', function() {
      expect(this.MockInstance.setName()).toBe(this.MockInstance);
      expect(this.MockInstance.addMethod()).toBe(this.MockInstance);
      expect(this.MockInstance.setUrl()).toBe(this.MockInstance);
      expect(this.MockInstance.setDataGenerator()).toBe(this.MockInstance);
      expect(this.MockInstance.setConfig()).toBe(this.MockInstance);
   });

   it('should set and get the name', function() {
      var name = 'Test';
      this.MockInstance.setName(name);
      expect(this.MockInstance.getName()).toBe(name);
   });

   it('should set and get the config', function() {
      var key = 'number';
      var value = 20;
      this.MockInstance.setConfig(key, value);
      expect(this.MockInstance.getConfig(key)).toBe(value);
   });

   it('should set and get the URL', function() {
      var url = 'test/test';
      this.MockInstance.setUrl(url);
      expect(this.MockInstance.getUrl()).toBe(url);
   });

   it('should set and get the data generator', function() {
      var f = () => {};
      this.MockInstance.setDataGenerator(f);
      expect(this.MockInstance.getDataGenerator()).toBe(f);
   });

   it('should add, get and has for method list', function() {
      var method = 'GET';
      this.MockInstance.addMethod(method);
      expect(this.MockInstance.getMethods()).toEqual([method]);
      expect(this.MockInstance.hasMethod(method)).toBeTruthy();
   });

   it('should set all the posibles methods if is empty', function() {
      try {
         this.MockInstance.storeMock();
      } catch (e) {}

      expect(this.MockInstance.getMethods().length).toBeGreaterThan(1);
   });

   it('should throw error when try to store without any required attribute', function() {
      expect(this.MockInstance.storeMock).toThrowError();
      this.MockInstance.setName('Test');
      expect(this.MockInstance.storeMock).toThrowError();
      this.MockInstance.setUrl('test/test');
      expect(this.MockInstance.storeMock).toThrowError();
      this.MockInstance.setDataGenerator('string');
      expect(this.MockInstance.storeMock).toThrowError();
      this.MockInstance.setDataGenerator(() => {});
      expect(this.MockInstance.storeMock).not.toThrowError();
   });

});
