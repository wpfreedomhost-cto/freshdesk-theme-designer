import Controller from '@ember/controller';
import { computed, get, set } from '@ember/object';
import { inject as service } from '@ember/service';

const SIDEBAR_SECTION = {
  portalHome: "Portal home",
  solutionsHome: "Solutions home",
  discussionsHome: "Discussions home",
  discussions: "Discussions",
  newTicket: "New ticket",
  ticketList: "Ticket list",
  ticketDetails: "Ticket details",
  topicList: "Topic list"
}
export default Controller.extend({
  portalData: service('portal-data'),

  showSidebar: false,

  sidebarSection: computed({
    get() {
      return SIDEBAR_SECTION;
    }
  }),

  fullPageSource: computed('portalData.currentPage', {
      get() {
        // let headerHtml = this.portalData.header.htmlString;
        // let footerHtml = this.portalData.footer.htmlString;
        let currentPage = this.portalData.currentPage;
        let headerHtml = '';
        let footerHtml = '';
        let pageComponenets = this.portalData.pages[currentPage] || [];
        return headerHtml + pageComponenets.map(comp => comp.constructLiquidString(comp.selectedOptions)).join(' ') + footerHtml;
      }
  }),

  actions: {
    toggleSidebar() {
      set(this, 'showSidebar', !get(this, 'showSidebar'))
    },
    transitionToCurrentPage(currentPage) {
      set(this, 'portalData.currentPage', currentPage);
    }
  }
});
