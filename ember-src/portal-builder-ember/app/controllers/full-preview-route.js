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
  data: service('portal-data'),
  showSidebar: true,
  currentPage: 'html',
  sidebarSection: computed({
    get() {
      return SIDEBAR_SECTION;
    }
  }),
  actions: {
    toggleSidebar() {
      set(this, 'showSidebar', !get(this, 'showSidebar'))
    },
    transitionToCurrentPage(currentPage) {
      set(this, 'currentPage', currentPage);
    }
  }
});
