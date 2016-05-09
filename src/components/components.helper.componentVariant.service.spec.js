describe('service: ComponentVariant', () => {

   beforeEach(module('app.components'));

   beforeEach(inject(function(_ComponentVariant_) {
      this.ComponentVariant = _ComponentVariant_;
   }));

   it('should have a setVariant method', function() {
      expect(this.ComponentVariant.setVariant).toBeDefined();
   });

   it('should have a setVariant which returns a object with hasVariant method', function() {
      expect(this.ComponentVariant.setVariant().hasVariant).toBeDefined();
   });

   it('should check if has a variant', function() {
      var variant = 'variant';

      expect(this.ComponentVariant.setVariant(variant).hasVariant()).toBeFalsy();
      expect(this.ComponentVariant.setVariant(variant).hasVariant('test')).toBeFalsy();
      expect(this.ComponentVariant.setVariant(variant).hasVariant(variant)).toBeTruthy();
      expect(this.ComponentVariant.setVariant(variant).hasVariant(variant + '-')).toBeFalsy();
   });

   it('should check if has a variant on a list', function() {
      var variant = 'variant test foo bar';

      expect(this.ComponentVariant.setVariant(variant).hasVariant()).toBeFalsy();
      expect(this.ComponentVariant.setVariant(variant).hasVariant(' ')).toBeFalsy();

      expect(this.ComponentVariant.setVariant(variant).hasVariant('variant')).toBeTruthy();
      expect(this.ComponentVariant.setVariant(variant).hasVariant('test')).toBeTruthy();
      expect(this.ComponentVariant.setVariant(variant).hasVariant('foo')).toBeTruthy();

      expect(this.ComponentVariant.setVariant(variant).hasVariant('variant ')).toBeFalsy();
      expect(this.ComponentVariant.setVariant(variant).hasVariant('test ')).toBeFalsy();
      expect(this.ComponentVariant.setVariant(variant).hasVariant('foo ')).toBeFalsy();
   });
});
