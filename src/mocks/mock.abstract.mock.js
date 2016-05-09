(function() {
   'use strict';

   angular
      .module('app.mock')
      .constant('MockBaseAbstract', MockBaseAbstract);

   function MockBaseAbstract(MockStorage, API_URL) {
      var self = this;

      const METHODS = new Set(['POST', 'GET', 'PUT', 'PATCH', 'DELETE']);

      var _name = null;
      const _methods = new Set();
      const _config = new Map();
      var _url = '';
      var _dataGenerator = false;
      const _mockStorage = MockStorage.$get();

      self.setName = setName;
      self.getName = getName;

      self.getMockStorage = getMockStorage;

      self.getData = getData;

      self.addMethod = addMethod;
      self.getMethods = getMethods;
      self.hasMethod = hasMethod;

      self.setConfig = setConfig;
      self.getConfig = getConfig;

      self.setUrl = setUrl;
      self.getUrl = getUrl;
      self.matchUrl = matchUrl;

      self.setDataGenerator = setDataGenerator;
      self.getDataGenerator = getDataGenerator;

      self.storeMock = storeMock;

      self._genarateRegexFromUrlPattern = _genarateRegexFromUrlPattern;

      ////////////////

      function setName(name) {
         _name = name;
         return self;
      }
      function getName() {
         return _name;
      }

      function getMockStorage() {
         return _mockStorage;
      }

      function getData(url) {
         return _dataGenerator(MockStorage, url);
      }

      function addMethod(method) {
         if (METHODS.has(method)) {
            _methods.add(method);
         }
         return self;
      }
      function getMethods() {
         return [..._methods];
      }
      function hasMethod(method) {
         return _methods.has(method);
      }

      function setConfig(key, value) {
         _config.set(key, value);
         return self;
      }
      function getConfig(key) {
         return _config.get(key);
      }

      function setUrl(url) {
         _url = url;
         return self;
      }
      function getUrl() {
         return _url;
      }
      function matchUrl(url) {
         var urlRegex = _genarateRegexFromUrlPattern(_url);
         return url.replace(API_URL, '').replace(/\/$/, '').match(urlRegex);
      }

      function setDataGenerator(dataGenerator) {
         _dataGenerator = dataGenerator;
         return self;
      }
      function getDataGenerator() {
         return _dataGenerator;
      }

      function storeMock() {
         if (_methods.size === 0) {
            METHODS.forEach(method => _methods.add(method));
         }
         if (!_name) {
            throw 'The mock needs a name.';
         }
         if (!_url) {
            throw 'The mock ' + _name + ' needs a URL pattern.';
         }
         if (!_dataGenerator) {
            throw 'The mock ' + _name + ' needs a data generator.';
         }
         if (!(_dataGenerator instanceof Function)) {
            throw 'The mock ' + _name + ' needs a function as data generator.';
         }
         MockStorage.storeMock(self);
      }

      function _genarateRegexFromUrlPattern(url) {
         url = url.replace(/([\.\?\/\\])/g, '\\$1');
         url = url.replace('*', '([^/]*)');
         return new RegExp('^' + url + '$');
      }
   }
})();
