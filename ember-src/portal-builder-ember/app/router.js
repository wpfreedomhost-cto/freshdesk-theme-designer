import EmberRouter from '@ember/routing/router';
import config from './config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
  this.route('index', { path: '/' });
  this.route('style-guide');
  this.route('select-font-style');
  this.route('select-color-theme');
  this.route('full-preview-route');
  this.route('rendered-html');
  this.route('builder-page', function() {
    this.route('new', { path: ':component_id/:page_name/new' });
    this.route('edit', {path: ':component_id/:page_name' });
  });
  this.route('header');
  this.route('footer');
});
