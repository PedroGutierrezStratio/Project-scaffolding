describe('service: MockInterceptorService', () => {
   var _MockStorage;
   var _rejectionDataMock = {name: 'test'};

   beforeEach(module('app.mock'));

   beforeEach(module(function($provide) {
      _MockStorage = {
         hasMock: () => {},
         getData: () => {}
      };

      spyOn(_MockStorage, 'hasMock');
      spyOn(_MockStorage, 'getData');

      $provide.value('MockStorage', _MockStorage);
   }));

   beforeEach(inject(function(_MockInterceptorService_) {
      this.MockInterceptorService = _MockInterceptorService_;
   }));

   it('should has a responseError method', function() {
      expect(this.MockInterceptorService.responseError).toBeDefined();
   });

   it('should return the same rejection if has not a mock', function() {
      var rejection = {
         config: {
            url: 'test',
            method: 'GET'
         }
      };

      expect(this.MockInterceptorService.responseError(rejection)).toBe(rejection);
   });

   it('should check the existence of a mock with the rejection information', function() {
      var rejection = {
         config: {
            url: 'test',
            method: 'GET'
         }
      };
      this.MockInterceptorService.responseError(rejection);

      expect(_MockStorage.hasMock).toHaveBeenCalledWith(rejection.config.url, rejection.config.method);
   });

   it('should set the mock data if has a mock for this rejection', function() {
      var rejection = {
         config: {
            url: 'test',
            method: 'GET'
         }
      };
      _MockStorage.hasMock.and.returnValue(true);

      this.MockInterceptorService.responseError(rejection);

      expect(_MockStorage.getData).toHaveBeenCalledWith(rejection.config.url, rejection.config.method);
   });

   it('should set the rejection.data with the mock data', function() {
      var rejection = {
         config: {
            url: 'test',
            method: 'GET'
         }
      };
      _MockStorage.hasMock.and.returnValue(true);
      _MockStorage.getData.and.returnValue(_rejectionDataMock);

      this.MockInterceptorService.responseError(rejection);

      expect(rejection.data).toEqual(_rejectionDataMock);
   });
});
