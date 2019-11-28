import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { set } from '@ember/object';
import portalTemplates from 'portal-builder-ember/portal-component-generators/all';
import { computed } from '@ember/object';
import LiquidEngine from 'portal-builder-ember/utils/liquid-renderer';

export default Controller.extend({
  portalData: service(),
  router: service(),

  async getHtml(liquidTemplate) {
    let portalData = await this.portalData.loadData();
    let htmlTemplate = await LiquidEngine(liquidTemplate, { portal: portalData });
    return htmlTemplate;
  },

  currentPageComp: computed({
    get() {
      return null;
    }
  }),

  iframeSrc: computed('currentPageComp', {
    get() {
      let currentPageComp = this.currentPageComp;

      if (currentPageComp) {
        return currentPageComp;
      }

      return { htmlString: '<div>loading</div>' };
    }
  }),

  async addComponentToPreview({componentId, pageName}) {
    let selectedOptions = portalTemplates[componentId]().selectedOptions;
    let component = portalTemplates[componentId]();
    // translate liquid template to htmlTemplate
    let htmlTemplate = await this.getHtml(component.constructLiquidString(selectedOptions));
    component.htmlString = htmlTemplate;

    set(this, 'currentPageComp', component);
  },

  actions: {
    async updateField(currentPageComp, option, selected) {
      if (option.type === 'dropdown') {
        currentPageComp.selectedOptions[option.keyName] = selected;
        let htmlTemplate = await this.getHtml(currentPageComp.constructLiquidString(currentPageComp.selectedOptions));
        set(currentPageComp, 'htmlString', htmlTemplate);
        
        this.notifyPropertyChange('currentPageComp');

        // set(this, 'currentPageComp', currentPageComp);
      } else if(option.type === 'text') {
        console.log('text called');
      }
    },

    doneSave() {
      this.portalData.pages[this.model.pageName].push(this.currentPageComp);
      
      this.router.transitionTo('full-preview-route');
    }
  }
});
