(function() {
   'use strict';

   angular
      .module('app.service')
      .service('NodeService', NodeService);

   NodeService.$inject = ['ApiNode'];

   /* @ngInject */
   function NodeService(ApiNode) {
      var self = this;

      self.getNodes = getNodes;
      self.getNodeById = getNodeById;

      ////////////////

      /**
       * @name getNodes
       * @description return the list of nodes
       * @return {Resource[]} Array of nodes
       */
      function getNodes() {
         return ApiNode.query().$promise;
      }

      /**
       * @name getNodeById
       * @description return a node with a specific id
       * @param  {String} id  Node id
       * @return {Resource}   Node
       */
      function getNodeById(id = 0) {
         return ApiNode.get({id: id}).$promise;
      }
   }
})();
