import Route from '@ember/routing/route';

export default class FullPreviewScreen extends Route {
  setupController(controller) {
    super.setupController(...arguments);

    controller.notifyPropertyChange('fullPageSource');
  }
}
