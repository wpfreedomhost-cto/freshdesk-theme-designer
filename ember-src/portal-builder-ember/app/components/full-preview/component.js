import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({

  didInsertElement() {
    this._super(...arguments);
  },

  iframeSrc: computed({
   get() {
    let html = '<body>Foo</body>';
    return html;
   } 
  }),

  actions: {
    testAction() {
      let iframe = this.element.querySelector('#test');
      iframe.contentDocument.body.addEventListener('click', () => {
        alert('click registered')
      });
    }
  }
});
