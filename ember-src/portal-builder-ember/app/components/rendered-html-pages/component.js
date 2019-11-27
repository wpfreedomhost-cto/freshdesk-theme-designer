import Component from '@ember/component';
import { computed, set } from '@ember/object';
import { inject as service } from '@ember/service';

const PAGES = ['Portal home', 'Solutions home', 'Discussions home'];

export default Component.extend({
  data: service('portal-data'),
  layoutView: true,
  pages: computed({
    get() {
      return PAGES;
    }
  }),
  pageString: 'Portal home',
  actions: {
    selectView(view) {
      if(view === 'layout') {
        set(this, 'layoutView', true);
      } else {
        set(this, 'layoutView', false);
      }
    },
    pageAction(page) {
      if(page === 'Portal home') {
        set(this, 'pageString', 'Portal home');
      } else if (page === 'Solutions home') {
        set(this, 'pageString', this.data.get('solutions_home'));
      } else if (page === 'Discussions home') {
        set(this, 'pageString', 'Discussions home');
      }
    },
  }
});
