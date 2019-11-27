import Component from '@ember/component';
import { computed, set } from '@ember/object';

const PAGES = ['Portal home', 'Solutions home', 'Discussions home'];

export default Component.extend({
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
        set(this, 'pageString', 'Solution home');
      } else if (page === 'Discussions home') {
        set(this, 'pageString', 'Discussions home');
      }
    },
  }
});
