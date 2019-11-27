import EmberRouter from '@ember/routing/router';
import config from './config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
  this.route('index', { path: '/' });
  this.route('style-guide');
  this.route('select-color-theme');
  this.route('full-preview-route');
  this.route('builder-page', function() {
    this.route('new', { path: ':component_id/new' });
    this.route('edit', {path: ':component_id' });
  });
});
