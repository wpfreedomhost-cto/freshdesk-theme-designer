import Controller from '@ember/controller';
import { computed, get, set } from '@ember/object';
import { inject as service } from '@ember/service';

// const SIDEBAR_SECTION = {
//   portalHome: "Portal home",
//   solutionsHome: "Solutions home",
//   discussionsHome: "Discussions home",
//   discussions: "Discussions",
//   newTicket: "New ticket",
//   ticketList: "Ticket list",
//   ticketDetails: "Ticket details",
//   topicList: "Topic list"
// }
export default Controller.extend({
  portalData: service(),

  showSidebar: false,

  portalPages: computed({
    get() {
      return [
        {
          name: "Portal home",
          key: "portalHome"
        },
        {
          name: "Solutions home",
          key: "solutionsHome"
        },
        {
          name: "Discussions home",
          key: "discussionsHome"
        }
      ];
    }
  }),

  fullPageSource: computed('portalData.currentPage', {
      get() {
        let headerHtml = this.portalData.header.constructLiquidString(this.portalData.header.selectedOptions);
        let footerHtml = this.portalData.footer.constructLiquidString(this.portalData.footer.selectedOptions);
        let currentPage = this.portalData.currentPage;

        let pageComponenets = this.portalData.pages[currentPage] || [];
        return headerHtml + pageComponenets.map(comp => comp.constructLiquidString(comp.selectedOptions)).join(' ') + footerHtml;
      }
  }),

  styleSheet: computed({
    get() {
      return this.portalData.stylesheet;
    }
  }),

  actions: {
    toggleSidebar() {
      set(this, 'showSidebar', !get(this, 'showSidebar'))
    },
    transitionToCurrentPage(currentPage) {
      set(this, 'portalData.currentPage', currentPage);
    },

    foo() {
      
    }
  }
});
