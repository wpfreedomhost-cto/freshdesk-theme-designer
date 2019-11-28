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
        let currentPage = this.portalData.currentPage;
        let array = this.portalData.pages[currentPage] || [];
        
        return array.map(item => item.htmlString).join(' ');
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
