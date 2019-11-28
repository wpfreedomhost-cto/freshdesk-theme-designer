import Controller from '@ember/controller';
import { run } from '@ember/runloop';
import { inject as service } from '@ember/service';

export default Controller.extend({
  portalData: service(),

  init: function () {
    this._super();
    run.schedule("afterRender", this, function () {
      window.app.initialized().then((_client) => {
        window.client = _client;
        this.portalData.loadData();
      });
    });
  },
});
