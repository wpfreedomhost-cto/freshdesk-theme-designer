import Controller from '@ember/controller';
import LiquidEngine from 'portal-builder-ember/utils/liquid-renderer';
import { set } from '@ember/object';

export default Controller.extend({
  liquidTemplate: '',

  renderedHtml: null,

  async test(property, liquidTemplate = null) {
    let test = await LiquidEngine(liquidTemplate, {name: 'ajeet'});
    set(this, property, test);
  },

  actions: {
    renderHTML() {
      this.test('renderedHtml', "<div><h2> Hi {{name}}</h2></div>");
    }
  }
});
