import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import portalTemplates from 'portal-builder-ember/portal-component-generators/all';
import { get, set } from '@ember/object';
import LiquidEngine from 'portal-builder-ember/utils/liquid-renderer';

export default Controller.extend({
  portalData: service('portal-data'),
  headerInLayout: false,
  async addComponentToPreview(componentId) {
    let selectedOptions = portalTemplates[componentId]().selectedOptions;
    let component = portalTemplates[componentId]();
    // translate liquid template to htmlTemplate
    let htmlTemplate = await this.getHtml(component.constructLiquidString(selectedOptions));
    set(this, 'currentPageComp', htmlTemplate);
  },
  async getHtml(liquidTemplate) {
    let portalData = await this.portalData.loadData();
    let htmlTemplate = await LiquidEngine(liquidTemplate, { portal: portalData });
    return htmlTemplate;
  },
  actions: {
    setInLayout() {
      debugger;
      set(this, 'headerInLayout', !get(this, 'headerInLayout'));
      set(this, 'portalData.header', get(this, 'currentPageComp'));
    }
  }
});
