import Controller from '@ember/controller';
import { run } from '@ember/runloop';

export default Controller.extend({
  init: function () {
    this._super();
    run.schedule("afterRender", this, function () {
      window.app.initialized().then((_client) => {
        window.client = _client;
      });
    });
  },
});
