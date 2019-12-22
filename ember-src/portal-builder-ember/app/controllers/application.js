import Controller from '@ember/controller';
import { run } from '@ember/runloop';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class Application extends Controller { 
  @service portalData;

  @tracked
  portalDataLoaded = false;

  constructor() {
    super(...arguments);
    
    run.schedule("afterRender", this, function () {
      window.app.initialized().then( async (_client) => {
        window.client = _client;
        await this.portalData.loadData();

        this.portalDataLoaded = true;
      });
    });
  }

}
