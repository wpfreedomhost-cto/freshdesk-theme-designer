import Controller from '@ember/controller';
import { computed, set } from '@ember/object';
import defaultTheme from 'portal-builder-ember/portal-themes/default-theme/all';
import { inject as service } from '@ember/service';

export default Controller.extend({
  portalData: service(),

  portalPreviews: computed({
    get() {
      return [
        {
          name: 'test',
          pagesObj: defaultTheme
        },
        {
          name: 'test1',
          pagesObj: {}
        },
        {
          name: 'test2',
          pagesObj: {}
        },
        {
          name: 'test2',
          pagesObj: {}
        },
        {
          name: 'test2',
          pagesObj: {}
        }
      ]
    }
  }),

  actions: {
    onEditClick(preview) {
      set(this, 'portalData.currentPage', 'portalHome');
      set(this, 'portalData.pages', preview.pagesObj());

      this.transitionToRoute('full-preview-screen');
    },

    onViewClick(preview) {
      console.log(preview);
    }
  }
});
