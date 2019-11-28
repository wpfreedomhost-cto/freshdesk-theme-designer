import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({

  isInputType: computed({
    get() {
      return this.type === 'text';
    }
  }),

  isDropdownType: computed({
    get() {
      return this.type === 'dropdown';
    }
  }),

  isObjectDropdownType: computed({
    get() {
      return this.type === 'objectDropdown';
    }
  })
});
