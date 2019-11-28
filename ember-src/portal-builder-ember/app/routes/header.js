import Route from '@ember/routing/route';

export default Route.extend({

  setupController(controller) {
    this._super(controller);
    controller.addComponentToPreview('header1');
  }
});
