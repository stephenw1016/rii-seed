describe('foo.component.js |', () => {

  beforeEach(angular.mock.module('app.foo'));

  describe('controller |', () => {
    let componentCtrl;

    beforeEach(() => {
      angular.mock.inject((_$componentController_) => {
        componentCtrl = _$componentController_;
      });
    });

    it('should...', () => {
      let ctrl = componentCtrl('foo', null, {});
      expect(ctrl).toBeDefined();
      expect(ctrl.items).toEqual(['1', '2', '3']);
    });
  });

});