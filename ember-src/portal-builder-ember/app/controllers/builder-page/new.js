import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { set } from '@ember/object';
import portalTemplates from 'portal-builder-ember/portal-component-generators/all';
import { computed } from '@ember/object';

export default Controller.extend({
  portalData: service(),


  iframeSrc: computed('portalData.pages', 'model.{pageName,component}', {
    get() {
      return this.portalData.pages[this.model.pageName].htmlString;
    }
  }),

  addComponentToPreview({componentId, pageName}) {
    let selectedOptions = portalTemplates[componentId]().selectedOptions;
    let component = portalTemplates[componentId]();
    component.htmlString = component.constructLiquidString(selectedOptions);

    set(this.portalData.pages, pageName, component);
  }
});
