describe('controller: DashboardController', () => {

   beforeEach(module('app.dashboard'));

   beforeEach(inject(function(_$controller_, _$injector_, _MockStorage_) {
      this._mockGetNodes = _MockStorage_.getMockByName('NodeList').getData();

      this.NodeService = _$injector_.get('NodeService');

      spyOn(this.NodeService, 'getNodes').and.callFake(jasmine.utils.fakePromise(this._mockGetNodes));
      spyOn(this.NodeService, 'getNodeById').and.callFake(jasmine.utils.fakePromise(this._mockGetNodes[0]));

      this.ctrl = _$controller_('DashboardController', {
         NodeService: this.NodeService
      });
   }));

   it('should to be initialized without errors', function() {
      expect(this.ctrl).toBeDefined();
   });

   it('should load a list of nodes when is initialized', function() {
      expect(this.NodeService.getNodes).toHaveBeenCalled();
      expect(this.ctrl.nodeList).toEqual(this._mockGetNodes);
   });
});
