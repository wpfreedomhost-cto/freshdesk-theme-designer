import Controller from '@ember/controller';
import { run } from '@ember/runloop';
import { inject as service } from '@ember/service';
import { set } from '@ember/object';

export default Controller.extend({
  portalData: service(),

  portalDataLoaded: false,

  init: function () {
    this._super();
    run.schedule("afterRender", this, function () {
      window.app.initialized().then( async (_client) => {
        window.client = _client;
        await this.portalData.loadData();

        set(this, 'portalDataLoaded', true);
      });
    });
  },
});
