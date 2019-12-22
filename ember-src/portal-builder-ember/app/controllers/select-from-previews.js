import Controller from '@ember/controller';
import { computed, set } from '@ember/object';
import { inject as service } from '@ember/service';
import defaultTheme from 'portal-builder-ember/portal-themes/default-theme/all';

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
      
      let theme = preview.pagesObj();
      set(this, 'portalData.stylesheet', theme.stylesheet);
      set(this, 'portalData.header', theme.header);
      set(this, 'portalData.footer', theme.footer);
      set(this, 'portalData.pages', theme.pages);

      this.transitionToRoute('full-preview-screen');
    },

    onViewClick(preview) {
      console.log(preview);
    }
  }
});
