import angular from 'angular';
import { FOO_SERVICE_NAME, FooService } from './foo.service';
import { FOO_COMPONENT_NAME, FooComponent } from './foo.component';

export const FooModule = angular
  .module('app.foo', [])
  .service(FOO_SERVICE_NAME, FooService)
  .component(FOO_COMPONENT_NAME, FooComponent)
  .name;