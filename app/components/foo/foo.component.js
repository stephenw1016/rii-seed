import template from './foo.html';
import './foo.scss';

export const FOO_COMPONENT_NAME = 'foo';

export const FooComponent = {
  template,
  bindings: {
    name: '<'
  },
  controller: class FooComponent {
    constructor (FooService) {
      this.items = FooService.getFoo();
    }
    $onInit () {
      console.info('initing FooComponent');
    }
  }
};