import Component from '@ember/component';
import { computed, set } from '@ember/object';
import { inject as service } from '@ember/service';
import portalTemplates from 'portal-builder-ember/portal-component-generators/all';


const PAGES = {
  portalHome: "Portal home",
  solutionsHome: "Solutions home",
  discussionsHome: "Discussions home",
  discussions: "Discussions",
  newTicket: "New ticket",
  ticketList: "Ticket list",
  ticketDetails: "Ticket details",
  topicList: "Topic list"
}

export default Component.extend({
  portalData: service('portal-data'),
  layoutView: true,
  pages: computed({
    get() {
      return PAGES;
    }
  }),

  headerLiquidTemplate: computed({
    get() {
      let template = portalTemplates['header1']();
      let selectedOptions = template.selectedOptions;
      let component = template;
      return component.constructLiquidString(selectedOptions);
    }
  }),

  footerLiquidTemplate: computed({
    get() {
      let template = portalTemplates['footer1']();
      let selectedOptions = template.selectedOptions;
      let component = template;
      return component.constructLiquidString(selectedOptions);
    }
  }),
  
  init() {
    this._super(...arguments);
    set(this, 'portalData.currentPage', "portalHome");
  },
  pageString: computed('portalData.currentPage', {
      get() {
        let currentPage = this.portalData.currentPage;
        let array = this.portalData.pages[currentPage] || [];
        return array.map(item => item.htmlString).join(' ');
      }
  }),
  actions: {
    selectView(view) {
      if(view === 'layout') {
        set(this, 'layoutView', true);
      } else {
        set(this, 'layoutView', false);
      }
    },
    pageAction(page) {
      set(this, 'portalData.currentPage', page);
    }
  }
});
