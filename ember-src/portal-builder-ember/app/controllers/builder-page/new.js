import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { set } from '@ember/object';
import portalTemplates from 'portal-builder-ember/portal-component-generators/all';
import { computed } from '@ember/object';
import LiquidEngine from 'portal-builder-ember/utils/liquid-renderer';

export default Controller.extend({
  portalData: service(),

  async getHtml(liquidTemplate) {
    let portalData = await this.portalData.loadData();
    let htmlTemplate = await LiquidEngine(liquidTemplate, { portal: portalData });
    return htmlTemplate;
  },
  currentPageComp: computed({
    get() {
      return this.portalData.pages[this.model.pageName] || {};
    }
  }),

  iframeSrc: computed('portalData.pages.pageName', 'model.{pageName,component}', {
    get() {
      let currentPageComp = this.portalData.pages[this.model.pageName]
      if (currentPageComp) {
        return currentPageComp.htmlString;
      }
      return 'hello';
    }
  }),

  async addComponentToPreview({componentId, pageName}) {
    let selectedOptions = portalTemplates[componentId]().selectedOptions;
    let component = portalTemplates[componentId]();
    // translate liquid template to htmlTemplate
    let htmlTemplate = await this.getHtml(component.constructLiquidString(selectedOptions));
    component.htmlString = htmlTemplate;

    set(this.portalData.pages, pageName, component);
    this.notifyPropertyChange('iframeSrc');
  }
});
