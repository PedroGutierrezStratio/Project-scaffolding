describe('service: NodeService', () => {

   beforeEach(module('app.service'));

   beforeEach(inject(function(_NodeService_) {
      this.service = _NodeService_;
   }));

   it('should has a getNodes method witch return a promise', function() {
      expect(this.service.getNodes).toBeDefined();
      expect(this.service.getNodes().$$state).toBeDefined();
   });

   it('should has a getNodeById method witch return a promise', function() {
      expect(this.service.getNodeById).toBeDefined();
      expect(this.service.getNodeById().$$state).toBeDefined();
   });

});
