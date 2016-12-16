import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngMaterial from 'angular-material';
import ngAnimate from 'angular-animate';
import ngAria from 'angular-aria';

import 'app.scss';

import { AppComponent, APP_NAME } from './app.component';
import { FooModule } from './components/foo/foo.module';

const AppModule = angular
  .module('app', [
    uiRouter,
    ngMaterial,
    ngAnimate,
    ngAria,
    FooModule
  ])
  .component(APP_NAME, AppComponent)
  .name;

export default AppModule;