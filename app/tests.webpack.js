import 'angular';
import 'angular-mocks';
import 'angular-ui-router';

const context = require.context('components', true, /\.js$/);

context.keys().forEach(context);