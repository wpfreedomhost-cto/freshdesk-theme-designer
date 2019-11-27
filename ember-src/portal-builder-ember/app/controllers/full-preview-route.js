import Controller from '@ember/controller';
import { get, set } from '@ember/object';

export default Controller.extend({
  showSidebar: true,
  actions: {
    toggleSidebar() {
      set(this, 'showSidebar', !get(this, 'showSidebar'))
    }
  }
});
